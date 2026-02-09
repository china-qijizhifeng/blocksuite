import { ASTWalker, BaseAdapter, BlockSnapshotSchema, nanoid, } from '@blocksuite/store';
import { NoteDisplayMode } from '../types.js';
export class PlainTextAdapter extends BaseAdapter {
    async _traverseSnapshot(snapshot) {
        let buffer = '';
        const walker = new ASTWalker();
        walker.setONodeTypeGuard((node) => BlockSnapshotSchema.safeParse(node).success);
        walker.setEnter(o => {
            const text = (o.node.props.text ?? { delta: [] });
            switch (o.node.flavour) {
                case 'affine:code': {
                    buffer += text.delta.map(delta => delta.insert).join('');
                    buffer += '\n';
                    break;
                }
                case 'affine:paragraph': {
                    buffer += text.delta.map(delta => delta.insert).join('');
                    buffer += '\n';
                    break;
                }
                case 'affine:list': {
                    buffer += text.delta.map(delta => delta.insert).join('');
                    buffer += '\n';
                    break;
                }
                case 'affine:divider': {
                    buffer += '---\n';
                    break;
                }
            }
        });
        await walker.walkONode(snapshot);
        return {
            plaintext: buffer,
        };
    }
    async fromDocSnapshot({ snapshot, assets, }) {
        let buffer = '';
        if (snapshot.meta.title) {
            buffer += `${snapshot.meta.title}\n\n`;
        }
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
    async fromBlockSnapshot({ snapshot, }) {
        const { plaintext } = await this._traverseSnapshot(snapshot);
        return {
            file: plaintext,
            assetsIds: [],
        };
    }
    async fromSliceSnapshot({ snapshot, }) {
        let buffer = '';
        const sliceAssetsIds = [];
        for (const contentSlice of snapshot.content) {
            const { plaintext } = await this._traverseSnapshot(contentSlice);
            buffer += plaintext;
        }
        const plaintext = buffer.match(/\n/g)?.length === 1 ? buffer.trimEnd() : buffer;
        return {
            file: plaintext,
            assetsIds: sliceAssetsIds,
        };
    }
    toDocSnapshot(payload) {
        payload.file = payload.file.replaceAll('\r', '');
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
                    {
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
                        children: payload.file.split('\n').map((line) => {
                            return {
                                type: 'block',
                                id: nanoid(),
                                flavour: 'affine:paragraph',
                                props: {
                                    type: 'text',
                                    text: {
                                        '$blocksuite:internal:text$': true,
                                        delta: [
                                            {
                                                insert: line,
                                            },
                                        ],
                                    },
                                },
                                children: [],
                            };
                        }),
                    },
                ],
            },
        };
    }
    toBlockSnapshot(payload) {
        payload.file = payload.file.replaceAll('\r', '');
        return {
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
            children: payload.file.split('\n').map((line) => {
                return {
                    type: 'block',
                    id: nanoid(),
                    flavour: 'affine:paragraph',
                    props: {
                        type: 'text',
                        text: {
                            '$blocksuite:internal:text$': true,
                            delta: [
                                {
                                    insert: line,
                                },
                            ],
                        },
                    },
                    children: [],
                };
            }),
        };
    }
    toSliceSnapshot(payload) {
        if (payload.file.trim().length === 0) {
            return null;
        }
        payload.file = payload.file.replaceAll('\r', '');
        const contentSlice = {
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
            children: payload.file.split('\n').map((line) => {
                return {
                    type: 'block',
                    id: nanoid(),
                    flavour: 'affine:paragraph',
                    props: {
                        type: 'text',
                        text: {
                            '$blocksuite:internal:text$': true,
                            delta: [
                                {
                                    insert: line,
                                },
                            ],
                        },
                    },
                    children: [],
                };
            }),
        };
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
//# sourceMappingURL=plain-text.js.map