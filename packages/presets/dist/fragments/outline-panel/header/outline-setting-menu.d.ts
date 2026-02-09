import { LitElement } from 'lit';
declare const OutlineNotePreviewSettingMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlineNotePreviewSettingMenu extends OutlineNotePreviewSettingMenu_base {
    static styles: import("lit").CSSResult;
    accessor showPreviewIcon: boolean;
    accessor toggleShowPreviewIcon: (on: boolean) => void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'outline-note-preview-setting-menu': OutlineNotePreviewSettingMenu;
    }
}
export {};
//# sourceMappingURL=outline-setting-menu.d.ts.map