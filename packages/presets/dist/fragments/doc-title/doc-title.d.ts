import { ShadowlessElement } from '@blocksuite/block-std';
import type { Doc } from '@blocksuite/store';
declare const DocTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DocTitle extends DocTitle_base {
    private get _rootModel();
    private get _inlineEditor();
    private get _viewport();
    private get _pageRoot();
    static styles: import("lit").CSSResult;
    private accessor _isReadonly;
    private accessor _isComposing;
    private accessor _richTextElement;
    accessor doc: Doc;
    private _onTitleKeyDown;
    private _updateTitleInMeta;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'doc-title': DocTitle;
    }
}
export {};
//# sourceMappingURL=doc-title.d.ts.map