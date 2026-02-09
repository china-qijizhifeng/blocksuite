import type { EditorHost } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '@blocksuite/blocks';
import { LitElement, type PropertyValues } from 'lit';
declare const FramesSettingMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FramesSettingMenu extends FramesSettingMenu_base {
    static styles: import("lit").CSSResult;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor editorHost: EditorHost;
    accessor blackBackground: boolean;
    accessor fillScreen: boolean;
    accessor hideToolbar: boolean;
    private get _rootService();
    private _tryRestoreSettings;
    private _onBlackBackgroundChange;
    private _onFillScreenChange;
    private _onHideToolBarChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(_changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frames-setting-menu': FramesSettingMenu;
    }
}
export {};
//# sourceMappingURL=frames-setting-menu.d.ts.map