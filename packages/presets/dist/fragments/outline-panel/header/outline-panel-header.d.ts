import './outline-setting-menu.js';
import { LitElement } from 'lit';
declare const OutlinePanelHeader_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlinePanelHeader extends OutlinePanelHeader_base {
    static styles: import("lit").CSSResult;
    private accessor _settingPopperShow;
    private accessor _noteSettingButton;
    private accessor _notePreviewSettingMenu;
    private _notePreviewSettingMenuPopper;
    accessor showPreviewIcon: boolean;
    accessor enableNotesSorting: boolean;
    accessor toggleShowPreviewIcon: (on: boolean) => void;
    accessor toggleNotesSorting: () => void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'outline-panel-header': OutlinePanelHeader;
    }
}
export {};
//# sourceMappingURL=outline-panel-header.d.ts.map