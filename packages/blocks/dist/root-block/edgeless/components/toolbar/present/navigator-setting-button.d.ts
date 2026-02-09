import './frame-order-menu.js';
import '../../buttons/tool-icon-button.js';
import '../../../../../_common/components/toggle-switch.js';
import { LitElement } from 'lit';
import type { FrameBlockModel } from '../../../../../frame-block/frame-model.js';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
declare const EdgelessNavigatorSettingButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessNavigatorSettingButton extends EdgelessNavigatorSettingButton_base {
    static styles: import("lit").CSSResult;
    private accessor _navigatorSettingButton;
    private accessor _navigatorSettingMenu;
    private _navigatorSettingPopper?;
    accessor blackBackground: boolean;
    accessor includeFrameOrder: boolean;
    accessor frames: FrameBlockModel[];
    accessor popperShow: boolean;
    accessor hideToolbar: boolean;
    accessor onHideToolbarChange: undefined | ((hideToolbar: boolean) => void);
    accessor edgeless: EdgelessRootBlockComponent;
    private _tryRestoreSettings;
    private _onBlackBackgroundChange;
    accessor setPopperShow: (show: boolean) => void;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-navigator-setting-button': EdgelessNavigatorSettingButton;
    }
}
export {};
//# sourceMappingURL=navigator-setting-button.d.ts.map