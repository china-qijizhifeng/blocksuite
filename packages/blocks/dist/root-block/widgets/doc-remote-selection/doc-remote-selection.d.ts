import { WidgetElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
export interface SelectionRect {
    width: number;
    height: number;
    top: number;
    left: number;
}
export declare const AFFINE_DOC_REMOTE_SELECTION_WIDGET = "affine-doc-remote-selection-widget";
export declare class AffineDocRemoteSelectionWidget extends WidgetElement {
    private get _selectionManager();
    private get _container();
    private get _containerRect();
    static styles: import("lit").CSSResult;
    private _remoteColorManager;
    private _remoteSelections;
    private _resizeObserver;
    private _abortController;
    private _getSelectionRect;
    private _getCursorRect;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_DOC_REMOTE_SELECTION_WIDGET]: AffineDocRemoteSelectionWidget;
    }
}
//# sourceMappingURL=doc-remote-selection.d.ts.map