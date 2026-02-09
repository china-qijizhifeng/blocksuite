import type { TemplateResult } from 'lit';
import { ShapeType } from '../../../../../surface-block/index.js';
import type { ShapeTool } from '../../../controllers/tools/shape-tool.js';
type Config = {
    name: ShapeTool['shapeType'];
    generalIcon: TemplateResult<1>;
    scribbledIcon: TemplateResult<1>;
    tooltip: string;
    disabled: boolean;
    value: Record<string, unknown>;
};
export declare const ShapeComponentConfig: Config[];
export declare const ShapeComponentConfigMap: Record<ShapeType | "roundedRect", Config>;
export declare const SHAPE_COLOR_PREFIX = "--affine-palette-shape-";
export declare const LINE_COLOR_PREFIX = "--affine-palette-line-";
export {};
//# sourceMappingURL=shape-menu-config.d.ts.map