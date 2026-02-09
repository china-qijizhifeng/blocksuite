import { ShapeType } from '../../../surface-block/index.js';
import type { ShapeTool } from '../controllers/tools/shape-tool.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export declare function getNextShapeType(cur: ShapeTool['shapeType']): ShapeType | "roundedRect";
export declare function updateShapeProps(shapeType: ShapeTool['shapeType'], edgeless: EdgelessRootBlockComponent): void;
//# sourceMappingURL=hotkey-utils.d.ts.map