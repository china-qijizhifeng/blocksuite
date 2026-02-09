import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import { type StyleInfo, styleMap } from 'lit/directives/style-map.js';
import type { AffineTextAttributes } from '../affine-inline-specs.js';
export declare function affineTextStyles(props: AffineTextAttributes, override?: Readonly<StyleInfo>): ReturnType<typeof styleMap>;
export declare class AffineText extends ShadowlessElement {
    accessor delta: DeltaInsert<AffineTextAttributes>;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-text': AffineText;
    }
}
//# sourceMappingURL=affine-text.d.ts.map