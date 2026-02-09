import { type Y } from '@blocksuite/store';
import type { SurfaceBlockModel } from '../surface-model.js';
import { SurfaceElementModel } from './base.js';
import { BrushElementModel } from './brush.js';
import { ConnectorElementModel } from './connector.js';
import { GroupElementModel } from './group.js';
import { MindmapElementModel } from './mindmap.js';
import { ShapeElementModel } from './shape.js';
import { TextElementModel } from './text.js';
export declare function createElementModel(type: string, id: string, yMap: Y.Map<unknown>, model: SurfaceBlockModel, options: {
    onChange: (payload: {
        id: string;
        props: Record<string, unknown>;
        oldValues: Record<string, unknown>;
        local: boolean;
    }) => void;
    skipFieldInit?: boolean;
    newCreate?: boolean;
}): {
    model: SurfaceElementModel;
    unmount: () => void;
    mount: () => void;
};
export declare function propsToY(type: string, props: Record<string, unknown>): Record<string, unknown> | (import("./base.js").IBaseProps & {
    children: Y.Map<boolean>;
    title: Y.Text;
}) | import("./connector.js").ConnectorElementProps | import("./brush.js").BrushProps | import("./shape.js").ShapeProps | (import("./base.js").IBaseProps & {
    children: Y.Map<import("./utils/mindmap/layout.js").NodeDetail>;
});
export declare function createModelFromProps(props: Record<string, unknown>, model: SurfaceBlockModel, options: {
    onChange: (payload: {
        id: string;
        props: Record<string, unknown>;
        oldValues: Record<string, unknown>;
        local: boolean;
    }) => void;
}): {
    model: SurfaceElementModel<import("./base.js").IBaseProps>;
    unmount: () => void;
    mount: () => void;
};
export { BrushElementModel, ConnectorElementModel, GroupElementModel, MindmapElementModel, ShapeElementModel, SurfaceElementModel, TextElementModel, };
export declare enum CanvasElementType {
    SHAPE = "shape",
    BRUSH = "brush",
    CONNECTOR = "connector",
    TEXT = "text",
    GROUP = "group",
    MINDMAP = "mindmap"
}
export type ElementModelMap = {
    ['shape']: ShapeElementModel;
    ['brush']: BrushElementModel;
    ['connector']: ConnectorElementModel;
    ['text']: TextElementModel;
    ['group']: GroupElementModel;
    ['mindmap']: MindmapElementModel;
};
export declare function isCanvasElementType(type: string): type is CanvasElementType;
//# sourceMappingURL=index.d.ts.map