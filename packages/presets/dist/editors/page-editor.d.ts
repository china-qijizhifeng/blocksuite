import { EditorHost, ShadowlessElement } from '@blocksuite/block-std';
import type { Doc } from '@blocksuite/store';
import { nothing } from 'lit';
declare const PageEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class PageEditor extends PageEditor_base {
    get host(): EditorHost;
    static styles: import("lit").CSSResult;
    private _host;
    accessor doc: Doc;
    accessor specs: import("@blocksuite/block-std").BlockSpec<string, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>>[];
    accessor hasViewport: boolean;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'page-editor': PageEditor;
    }
}
export {};
//# sourceMappingURL=page-editor.d.ts.map