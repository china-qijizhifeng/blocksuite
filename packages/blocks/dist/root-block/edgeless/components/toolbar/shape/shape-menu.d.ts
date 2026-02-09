import '../../buttons/tool-icon-button.js';
import '../../panel/one-row-color-panel.js';
import { LitElement } from 'lit';
import type { CssVariableName } from '../../../../../_common/theme/css-variables.js';
import { ShapeStyle } from '../../../../../surface-block/index.js';
import type { ShapeName } from './shape-tool-element.js';
export declare class EdgelessShapeMenu extends LitElement {
    static styles: import("lit").CSSResult;
    accessor shapeType: ShapeName;
    accessor fillColor: CssVariableName;
    accessor shapeStyle: ShapeStyle;
    accessor strokeColor: CssVariableName;
    accessor radius: number;
    accessor onChange: (props: Record<string, unknown>) => void;
    private _setStrokeColor;
    private _setShapeStyle;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-menu': EdgelessShapeMenu;
    }
}
//# sourceMappingURL=shape-menu.d.ts.map