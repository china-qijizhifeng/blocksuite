import type { BlockStdScope } from '@blocksuite/block-std';
import { type BlockSnapshot } from '@blocksuite/store';
import { type SerializedElement } from '../../../surface-block/element-model/base.js';
import { type IVec } from '../../../surface-block/utils/vec.js';
import { PageClipboard } from '../../clipboard/index.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
interface CanvasExportOptions {
    dpr?: number;
    padding?: number;
    background?: string;
}
export declare class EdgelessClipboardController extends PageClipboard {
    host: EdgelessRootBlockComponent;
    private get std();
    private get doc();
    private get surface();
    private get edgeless();
    private get toolManager();
    private get selectionManager();
    private get _rootService();
    private get _exportManager();
    constructor(host: EdgelessRootBlockComponent);
    private _initEdgelessClipboard;
    private _onCopy;
    private _onPaste;
    private _onCut;
    private _createCanvasElement;
    private _createCanvasElements;
    private _createNoteBlocks;
    private _createEdgelessTextBlocks;
    private _createFrameBlocks;
    private _createImageBlocks;
    private _createAttachmentBlocks;
    private _createBookmarkBlocks;
    private _createGithubEmbedBlocks;
    private _createYoutubeEmbedBlocks;
    private _createFigmaEmbedBlocks;
    private _createLinkedDocEmbedBlocks;
    private _createSyncedDocEmbedBlocks;
    private _createHtmlEmbedBlocks;
    private _createLoomEmbedBlocks;
    private _emitSelectionChangeAfterPaste;
    private _updatePastedElementsIndex;
    private _pasteTextContentAsNote;
    private _pasteShapesAndBlocks;
    private _replaceRichTextWithSvgElement;
    private _elementToSvgElement;
    private _edgelessToCanvas;
    private _checkCanContinueToCanvas;
    hostConnected(): void;
    copy(): void;
    createElementsFromClipboardData(elementsRawData: (SerializedElement | BlockSnapshot)[], pasteCenter?: IVec): Promise<{
        canvasElements: BlockSuite.SurfaceModelType[];
        blockModels: BlockSuite.EdgelessBlockModelType[];
    }>;
    toCanvas(blocks: BlockSuite.EdgelessBlockModelType[], shapes: BlockSuite.SurfaceModelType[], options?: CanvasExportOptions): Promise<HTMLCanvasElement | undefined>;
    copyAsPng(blocks: BlockSuite.EdgelessBlockModelType[], shapes: BlockSuite.SurfaceModelType[]): Promise<void>;
}
export declare function prepareClipboardData(selectedAll: BlockSuite.EdgelessModelType[], std: BlockStdScope): Promise<{
    snapshot: (SerializedElement | {
        type: "block";
        id: string;
        flavour: string;
        version?: number | undefined;
        props: Record<string, unknown>;
        children: BlockSnapshot[];
    })[];
    blobs: Record<string, import("../../clipboard/adapter.js").FileSnapshot>;
}>;
export {};
//# sourceMappingURL=clipboard.d.ts.map