import './tool-icon-button.js';
import { LitElement, type TemplateResult } from 'lit';
declare const EdgelessMenuButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessMenuButton extends EdgelessMenuButton_base {
    static styles: import("lit").CSSResult;
    private accessor _trigger;
    private accessor _content;
    private _popper;
    accessor button: string | TemplateResult<1>;
    accessor contentPadding: string | undefined;
    close(): void;
    firstUpdated(): void;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
export declare class EdgelessMenuContent extends LitElement {
    static styles: import("lit").CSSResult;
    render(): TemplateResult<1>;
}
export declare class EdgelessMenuDivider extends LitElement {
    static styles: import("lit").CSSResult;
}
export declare function renderMenuDivider(): TemplateResult<1>;
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-menu-button': EdgelessMenuButton;
        'edgeless-menu-content': EdgelessMenuContent;
        'edgeless-menu-divider': EdgelessMenuDivider;
    }
}
export {};
//# sourceMappingURL=menu-button.d.ts.map