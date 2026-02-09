import { LitElement, nothing } from 'lit';
type ValuesOf<T, K extends keyof T = keyof T> = T[K];
declare const OutlineBlockPreview_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlineBlockPreview extends OutlineBlockPreview_base {
    static styles: import("lit").CSSResult;
    private _textDisposables;
    accessor block: ValuesOf<BlockSuite.BlockModels>;
    accessor showPreviewIcon: boolean;
    accessor enableNotesSorting: boolean;
    accessor disabledIcon: boolean;
    accessor cardNumber: number;
    private _clearTextDisposables;
    private _setTextDisposables;
    private _updateElement;
    private _TextBlockPreview;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(): void;
    renderBlockByFlavour(): typeof nothing | import("lit").TemplateResult<1>;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'outline-block-preview': OutlineBlockPreview;
    }
}
export {};
//# sourceMappingURL=outline-preview.d.ts.map