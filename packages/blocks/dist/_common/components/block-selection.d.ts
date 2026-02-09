import type { BlockElement } from '@blocksuite/block-std';
import { LitElement, type PropertyValues } from 'lit';
/**
 * Renders a the block selection.
 *
 * @example
 * ```ts
 * class Block extends LitElement {
 *   state override styles = css`
 *     :host {
 *       position: relative;
 *     }
 *
 *   render() {
 *      return html`<affine-block-selection></affine-block-selection>
 *   };
 * }
 * ```
 */
export declare class BlockSelection extends LitElement {
    static styles: import("lit").CSSResult;
    accessor block: BlockElement;
    accessor borderRadius: number;
    accessor borderWidth: number;
    protected updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-block-selection': BlockSelection;
    }
}
//# sourceMappingURL=block-selection.d.ts.map