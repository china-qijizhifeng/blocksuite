import './frames-setting-menu.js';
import type { EditorHost } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '@blocksuite/blocks';
import { LitElement, type PropertyValues } from 'lit';
declare const FramePanelHeader_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FramePanelHeader extends FramePanelHeader_base {
    get rootService(): import("@blocksuite/blocks").PageRootService | import("@blocksuite/blocks").EdgelessRootService;
    static styles: import("lit").CSSResult;
    private accessor _settingPopperShow;
    private accessor _frameSettingButton;
    private accessor _frameSettingMenu;
    private _framesSettingMenuPopper;
    private _navigatorMode;
    private _edgelessDisposables;
    accessor editorHost: EditorHost;
    accessor edgeless: EdgelessRootBlockComponent | null;
    private _enterPresentationMode;
    private _tryLoadNavigatorStateLocalRecord;
    private _clearEdgelessDisposables;
    private _setEdgelessDisposables;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(_changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-panel-header': FramePanelHeader;
    }
}
export {};
//# sourceMappingURL=frame-panel-header.d.ts.map