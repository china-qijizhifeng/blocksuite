import { LitElement, nothing } from 'lit';
/**
 * Default size is 32px, you can override it by setting `size` property.
 * For example, `<icon-button size="32px"></icon-button>`.
 *
 * You can also set `width` or `height` property to override the size.
 *
 * Set `text` property to show a text label.
 *
 * @example
 * ```ts
 * html`<icon-button @click=${this.onUnlink}>
 *   ${UnlinkIcon}
 * </icon-button>`
 *
 * html`<icon-button size="32px" text="HTML" @click=${this._importHtml}>
 *   ${ExportToHTMLIcon}
 * </icon-button>`
 * ```
 */
export declare class IconButton extends LitElement {
    static styles: import("lit").CSSResult;
    accessor size: string | number | null;
    accessor width: string | number | null;
    accessor height: string | number | null;
    accessor text: string | null;
    accessor subText: string | null;
    accessor active: boolean;
    accessor hover: boolean | undefined;
    accessor disabled: boolean | undefined;
    constructor();
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'icon-button': IconButton;
    }
}
//# sourceMappingURL=button.d.ts.map