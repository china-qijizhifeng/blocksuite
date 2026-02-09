import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/stroke-style-panel.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/shape-style-panel.js';
import '../../edgeless/components/panel/shape-panel.js';
import './change-text-menu.js';
import { LitElement, nothing, type TemplateResult } from 'lit';
import { type ShapeElementModel } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeShapeButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeShapeButton extends EdgelessChangeShapeButton_base {
    get service(): import("@blocksuite/blocks").EdgelessRootService;
    static styles: import("lit").CSSResult[][];
    private accessor _shapePanel;
    accessor elements: ShapeElementModel[];
    accessor edgeless: EdgelessRootBlockComponent;
    private _getTextColor;
    private _setShapeFillColor;
    private _setShapeStrokeColor;
    private _setShapeStrokeWidth;
    private _setShapeStrokeStyle;
    private _setShapeStyles;
    private _setShapeStyle;
    private _addText;
    private _showAddButtonOrTextMenu;
    firstUpdated(changedProperties: Map<string, unknown>): void;
    render(): Iterable<symbol | TemplateResult<1> | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-shape-button': EdgelessChangeShapeButton;
    }
}
export declare function renderChangeShapeButton(edgeless: EdgelessRootBlockComponent, elements?: ShapeElementModel[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-shape-button.d.ts.map