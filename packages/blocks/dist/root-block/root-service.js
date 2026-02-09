import { BlockService } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { FileDropManager, } from '../_common/components/file-drop-manager.js';
import { createDocModeService, getSelectedPeekableBlocksCommand, peekSelectedBlockCommand, } from '../_common/components/index.js';
import { DEFAULT_IMAGE_PROXY_ENDPOINT, EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH, } from '../_common/consts.js';
import { ExportManager } from '../_common/export-manager/export-manager.js';
import { HtmlTransformer, MarkdownTransformer, ZipTransformer, } from '../_common/transformers/index.js';
import { NoteDisplayMode } from '../_common/types.js';
import { getRootByEditorHost } from '../_common/utils/index.js';
import { matchFlavours } from '../_common/utils/model.js';
import { asyncFocusRichText } from '../_common/utils/selection.js';
import { CommunityCanvasTextFonts } from '../surface-block/consts.js';
import { Bound, Vec } from '../surface-block/index.js';
import { EditPropsStore } from '../surface-block/managers/edit-session.js';
import { copySelectedModelsCommand, deleteSelectedModelsCommand, deleteTextCommand, formatBlockCommand, formatNativeCommand, formatTextCommand, getBlockIndexCommand, getBlockSelectionsCommand, getImageSelectionsCommand, getNextBlockCommand, getPrevBlockCommand, getSelectedBlocksCommand, getSelectedModelsCommand, getTextSelectionCommand, } from './commands/index.js';
import { FontLoader } from './font-loader/font-loader.js';
export class RootService extends BlockService {
    constructor() {
        super(...arguments);
        this._fileDropOptions = {
            flavour: this.flavour,
        };
        this._exportOptions = {
            imageProxyEndpoint: DEFAULT_IMAGE_PROXY_ENDPOINT,
        };
        this._embedBlockRegistry = new Set();
        this.fontLoader = new FontLoader();
        this.editPropsStore = new EditPropsStore(this);
        // implements provided by affine
        this.notificationService = null;
        this.peekViewService = null;
        this.docModeService = createDocModeService(this.doc.id);
        this.quickSearchService = null;
        this.telemetryService = null;
        this.transformers = {
            markdown: MarkdownTransformer,
            html: HtmlTransformer,
            zip: ZipTransformer,
        };
        this._getParentModelBySelection = () => {
            const currentMode = this.docModeService.getMode();
            const root = this.doc.root;
            if (!root)
                return {
                    index: undefined,
                    model: null,
                };
            if (currentMode === 'edgeless') {
                const surface = root.children.find(child => child.flavour === 'affine:surface') ?? null;
                return { index: undefined, model: surface };
            }
            if (currentMode === 'page') {
                let selectedBlock = this.selectedBlocks[0]?.model;
                let index = undefined;
                if (!selectedBlock) {
                    // if no block is selected, append to the last note block
                    selectedBlock = this._getLastNoteBlock();
                }
                while (selectedBlock && selectedBlock.flavour !== 'affine:note') {
                    // selectedBlock = this.doc.getParent(selectedBlock.id);
                    const parent = this.doc.getParent(selectedBlock.id);
                    index = parent?.children.indexOf(selectedBlock);
                    selectedBlock = parent;
                }
                return { index, model: selectedBlock };
            }
            return {
                index: undefined,
                model: null,
            };
        };
        this._insertCard = (flavour, targetStyle, props) => {
            const host = this.host;
            const mode = this.docModeService.getMode();
            const { model, index } = this._getParentModelBySelection();
            if (mode === 'page') {
                host.doc.addBlock(flavour, props, model, index);
                return;
            }
            if (mode === 'edgeless') {
                const edgelessRoot = getRootByEditorHost(host);
                if (!edgelessRoot)
                    return;
                edgelessRoot.service.viewport.smoothZoom(1);
                const surface = edgelessRoot.surface;
                const center = Vec.toVec(surface.renderer.center);
                const cardId = edgelessRoot.service.addBlock(flavour, {
                    ...props,
                    xywh: Bound.fromCenter(center, EMBED_CARD_WIDTH[targetStyle], EMBED_CARD_HEIGHT[targetStyle]).serialize(),
                    style: targetStyle,
                }, surface.model);
                edgelessRoot.service.selection.set({
                    elements: [cardId],
                    editing: false,
                });
                edgelessRoot.tools.setEdgelessTool({
                    type: 'default',
                });
                return;
            }
        };
        this._insertLink = (url) => {
            const host = this.host;
            const rootService = host.spec.getService('affine:page');
            const embedOptions = rootService.getEmbedBlockOptions(url);
            let flavour = 'affine:bookmark';
            let targetStyle = 'vertical';
            const props = { url };
            if (embedOptions) {
                flavour = embedOptions.flavour;
                targetStyle = embedOptions.styles[0];
            }
            this._insertCard(flavour, targetStyle, props);
            return flavour;
        };
        this._insertDoc = (docId) => {
            const flavour = 'affine:embed-linked-doc';
            const targetStyle = 'vertical';
            const props = { pageId: docId };
            this._insertCard(flavour, targetStyle, props);
            return flavour;
        };
        this.registerEmbedBlockOptions = (options) => {
            this._embedBlockRegistry.add(options);
        };
        this.getEmbedBlockOptions = (url) => {
            const entries = this._embedBlockRegistry.entries();
            for (const [options] of entries) {
                const regex = options.urlRegex;
                if (regex.test(url))
                    return options;
            }
            return null;
        };
        this.appendParagraph = (text = '') => {
            const { doc } = this;
            if (!doc.root)
                return;
            if (doc.readonly)
                return;
            let noteId = this._getLastNoteBlock()?.id;
            if (!noteId) {
                noteId = doc.addBlock('affine:note', {}, doc.root.id);
            }
            const id = doc.addBlock('affine:paragraph', { text: new doc.Text(text) }, noteId);
            asyncFocusRichText(this.host, id, {
                index: text.length,
                length: 0,
            })?.catch(console.error);
        };
        this.insertLinkByQuickSearch = async (userInput, skipSelection) => {
            if (!this.quickSearchService)
                return;
            const result = await this.quickSearchService.searchDoc({
                action: 'insert',
                userInput,
                skipSelection,
            });
            if (!result)
                return;
            // add linked doc
            if ('docId' in result) {
                this._insertDoc(result.docId);
                return { flavour: 'affine:embed-linked-doc', isNewDoc: result.isNewDoc };
            }
            // add normal link;
            if ('userInput' in result) {
                this._insertLink(result.userInput);
                return {
                    flavour: 'affine:bookmark',
                };
            }
            return;
        };
    }
    get viewportElement() {
        const rootElement = this.std.view.viewFromPath('block', [
            this.std.doc.root?.id ?? '',
        ]);
        assertExists(rootElement);
        const viewportElement = rootElement.viewportElement;
        assertExists(viewportElement);
        return viewportElement;
    }
    get selectedBlocks() {
        let result = [];
        this.std.command
            .chain()
            .tryAll(chain => [
            chain.getTextSelection(),
            chain.getImageSelections(),
            chain.getBlockSelections(),
        ])
            .getSelectedBlocks()
            .inline(({ selectedBlocks }) => {
            if (!selectedBlocks)
                return;
            result = selectedBlocks;
        })
            .run();
        return result;
    }
    get selectedModels() {
        return this.selectedBlocks.map(block => block.model);
    }
    _getLastNoteBlock() {
        const { doc } = this;
        let note = null;
        if (!doc.root)
            return null;
        const { children } = doc.root;
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (matchFlavours(child, ['affine:note']) &&
                child.displayMode !== NoteDisplayMode.EdgelessOnly) {
                note = child;
                break;
            }
        }
        return note;
    }
    unmounted() {
        this.editPropsStore.dispose();
        this.fontLoader.clear();
    }
    mounted() {
        super.mounted();
        this.std.command
            .add('getBlockIndex', getBlockIndexCommand)
            .add('getNextBlock', getNextBlockCommand)
            .add('getPrevBlock', getPrevBlockCommand)
            .add('getSelectedBlocks', getSelectedBlocksCommand)
            .add('copySelectedModels', copySelectedModelsCommand)
            .add('deleteSelectedModels', deleteSelectedModelsCommand)
            .add('getSelectedModels', getSelectedModelsCommand)
            .add('getBlockSelections', getBlockSelectionsCommand)
            .add('getImageSelections', getImageSelectionsCommand)
            .add('getTextSelection', getTextSelectionCommand)
            .add('deleteText', deleteTextCommand)
            .add('formatBlock', formatBlockCommand)
            .add('formatNative', formatNativeCommand)
            .add('formatText', formatTextCommand)
            .add('peekSelectedBlock', peekSelectedBlockCommand)
            .add('getSelectedPeekableBlocks', getSelectedPeekableBlocksCommand);
        this.loadFonts();
        this.exportManager = new ExportManager(this, this._exportOptions);
        this.fileDropManager = new FileDropManager(this, this._fileDropOptions);
        this.disposables.addFromEvent(this.host, 'dragover', this.fileDropManager.onDragOver);
        this.disposables.addFromEvent(this.host, 'dragleave', this.fileDropManager.onDragLeave);
        this.disposables.add(this.std.event.add('pointerDown', ctx => {
            const state = ctx.get('pointerState');
            state.raw.stopPropagation();
        }));
    }
    loadFonts() {
        this.fontLoader.load(CommunityCanvasTextFonts);
    }
}
//# sourceMappingURL=root-service.js.map