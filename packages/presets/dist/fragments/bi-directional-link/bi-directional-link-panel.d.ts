import type { PageRootBlockComponent } from '@blocksuite/blocks';
import type { Doc } from '@blocksuite/store';
import { LitElement, nothing, type TemplateResult } from 'lit';
declare const BiDirectionalLinkPanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BiDirectionalLinkPanel extends BiDirectionalLinkPanel_base {
    private get _host();
    private get _links();
    private get _rootService();
    private get _backLinks();
    static styles: import("lit").CSSResult;
    private accessor _show;
    private accessor _backLinkShow;
    private _inlineManager;
    accessor doc: Doc;
    accessor pageRoot: PageRootBlockComponent;
    private _toggleShow;
    private _renderLinks;
    private _renderBackLinks;
    private _handleLinkClick;
    private _backlink;
    private _divider;
    protected render(): typeof nothing | TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'bi-directional-link-panel': BiDirectionalLinkPanel;
    }
}
export {};
//# sourceMappingURL=bi-directional-link-panel.d.ts.map