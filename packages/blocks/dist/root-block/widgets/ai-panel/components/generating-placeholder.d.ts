import { LitElement, type PropertyValues } from 'lit';
declare const GeneratingPlaceholder_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
declare class GeneratingPlaceholder extends GeneratingPlaceholder_base {
    static styles: import("lit").CSSResult;
    accessor height: number;
    accessor loadingProgress: number;
    accessor stages: string[];
    accessor showHeader: boolean;
    protected render(): import("lit").TemplateResult<1>;
    willUpdate(changed: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'generating-placeholder': GeneratingPlaceholder;
    }
}
export {};
//# sourceMappingURL=generating-placeholder.d.ts.map