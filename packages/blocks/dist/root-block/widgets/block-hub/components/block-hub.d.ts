import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
declare const BlockHub_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BlockHub extends BlockHub_base {
    private get _rootElement();
    static styles: import("lit").CSSResult;
    /**
     * A function that returns all blocks that are allowed to be moved to
     */
    private accessor _expanded;
    private accessor _isGrabbing;
    private accessor _visibleCardType;
    private accessor _showTooltip;
    private accessor _maxHeight;
    private accessor _blockHubCards;
    private accessor _blockHubMenus;
    private accessor _blockHubButton;
    private accessor _blockHubIconsContainer;
    private accessor _blockHubMenuContainer;
    private accessor _blockHubMenuEntry;
    private _currentClientX;
    private _currentClientY;
    private _isCardListVisible;
    private _indicator;
    private _lastDroppingTarget;
    private _lastDroppingType;
    private _lastDraggingFlavour;
    private _timer;
    private _rafID;
    private _editorHost;
    constructor(host: EditorHost);
    private _getHoveringNoteState;
    /**
     * This is currently a workaround, as the height of the _blockHubIconsContainer is determined by the height of its
     * content, and if its child's opacity is set to 0 during a transition, its height won't change, causing the background
     * to exceeds its actual visual height. So currently we manually set the height of those whose opacity is 0 to 0px.
     */
    private _onTransitionStart;
    private _hideCardList;
    private _onBlockHubButtonClick;
    private _clearRaf;
    private _onMouseDown;
    private _onDragStart;
    private _onDrag;
    private _onDragOver;
    private _onDragOverDocument;
    private _onDragEnd;
    private _resetDropState;
    private _onDrop;
    private _onClickCard;
    private _onClickOutside;
    private _onCardMouseDown;
    private _onCardMouseUp;
    private _onBlankMenuMouseDown;
    private _onBlankMenuMouseUp;
    private _onBlockHubMenuMouseOver;
    private _onBlockHubEntryMouseOver;
    private _onResize;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    toggleMenu(): void;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=block-hub.d.ts.map