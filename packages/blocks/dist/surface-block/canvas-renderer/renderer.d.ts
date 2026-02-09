import { Slot } from '@blocksuite/global/utils';
import { Viewport } from '../../root-block/edgeless/utils/viewport.js';
import type { IBound } from '../consts.js';
import type { SurfaceElementModel } from '../element-model/base.js';
import type { LayerManager } from '../managers/layer-manager.js';
import { RoughCanvas } from '../rough/canvas.js';
/**
 * An overlay is a layer covered on top of elements,
 * can be used for rendering non-CRDT state indicators.
 */
export declare abstract class Overlay {
    protected _renderer: Renderer;
    constructor();
    abstract render(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
    setRenderer(renderer: Renderer | null): void;
}
type EnvProvider = {
    getVariableColor: (val: string) => string;
    selectedElements?: () => string[];
};
type RendererOptions = {
    layerManager: LayerManager;
    provider: EnvProvider;
    enableStackingCanvas?: boolean;
    onStackingCanvasCreated?: (canvas: HTMLCanvasElement) => void;
};
export declare class Renderer extends Viewport {
    get stackingCanvas(): HTMLCanvasElement[];
    private _stackingCanvas;
    private _overlays;
    private _shouldUpdate;
    private _disposables;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    layerManager: LayerManager;
    provider: Partial<EnvProvider>;
    stackingCanvasUpdated: Slot<HTMLCanvasElement[]>;
    constructor(options: RendererOptions);
    private _initViewport;
    private _initStackingCanvas;
    /**
     * Specifying the actual size gives better results and more consistent behavior across browsers.
     *
     * Make sure the main canvas and the offscreen canvas or layer canvas are the same size.
     *
     * It is not recommended to set width and height to 100%.
     */
    private _canvasSizeUpdater;
    private _resetSize;
    private _loop;
    private _render;
    private _renderByBound;
    getVariableColor(val: string): string;
    refresh(): void;
    /**
     * Used to attach main canvas, main canvas will always exist
     * @param container
     */
    attach(container: HTMLElement): void;
    getCanvasByBound(bound?: IBound, surfaceElements?: SurfaceElementModel[], canvas?: HTMLCanvasElement, clearBeforeDrawing?: boolean, withZoom?: boolean): HTMLCanvasElement;
    addOverlay(overlay: Overlay): void;
    removeOverlay(overlay: Overlay): void;
    dispose(): void;
}
export {};
//# sourceMappingURL=renderer.d.ts.map