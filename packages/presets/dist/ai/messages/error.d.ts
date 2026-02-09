import { type EditorHost } from '@blocksuite/block-std';
import { LitElement, type TemplateResult } from 'lit';
declare const AIErrorWrapper_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
declare class AIErrorWrapper extends AIErrorWrapper_base {
    accessor text: TemplateResult<1>;
    protected render(): TemplateResult<1>;
}
export declare const PaymentRequiredErrorRenderer: (host: EditorHost) => TemplateResult<1>;
export declare const GeneralErrorRenderer: (text?: TemplateResult<1>, template?: TemplateResult<1>) => TemplateResult<1>;
declare global {
    interface HTMLElementTagNameMap {
        'ai-error-wrapper': AIErrorWrapper;
    }
}
export {};
//# sourceMappingURL=error.d.ts.map