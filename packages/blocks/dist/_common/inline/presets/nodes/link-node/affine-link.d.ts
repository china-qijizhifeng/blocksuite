import type { BlockElement } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import type { AffineTextAttributes } from '../../affine-inline-specs.js';
export declare class AffineLink extends ShadowlessElement {
    get link(): string;
    get inlineEditor(): import("@blocksuite/inline").InlineEditor<AffineTextAttributes>;
    get selfInlineRange(): import("@blocksuite/inline").InlineRange;
    get blockElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    static styles: import("lit").CSSResult;
    private _whenHover;
    accessor delta: DeltaInsert<AffineTextAttributes>;
    private _onMouseUp;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-link': AffineLink;
    }
}
//# sourceMappingURL=affine-link.d.ts.map