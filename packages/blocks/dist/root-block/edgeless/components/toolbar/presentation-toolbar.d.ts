import './present/navigator-setting-button.js';
import { LitElement, type PropertyValues } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessTool } from '../../types.js';
declare const PresentationToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("./mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class PresentationToolbar extends PresentationToolbar_base {
    private get _cachedPresentHideToolbar();
    private set _cachedPresentHideToolbar(value);
    private get _frames();
    get host(): import("@blocksuite/block-std").EditorHost;
    static styles: import("lit").CSSResult;
    private accessor _navigatorMode;
    private accessor _currentFrameIndex;
    private _timer?;
    private _cachedIndex;
    type: EdgelessTool['type'];
    accessor containerWidth: number;
    accessor visible: boolean;
    accessor settingMenuShow: boolean;
    accessor frameMenuShow: boolean;
    get dense(): boolean;
    constructor(edgeless: EdgelessRootBlockComponent);
    private _nextFrame;
    private _previousFrame;
    private _moveToCurrentFrame;
    private _toggleFullScreen;
    protected updated(changedProperties: PropertyValues): void;
    accessor setSettingMenuShow: (show: boolean) => void;
    accessor setFrameMenuShow: (show: boolean) => void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'presentation-toolbar': PresentationToolbar;
    }
}
export {};
//# sourceMappingURL=presentation-toolbar.d.ts.map