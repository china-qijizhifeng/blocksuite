import { LitElement, nothing } from 'lit';
declare const OutlineNotice_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlineNotice extends OutlineNotice_base {
    static styles: import("lit").CSSResult;
    accessor noticeVisible: boolean;
    accessor toggleNotesSorting: () => void;
    accessor setNoticeVisibility: (visibility: boolean) => void;
    private _handleNoticeButtonClick;
    render(): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'outline-notice': OutlineNotice;
    }
}
export {};
//# sourceMappingURL=outline-notice.d.ts.map