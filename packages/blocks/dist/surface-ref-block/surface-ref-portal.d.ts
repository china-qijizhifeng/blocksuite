import './portal/note.js';
import './portal/generic-block.js';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { BlockModel, Doc } from '@blocksuite/store';
import { type TemplateResult } from 'lit';
import type { FrameBlockModel } from '../frame-block/index.js';
import type { GroupElementModel } from '../surface-block/element-model/group.js';
declare const SurfaceRefPortal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class SurfaceRefPortal extends SurfaceRefPortal_base {
    get surfaceService(): import("@blocksuite/blocks").SurfaceBlockService;
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor doc: Doc;
    accessor refModel: GroupElementModel | FrameBlockModel;
    accessor renderModel: (model: BlockModel) => TemplateResult;
    accessor portal: HTMLDivElement;
    accessor canvasSlot: HTMLDivElement;
    private _getBlocksInFrame;
    private _getBlocksInGroup;
    private _renderEdgelessBlocks;
    setStackingCanvas(canvases: HTMLCanvasElement[]): void;
    setViewport: (viewport: {
        translateX: number;
        translateY: number;
        zoom: number;
    }) => void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'surface-ref-portal': SurfaceRefPortal;
    }
}
export {};
//# sourceMappingURL=surface-ref-portal.d.ts.map