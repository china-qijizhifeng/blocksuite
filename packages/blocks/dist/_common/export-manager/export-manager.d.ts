import type { BlockService, EditorHost } from '@blocksuite/block-std';
import type { BlockModel, Doc } from '@blocksuite/store';
import type { EdgelessBlockModel } from '../../root-block/edgeless/edgeless-block-model.js';
import type { EdgelessRootBlockComponent } from '../../root-block/edgeless/edgeless-root-block.js';
import type { IBound } from '../../surface-block/consts.js';
import { type Renderer } from '../../surface-block/index.js';
export type ExportOptions = {
    imageProxyEndpoint: string;
};
export declare class ExportManager {
    get doc(): Doc;
    get editorHost(): EditorHost;
    private _exportOptions;
    private _blockService;
    constructor(blockService: BlockService, options: ExportOptions);
    private _checkReady;
    private _drawEdgelessBackground;
    private _html2canvas;
    private _createCanvas;
    private _docToCanvas;
    private _replaceRichTextWithSvgElement;
    private _enableMediaPrint;
    private _disableMediaPrint;
    private _elementToSvgElement;
    private _checkCanContinueToCanvas;
    private _toCanvas;
    edgelessToCanvas(surfaceRenderer: Renderer, bound: IBound, blockElementGetter?: (model: BlockModel) => Element | null, edgeless?: EdgelessRootBlockComponent, nodes?: EdgelessBlockModel[], surfaces?: BlockSuite.SurfaceElementModelType[], edgelessBackground?: {
        zoom: number;
    }): Promise<HTMLCanvasElement | undefined>;
    exportPng(): Promise<void>;
    replaceImgSrcWithSvg: (element: HTMLElement) => Promise<void>;
    exportPdf(): Promise<void>;
}
//# sourceMappingURL=export-manager.d.ts.map