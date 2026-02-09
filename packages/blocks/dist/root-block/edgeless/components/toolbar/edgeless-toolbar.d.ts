import '../buttons/tool-icon-button.js';
import '../buttons/toolbar-button.js';
import './present/frame-order-button.js';
import './presentation-toolbar.js';
import '../../../../_common/components/smooth-corner.js';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessTool } from '../../types.js';
import type { MenuPopper } from './common/create-popper.js';
import { type EdgelessToolbarSlots } from './context.js';
declare const EdgelessToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessToolbar extends EdgelessToolbar_base {
    get slots(): EdgelessToolbarSlots;
    private get _cachedPresentHideToolbar();
    /**
     * When enabled, the toolbar will auto-hide when the mouse is not over it.
     */
    private get _enableAutoHide();
    get host(): import("@blocksuite/block-std").EditorHost;
    get isPresentMode(): boolean;
    private get _seniorTools();
    private get _quickTools();
    private get _availableWidth();
    private get _quickToolsWidthTotal();
    private get _seniorToolsWidthTotal();
    private get _spaceWidthTotal();
    private get _denseSeniorTools();
    private get _seniorToolNavWidth();
    private get _denseQuickTools();
    private get _visibleQuickToolSize();
    private get _hiddenQuickTools();
    get scrollSeniorToolSize(): number;
    private get _seniorScrollPrevDisabled();
    private get _seniorPrevTooltip();
    private get _seniorScrollNextDisabled();
    private get _seniorNextTooltip();
    static styles: import("lit").CSSResult;
    private _slotsProvider;
    private _themeProvider;
    private _toolbarProvider;
    private _themeObserver;
    private _resizeObserver;
    private _moreQuickToolsMenu;
    private _moreQuickToolsMenuRef;
    private _onContainerResize;
    edgeless: EdgelessRootBlockComponent;
    activePopper: MenuPopper<HTMLElement> | null;
    accessor toolbarContainer: HTMLElement;
    accessor containerWidth: number;
    accessor presentSettingMenuShow: boolean;
    accessor presentFrameMenuShow: boolean;
    accessor scrollSeniorToolIndex: number;
    accessor edgelessTool: EdgelessTool;
    constructor(edgeless: EdgelessRootBlockComponent);
    private _onSeniorNavPrev;
    private _onSeniorNavNext;
    private _openMoreQuickToolsMenu;
    private _renderContent;
    setEdgelessTool: (edgelessTool: EdgelessTool) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-toolbar': EdgelessToolbar;
    }
}
export {};
//# sourceMappingURL=edgeless-toolbar.d.ts.map