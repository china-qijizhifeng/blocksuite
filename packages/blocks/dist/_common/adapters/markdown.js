import { assertExists, sha } from '@blocksuite/global/utils';
import { ASTWalker, BaseAdapter, BlockSnapshotSchema, getAssetName, nanoid, } from '@blocksuite/store';
import { format } from 'date-fns/format';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { NoteDisplayMode } from '../types.js';
import { getFilenameFromContentDisposition } from '../utils/header-value-parser.js';
import { remarkGfm } from './gfm.js';
import { createText, fetchable, fetchImage, isNullish } from './utils.js';
export class MarkdownAdapter extends BaseAdapter {
    constructor() {
        super(...arguments);
        this._traverseSnapshot = async (snapshot, markdown, assets) => {
            const assetsIds = [];
            const walker = new ASTWalker();
            walker.setONodeTypeGuard((node) => BlockSnapshotSchema.safeParse(node).success);
            walker.setEnter(async (o, context) => {
                const text = (o.node.props.text ?? { delta: [] });
                const currentTNode = context.currentNode();
                switch (o.node.flavour) {
                    case 'affine:code': {
                        context
                            .openNode({
                            type: 'code',
                            lang: o.node.props.language ?? null,
                            meta: null,
                            value: text.delta.map(delta => delta.insert).join(''),
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'affine:paragraph': {
                        const paragraphDepth = (context.getGlobalContext('affine:paragraph:depth') ?? 0);
                        switch (o.node.props.type) {
                            case 'h1':
                            case 'h2':
                            case 'h3':
                            case 'h4':
                            case 'h5':
                            case 'h6': {
                                context
                                    .openNode({
                                    type: 'heading',
                                    depth: parseInt(o.node.props.type[1]),
                                    children: this._deltaToMdAST(text.delta, paragraphDepth),
                                }, 'children')
                                    .closeNode();
                                break;
                            }
                            case 'text': {
                                context
                                    .openNode({
                                    type: 'paragraph',
                                    children: this._deltaToMdAST(text.delta, paragraphDepth),
                                }, 'children')
                                    .closeNode();
                                break;
                            }
                            case 'quote': {
                                context
                                    .openNode({
                                    type: 'blockquote',
                                    children: [],
                                }, 'children')
                                    .openNode({
                                    type: 'paragraph',
                                    children: this._deltaToMdAST(text.delta),
                                }, 'children')
                                    .closeNode()
                                    .closeNode();
                                break;
                            }
                        }
                        context.setGlobalContext('affine:paragraph:depth', paragraphDepth + 1);
                        break;
                    }
                    case 'affine:list': {
                        // check if the list is of the same type
                        // if true, add the list item to the list
                        // if false, create a new list
                        if (context.getNodeContext('affine:list:parent') === o.parent &&
                            currentTNode.type === 'list' &&
                            currentTNode.ordered === (o.node.props.type === 'numbered') &&
                            isNullish(currentTNode.children[0].checked) ===
                                isNullish(o.node.props.type === 'todo'
                                    ? o.node.props.checked
                                    : undefined)) {
                            context
                                .openNode({
                                type: 'listItem',
                                checked: o.node.props.type === 'todo'
                                    ? o.node.props.checked
                                    : undefined,
                                spread: false,
                                children: [],
                            }, 'children')
                                .openNode({
                                type: 'paragraph',
                                children: this._deltaToMdAST(text.delta),
                            }, 'children')
                                .closeNode();
                        }
                        else {
                            context
                                .openNode({
                                type: 'list',
                                ordered: o.node.props.type === 'numbered',
                                spread: false,
                                children: [],
                            }, 'children')
                                .setNodeContext('affine:list:parent', o.parent)
                                .openNode({
                                type: 'listItem',
                                checked: o.node.props.type === 'todo'
                                    ? o.node.props.checked
                                    : undefined,
                                spread: false,
                                children: [],
                            }, 'children')
                                .openNode({
                                type: 'paragraph',
                                children: this._deltaToMdAST(text.delta),
                            }, 'children')
                                .closeNode();
                        }
                        break;
                    }
                    case 'affine:divider': {
                        context
                            .openNode({
                            type: 'thematicBreak',
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'affine:image': {
                        const blobId = (o.node.props.sourceId ?? '');
                        if (!assets) {
                            break;
                        }
                        await assets.readFromBlob(blobId);
                        const blob = assets.getAssets().get(blobId);
                        assetsIds.push(blobId);
                        const blobName = getAssetName(assets.getAssets(), blobId);
                        if (!blob) {
                            break;
                        }
                        context
                            .openNode({
                            type: 'paragraph',
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'image',
                            url: `assets/${blobName}`,
                            title: o.node.props.caption ?? null,
                            alt: blob.name ?? null,
                        }, 'children')
                            .closeNode()
                            .closeNode();
                        break;
                    }
                    case 'affine:page': {
                        const title = (o.node.props.title ?? { delta: [] });
                        if (title.delta.length === 0)
                            break;
                        context
                            .openNode({
                            type: 'heading',
                            depth: 1,
                            children: this._deltaToMdAST(title.delta, 0),
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'affine:database': {
                        const rows = [];
                        const columns = o.node.props.columns;
                        const children = o.node.children;
                        const cells = o.node.props.cells;
                        const createAstCell = (children) => ({
                            type: 'tableCell',
                            children,
                        });
                        const mdAstCells = Array.prototype.map.call(children, (v) => Array.prototype.map.call(columns, col => {
                            const cell = cells[v.id]?.[col.id];
                            if (!cell && col.type !== 'title') {
                                return createAstCell([{ type: 'text', value: '' }]);
                            }
                            switch (col.type) {
                                case 'link':
                                case 'progress':
                                case 'number':
                                    return createAstCell([
                                        {
                                            type: 'text',
                                            value: cell.value,
                                        },
                                    ]);
                                case 'rich-text':
                                    return createAstCell(this._deltaToMdAST(cell.value.delta));
                                case 'title':
                                    return createAstCell(this._deltaToMdAST(v.props.text.delta));
                                case 'date':
                                    return createAstCell([
                                        {
                                            type: 'text',
                                            value: format(new Date(cell.value), 'yyyy-MM-dd'),
                                        },
                                    ]);
                                case 'select': {
                                    const value = col.data.options.find((opt) => opt.id === cell.value)?.value;
                                    return createAstCell([{ type: 'text', value }]);
                                }
                                case 'multi-select': {
                                    const value = Array.prototype.map
                                        .call(cell.value, val => col.data.options.find((opt) => val === opt.id).value)
                                        .filter(Boolean)
                                        .join(',');
                                    return createAstCell([{ type: 'text', value }]);
                                }
                                case 'checkbox': {
                                    return createAstCell([
                                        { type: 'text', value: cell.value },
                                    ]);
                                }
                                default:
                                    return createAstCell([
                                        { type: 'text', value: cell.value },
                                    ]);
                            }
                        }));
                        // Handle first row.
                        if (Array.isArray(columns)) {
                            rows.push({
                                type: 'tableRow',
                                children: Array.prototype.map.call(columns, v => createAstCell([
                                    {
                                        type: 'text',
                                        value: v.name,
                                    },
                                ])),
                            });
                        }
                        // Handle 2-... rows
                        Array.prototype.forEach.call(mdAstCells, children => {
                            rows.push({ type: 'tableRow', children });
                        });
                        context
                            .openNode({
                            type: 'table',
                            children: rows,
                        })
                            .closeNode();
                        context.skipAllChildren();
                        break;
                    }
                    case 'affine:embed-synced-doc': {
                        const type = this.configs.get('embedSyncedDocExportType');
                        // this context is used for nested sync block
                        if (context.getGlobalContext('embed-synced-doc-counter') === undefined) {
                            context.setGlobalContext('embed-synced-doc-counter', 0);
                        }
                        let counter = context.getGlobalContext('embed-synced-doc-counter');
                        context.setGlobalContext('embed-synced-doc-counter', ++counter);
                        if (type === 'content') {
                            assertExists(o.node.props.pageId);
                            const syncedDocId = o.node.props.pageId;
                            const syncedDoc = this.job.collection.getDoc(syncedDocId);
                            if (!syncedDoc)
                                break;
                            if (counter === 1) {
                                const syncedSnapshot = await this.job.docToSnapshot(syncedDoc);
                                await walker.walkONode(syncedSnapshot.blocks);
                            }
                            else {
                                // TODO(@L-Sun) may be use the nested content
                                context
                                    .openNode({
                                    type: 'paragraph',
                                    children: [
                                        { type: 'text', value: syncedDoc.meta?.title ?? '' },
                                    ],
                                })
                                    .closeNode();
                            }
                        }
                        break;
                    }
                    case 'affine:embed-loom':
                    case 'affine:embed-github':
                    case 'affine:embed-youtube':
                    case 'affine:embed-figma':
                    case 'affine:bookmark': {
                        // Parse as link
                        if (typeof o.node.props.title !== 'string' ||
                            typeof o.node.props.url !== 'string') {
                            break;
                        }
                        context
                            .openNode({
                            type: 'paragraph',
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'link',
                            url: o.node.props.url,
                            children: [
                                {
                                    type: 'text',
                                    value: o.node.props.title,
                                },
                            ],
                        }, 'children')
                            .closeNode()
                            .closeNode();
                        break;
                    }
                }
            });
            walker.setLeave((o, context) => {
                const currentTNode = context.currentNode();
                const previousTNode = context.previousNode();
                switch (o.node.flavour) {
                    case 'affine:paragraph': {
                        context.setGlobalContext('affine:paragraph:depth', context.getGlobalContext('affine:paragraph:depth') - 1);
                        break;
                    }
                    case 'affine:list': {
                        if (context.getPreviousNodeContext('affine:list:parent') === o.parent &&
                            currentTNode.type === 'listItem' &&
                            previousTNode?.type === 'list' &&
                            previousTNode.ordered === (o.node.props.type === 'numbered') &&
                            isNullish(currentTNode.checked) ===
                                isNullish(o.node.props.type === 'todo'
                                    ? o.node.props.checked
                                    : undefined)) {
                            context.closeNode();
                            if (o.next?.flavour !== 'affine:list') {
                                // If the next node is not a list, close the list
                                context.closeNode();
                            }
                        }
                        else {
                            context.closeNode().closeNode();
                        }
                        break;
                    }
                    case 'affine:embed-synced-doc': {
                        const counter = context.getGlobalContext('embed-synced-doc-counter');
                        context.setGlobalContext('embed-synced-doc-counter', counter - 1);
                        break;
                    }
                }
            });
            return {
                ast: (await walker.walk(snapshot, markdown)),
                assetsIds,
            };
        };
        this._traverseMarkdown = (markdown, snapshot, assets) => {
            const walker = new ASTWalker();
            walker.setONodeTypeGuard((node) => !Array.isArray(node) &&
                'type' in node &&
                node.type !== undefined);
            walker.setEnter(async (o, context) => {
                switch (o.node.type) {
                    case 'html': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:paragraph',
                            props: {
                                type: 'text',
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: [
                                        {
                                            insert: o.node.value,
                                        },
                                    ],
                                },
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'code': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:code',
                            props: {
                                language: o.node.lang ?? 'Plain Text',
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: [
                                        {
                                            insert: o.node.value,
                                        },
                                    ],
                                },
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'paragraph': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:paragraph',
                            props: {
                                type: 'text',
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: this._mdastToDelta(o.node),
                                },
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'heading': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:paragraph',
                            props: {
                                type: `h${o.node.depth}`,
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: this._mdastToDelta(o.node),
                                },
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'blockquote': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:paragraph',
                            props: {
                                type: 'quote',
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: this._mdastToDelta(o.node),
                                },
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        context.skipAllChildren();
                        break;
                    }
                    case 'list': {
                        context.setNodeContext('mdast:list:ordered', o.node.ordered);
                        break;
                    }
                    case 'listItem': {
                        context.openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:list',
                            props: {
                                type: o.node.checked !== null
                                    ? 'todo'
                                    : context.getNodeContext('mdast:list:ordered')
                                        ? 'numbered'
                                        : 'bulleted',
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: o.node.children[0] &&
                                        o.node.children[0].type === 'paragraph'
                                        ? this._mdastToDelta(o.node.children[0])
                                        : [],
                                },
                                checked: o.node.checked ?? false,
                                collapsed: false,
                            },
                            children: [],
                        }, 'children');
                        if (o.node.children[0] && o.node.children[0].type === 'paragraph') {
                            context.skipChildren(1);
                        }
                        break;
                    }
                    case 'thematicBreak': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:divider',
                            props: {},
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'image': {
                        let blobId = '';
                        if (!assets) {
                            break;
                        }
                        if (!fetchable(o.node.url)) {
                            const imageURL = o.node.url;
                            assets.getAssets().forEach((_value, key) => {
                                const imageName = getAssetName(assets.getAssets(), key);
                                if (decodeURIComponent(imageURL).includes(imageName)) {
                                    blobId = key;
                                }
                            });
                        }
                        else {
                            const res = await fetchImage(o.node.url, undefined, this.configs.get('imageProxy'));
                            const clonedRes = res.clone();
                            const file = new File([await res.blob()], getFilenameFromContentDisposition(res.headers.get('Content-Disposition') ?? '') ??
                                (o.node.url.split('/').at(-1) ?? 'image') +
                                    '.' +
                                    (res.headers.get('Content-Type')?.split('/').at(-1) ?? 'png'), {
                                type: res.headers.get('Content-Type') ?? '',
                            });
                            blobId = await sha(await clonedRes.arrayBuffer());
                            assets?.getAssets().set(blobId, file);
                            await assets?.writeToBlob(blobId);
                        }
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:image',
                            props: {
                                sourceId: blobId,
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'table': {
                        const viewsColumns = o.node.children[0].children.map(() => {
                            return {
                                id: nanoid(),
                                hide: false,
                                width: 180,
                            };
                        });
                        const cells = Object.create(null);
                        o.node.children.slice(1).forEach(row => {
                            const rowId = nanoid();
                            cells[rowId] = Object.create(null);
                            row.children.slice(1).forEach((cell, index) => {
                                cells[rowId][viewsColumns[index + 1].id] = {
                                    columnId: viewsColumns[index + 1].id,
                                    value: createText(cell.children
                                        .map(child => ('value' in child ? child.value : ''))
                                        .join('')),
                                };
                            });
                        });
                        const columns = o.node.children[0].children.map((_child, index) => {
                            return {
                                type: index === 0 ? 'title' : 'rich-text',
                                name: _child.children
                                    .map(child => ('value' in child ? child.value : ''))
                                    .join(''),
                                data: {},
                                id: viewsColumns[index].id,
                            };
                        });
                        context.openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:database',
                            props: {
                                views: [
                                    {
                                        id: nanoid(),
                                        name: 'Table View',
                                        mode: 'table',
                                        columns: [],
                                        filter: {
                                            type: 'group',
                                            op: 'and',
                                            conditions: [],
                                        },
                                        header: {
                                            titleColumn: viewsColumns[0]?.id,
                                            iconColumn: 'type',
                                        },
                                    },
                                ],
                                title: {
                                    '$blocksuite:internal:text$': true,
                                    delta: [],
                                },
                                cells,
                                columns,
                            },
                            children: [],
                        }, 'children');
                        context.setNodeContext('affine:table:rowid', Object.keys(cells));
                        context.skipChildren(1);
                        break;
                    }
                    case 'tableRow': {
                        context
                            .openNode({
                            type: 'block',
                            id: context.getNodeContext('affine:table:rowid').shift() ?? nanoid(),
                            flavour: 'affine:paragraph',
                            props: {
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: this._mdastToDelta(o.node.children[0]),
                                },
                                type: 'text',
                            },
                            children: [],
                        })
                            .closeNode();
                        context.skipAllChildren();
                        break;
                    }
                }
            });
            walker.setLeave((o, context) => {
                switch (o.node.type) {
                    case 'listItem': {
                        context.closeNode();
                        break;
                    }
                    case 'table': {
                        context.closeNode();
                        break;
                    }
                }
            });
            return walker.walk(markdown, snapshot);
        };
    }
    _astToMarkdown(ast) {
        return unified()
            .use(remarkGfm)
            .use(remarkStringify, {
            resourceLink: true,
        })
            .stringify(ast)
            .replace(/&#x20;\n/g, ' \n');
    }
    _markdownToAst(markdown) {
        return unified().use(remarkParse).use(remarkGfm).parse(markdown);
    }
    _deltaToMdAST(deltas, depth = 0) {
        if (depth > 0) {
            deltas.unshift({ insert: ' '.repeat(4).repeat(depth) });
        }
        return deltas.map(delta => {
            let mdast = {
                type: 'text',
                value: delta.attributes?.underline
                    ? `<u>${delta.insert}</u>`
                    : delta.insert,
            };
            if (delta.attributes?.reference) {
                const title = this.configs.get('title:' + delta.attributes.reference.pageId);
                if (typeof title === 'string') {
                    mdast = {
                        type: 'text',
                        value: title,
                    };
                }
            }
            if (delta.attributes?.code) {
                mdast = {
                    type: 'inlineCode',
                    value: delta.insert,
                };
            }
            if (delta.attributes?.bold) {
                mdast = {
                    type: 'strong',
                    children: [mdast],
                };
            }
            if (delta.attributes?.italic) {
                mdast = {
                    type: 'emphasis',
                    children: [mdast],
                };
            }
            if (delta.attributes?.strike) {
                mdast = {
                    type: 'delete',
                    children: [mdast],
                };
            }
            if (delta.attributes?.link) {
                if (delta.insert === '') {
                    mdast = {
                        type: 'text',
                        value: delta.attributes.link,
                    };
                }
                else if (delta.insert !== delta.attributes.link) {
                    mdast = {
                        type: 'link',
                        url: delta.attributes.link,
                        children: [mdast],
                    };
                }
            }
            return mdast;
        });
    }
    _mdastToDelta(ast) {
        switch (ast.type) {
            case 'text': {
                return [{ insert: ast.value }];
            }
            case 'inlineCode': {
                return [{ insert: ast.value, attributes: { code: true } }];
            }
            case 'strong': {
                return ast.children.flatMap(child => this._mdastToDelta(child).map(delta => {
                    delta.attributes = { ...delta.attributes, bold: true };
                    return delta;
                }));
            }
            case 'emphasis': {
                return ast.children.flatMap(child => this._mdastToDelta(child).map(delta => {
                    delta.attributes = { ...delta.attributes, italic: true };
                    return delta;
                }));
            }
            case 'delete': {
                return ast.children.flatMap(child => this._mdastToDelta(child).map(delta => {
                    delta.attributes = { ...delta.attributes, strike: true };
                    return delta;
                }));
            }
            case 'link': {
                return ast.children.flatMap(child => this._mdastToDelta(child).map(delta => {
                    delta.attributes = { ...delta.attributes, link: ast.url };
                    return delta;
                }));
            }
            case 'list': {
                return [];
            }
        }
        return 'children' in ast
            ? ast.children.flatMap(child => this._mdastToDelta(child))
            : [];
    }
    async fromDocSnapshot({ snapshot, assets, }) {
        let buffer = '';
        const { file, assetsIds } = await this.fromBlockSnapshot({
            snapshot: snapshot.blocks,
            assets,
        });
        buffer += file;
        return {
            file: buffer,
            assetsIds,
        };
    }
    async fromBlockSnapshot({ snapshot, assets, }) {
        const root = {
            type: 'root',
            children: [],
        };
        const { ast, assetsIds } = await this._traverseSnapshot(snapshot, root, assets);
        return {
            file: this._astToMarkdown(ast),
            assetsIds,
        };
    }
    async fromSliceSnapshot({ snapshot, assets, }) {
        let buffer = '';
        const sliceAssetsIds = [];
        for (const contentSlice of snapshot.content) {
            const root = {
                type: 'root',
                children: [],
            };
            const { ast, assetsIds } = await this._traverseSnapshot(contentSlice, root, assets);
            sliceAssetsIds.push(...assetsIds);
            buffer += this._astToMarkdown(ast);
        }
        const markdown = buffer.match(/\n/g)?.length === 1 ? buffer.trimEnd() : buffer;
        return {
            file: markdown,
            assetsIds: sliceAssetsIds,
        };
    }
    async toDocSnapshot(payload) {
        const markdownAst = this._markdownToAst(payload.file);
        const blockSnapshotRoot = {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:note',
            props: {
                xywh: '[0,0,800,95]',
                background: '--affine-background-secondary-color',
                index: 'a0',
                hidden: false,
                displayMode: NoteDisplayMode.DocAndEdgeless,
            },
            children: [],
        };
        return {
            type: 'page',
            meta: {
                id: nanoid(),
                title: 'Untitled',
                createDate: Date.now(),
                tags: [],
            },
            blocks: {
                type: 'block',
                id: nanoid(),
                flavour: 'affine:page',
                props: {
                    title: {
                        '$blocksuite:internal:text$': true,
                        delta: [
                            {
                                insert: 'Untitled',
                            },
                        ],
                    },
                },
                children: [
                    {
                        type: 'block',
                        id: nanoid(),
                        flavour: 'affine:surface',
                        props: {
                            elements: {},
                        },
                        children: [],
                    },
                    await this._traverseMarkdown(markdownAst, blockSnapshotRoot, payload.assets),
                ],
            },
        };
    }
    async toBlockSnapshot(payload) {
        const markdownAst = this._markdownToAst(payload.file);
        const blockSnapshotRoot = {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:note',
            props: {
                xywh: '[0,0,800,95]',
                background: '--affine-background-secondary-color',
                index: 'a0',
                hidden: false,
                displayMode: NoteDisplayMode.DocAndEdgeless,
            },
            children: [],
        };
        return this._traverseMarkdown(markdownAst, blockSnapshotRoot, payload.assets);
    }
    async toSliceSnapshot(payload) {
        let codeFence = '';
        payload.file = payload.file
            .split('\n')
            .map(line => {
            if (line.trimStart().startsWith('-')) {
                return line;
            }
            const trimmedLine = line.trimStart();
            if (!codeFence && trimmedLine.startsWith('```')) {
                codeFence = trimmedLine.substring(0, trimmedLine.lastIndexOf('```') + 3);
                if (codeFence.split('').every(c => c === '`')) {
                    return line;
                }
                codeFence = '';
            }
            if (!codeFence && trimmedLine.startsWith('~~~')) {
                codeFence = trimmedLine.substring(0, trimmedLine.lastIndexOf('~~~') + 3);
                if (codeFence.split('').every(c => c === '~')) {
                    return line;
                }
                codeFence = '';
            }
            if (!!codeFence &&
                trimmedLine.startsWith(codeFence) &&
                trimmedLine.lastIndexOf(codeFence) === 0) {
                codeFence = '';
            }
            if (codeFence) {
                return line;
            }
            return line.replace(/^ /, '&#x20;');
        })
            .join('\n');
        const markdownAst = this._markdownToAst(payload.file);
        const blockSnapshotRoot = {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:note',
            props: {
                xywh: '[0,0,800,95]',
                background: '--affine-background-secondary-color',
                index: 'a0',
                hidden: false,
                displayMode: NoteDisplayMode.DocAndEdgeless,
            },
            children: [],
        };
        const contentSlice = (await this._traverseMarkdown(markdownAst, blockSnapshotRoot, payload.assets));
        if (contentSlice.children.length === 0) {
            return null;
        }
        return {
            type: 'slice',
            content: [contentSlice],
            pageVersion: payload.pageVersion,
            workspaceVersion: payload.workspaceVersion,
            workspaceId: payload.workspaceId,
            pageId: payload.pageId,
        };
    }
}
//# sourceMappingURL=markdown.js.map