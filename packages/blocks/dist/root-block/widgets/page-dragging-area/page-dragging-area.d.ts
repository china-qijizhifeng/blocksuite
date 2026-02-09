import { WidgetElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { PageRootBlockComponent, RootBlockModel } from '../../index.js';
type Rect = {
    left: number;
    top: number;
    width: number;
    height: number;
};
export declare const AFFINE_PAGE_DRAGGING_AREA_WIDGET = "affine-page-dragging-area-widget";
export declare class AffinePageDraggingAreaWidget extends WidgetElement<RootBlockModel, PageRootBlockComponent> {
    private get _viewport();
    private get _allBlocksWithRect();
    static excludeFlavours: string[];
    private _rafID;
    private _lastPointerState;
    private _dragging;
    private _initialScrollOffset;
    private _initialContainerOffset;
    accessor rect: Rect | null;
    private _selectBlocksByRect;
    private _clearRaf;
    private _updateDraggingArea;
    connectedCallback(): void;
    private get scrollContainer();
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_PAGE_DRAGGING_AREA_WIDGET]: AffinePageDraggingAreaWidget;
    }
}
export {};
//# sourceMappingURL=page-dragging-area.d.ts.map