import '../buttons/tool-icon-button.js';
import { Slot } from '@blocksuite/global/utils';
import { LitElement } from 'lit';
import { ShapeStyle } from '../../../../surface-block/index.js';
import type { ShapeTool } from '../../controllers/tools/shape-tool.js';
export declare class EdgelessShapePanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor selectedShape: ShapeTool['shapeType'] | null | undefined;
    accessor shapeStyle: ShapeStyle;
    slots: {
        select: Slot<import("../../../../surface-block/index.js").ShapeType | "roundedRect">;
    };
    private _onSelect;
    disconnectedCallback(): void;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-panel': EdgelessShapePanel;
    }
}
//# sourceMappingURL=shape-panel.d.ts.map