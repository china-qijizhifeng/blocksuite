import { ShadowlessElement } from '@blocksuite/block-std';
import type { TemplateResult } from 'lit';
import { Point } from '../../../../_common/utils/index.js';
export declare class DragPreview extends ShadowlessElement {
    offset: Point;
    accessor template: TemplateResult | null;
    accessor onRemove: (() => void) | null;
    constructor(offset?: Point);
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-drag-preview': DragPreview;
    }
}
//# sourceMappingURL=drag-preview.d.ts.map