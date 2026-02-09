import '../card/frame-card.js';
import { type EditorHost, ShadowlessElement } from '@blocksuite/block-std';
import { type EdgelessRootBlockComponent, type FrameBlockModel } from '@blocksuite/blocks';
import type { Doc } from '@blocksuite/store';
import { type PropertyValues } from 'lit';
declare const FramePanelBody_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FramePanelBody extends FramePanelBody_base {
    get frames(): FrameBlockModel[];
    get viewportPadding(): [number, number, number, number];
    static styles: import("lit").CSSResult;
    private accessor _selected;
    private accessor _dragging;
    private _frameItems;
    private _frameElementHeight;
    private _indicatorTranslateY;
    private _docDisposables;
    private _lastEdgelessRootId;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor doc: Doc;
    accessor editorHost: EditorHost;
    accessor insertIndex: number | undefined;
    accessor fitPadding: number[];
    accessor domHost: Document | HTMLElement;
    accessor frameListContainer: HTMLElement;
    private _clearDocDisposables;
    private _setDocDisposables;
    private _updateFrames;
    private _reorderFrames;
    private _selectFrame;
    private _fitToElement;
    private _drag;
    /**
     * click at blank area to clear selection
     */
    private _clickBlank;
    private _updateFrameItems;
    private _renderEmptyContent;
    private _renderFrameList;
    compare(a: FrameBlockModel, b: FrameBlockModel): 1 | 0 | -1;
    firstUpdated(): void;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-panel-body': FramePanelBody;
    }
}
export {};
//# sourceMappingURL=frame-panel-body.d.ts.map