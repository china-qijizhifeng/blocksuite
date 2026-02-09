import './outline-notice.js';
import type { EditorHost } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '@blocksuite/blocks';
import type { Doc } from '@blocksuite/store';
import { LitElement, type PropertyValues } from 'lit';
declare const OutlinePanelBody_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlinePanelBody extends OutlinePanelBody_base {
    get viewportPadding(): [number, number, number, number];
    static styles: import("lit").CSSResult;
    private accessor _dragging;
    private accessor _pageVisibleNotes;
    private accessor _edgelessOnlyNotes;
    /**
     * store the id of selected notes
     */
    private accessor _selected;
    private _docDisposables;
    private _indicatorTranslateY;
    private _changedFlag;
    private _oldViewport?;
    private _highlightMask;
    private _highlightTimeoutId;
    accessor doc: Doc;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor editorHost: EditorHost;
    accessor mode: 'page' | 'edgeless';
    accessor insertIndex: number | undefined;
    accessor showPreviewIcon: boolean;
    accessor enableNotesSorting: boolean;
    accessor noticeVisible: boolean;
    accessor toggleNotesSorting: () => void;
    accessor setNoticeVisibility: (visibility: boolean) => void;
    accessor panelListElement: HTMLElement;
    accessor OutlinePanelContainer: HTMLElement;
    accessor fitPadding: number[];
    accessor domHost: Document | HTMLElement;
    private _isEdgelessMode;
    private _clearHighlightMask;
    private _clearDocDisposables;
    private _updateNoticeVisibility;
    private _setDocDisposables;
    private _updateNotes;
    private _moveNotes;
    private _selectNote;
    private _drag;
    private _clickHandler;
    private _doubleClickHandler;
    private _zoomToFit;
    private _fitToElement;
    private _deSelectNoteInEdgelessMode;
    private _handleDisplayModeChange;
    private _scrollToBlock;
    private _isHeadingBlock;
    /**
     * There are two cases that we should render note list:
     * 1. There are headings in the notes
     * 2. No headings, but there are blocks in the notes and note sorting option is enabled
     */
    private _shouldRenderNoteList;
    private _PanelList;
    private _EmptyPanel;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(_changedProperties: PropertyValues): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'outline-panel-body': OutlinePanelBody;
    }
}
export {};
//# sourceMappingURL=outline-panel-body.d.ts.map