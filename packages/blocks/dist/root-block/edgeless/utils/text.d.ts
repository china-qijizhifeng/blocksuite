import type { PointerEventState } from '@blocksuite/block-std';
import type { FrameBlockModel } from '../../../frame-block/index.js';
import type { GroupElementModel } from '../../../surface-block/element-model/group.js';
import { ShapeElementModel } from '../../../surface-block/element-model/shape.js';
import { TextElementModel } from '../../../surface-block/element-model/text.js';
import { type ConnectorElementModel, type IModelCoord, type IVec2 } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export declare function mountTextElementEditor(textElement: TextElementModel, edgeless: EdgelessRootBlockComponent, focusCoord?: IModelCoord): void;
export declare function mountShapeTextEditor(shapeElement: ShapeElementModel, edgeless: EdgelessRootBlockComponent): void;
export declare function mountFrameTitleEditor(frame: FrameBlockModel, edgeless: EdgelessRootBlockComponent): void;
export declare function mountGroupTitleEditor(group: GroupElementModel, edgeless: EdgelessRootBlockComponent): void;
/**
 * @deprecated
 *
 * Canvas Text has been deprecated
 */
export declare function addText(edgeless: EdgelessRootBlockComponent, event: PointerEventState): void;
export declare function mountConnectorLabelEditor(connector: ConnectorElementModel, edgeless: EdgelessRootBlockComponent, point?: IVec2): void;
//# sourceMappingURL=text.d.ts.map