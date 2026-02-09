import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import type { AffineTextAttributes } from '../_common/inline/presets/affine-inline-specs.js';
import type { HighlightOptionsGetter } from './code-model.js';
export declare class AffineCodeLine extends ShadowlessElement {
    accessor delta: DeltaInsert<AffineTextAttributes>;
    accessor highlightOptionsGetter: HighlightOptionsGetter | null;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-code-line': AffineCodeLine;
    }
}
//# sourceMappingURL=affine-code-line.d.ts.map