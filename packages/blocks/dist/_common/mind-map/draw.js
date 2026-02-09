import { DocCollection } from '@blocksuite/store';
import { getFontString } from '../../surface-block/canvas-renderer/element-renderer/text/utils.js';
import { SHAPE_TEXT_PADDING } from '../../surface-block/element-model/shape.js';
import { Bound, CanvasElementType, ConnectorMode, getLineWidth, normalizeShapeBound, ShapeStyle, StrokeStyle, } from '../../surface-block/index.js';
import { layout, } from './layout.js';
export const DEFAULT_SHAPE_PROPS = {
    shapeType: 'rect',
    strokeColor: '--affine-palette-line-blue',
    fillColor: '--affine-palette-shape-blue',
    radius: 0.1,
    strokeWidth: 2,
    strokeStyle: StrokeStyle.Solid,
    shapeStyle: ShapeStyle.General,
};
export const DEFAULT_CONNECTOR_PROPS = {
    stroke: '--affine-palette-line-black',
    mode: ConnectorMode.Orthogonal,
    strokeWidth: 2,
    strokeStyle: StrokeStyle.Solid,
    frontEndpointStyle: 'None',
    rearEndpointStyle: 'None',
};
const directionMap = {
    left: {
        from: [0, 0.5],
        to: [1, 0.5],
    },
    right: {
        from: [1, 0.5],
        to: [0, 0.5],
    },
    top: {
        from: [0.5, 0],
        to: [0.5, 1],
    },
    bottom: {
        from: [0.5, 1],
        to: [0.5, 0],
    },
};
const drawAllNode = (node, service, options) => {
    const shapeIds = [];
    const connectorIds = [];
    const connectors = [];
    const drawNode = (node, isRoot = false) => {
        const { text, children } = node;
        const id = node.id
            ? node.id
            : isRoot && options?.rootId
                ? options.rootId
                : service.addElement(CanvasElementType.SHAPE, {
                    ...DEFAULT_SHAPE_PROPS,
                    xywh: `[${0},${0},${0},${0}]`,
                    text: new DocCollection.Y.Text(text),
                });
        shapeIds.push(id);
        const ele = service.getElementById(id);
        const maxWidth = Math.max(...text.split('\n').map(line => getLineWidth(line, getFontString(ele)))) +
            SHAPE_TEXT_PADDING * 2;
        const bound = normalizeShapeBound(ele, new Bound(0, 0, Math.max(148, Math.min(600, maxWidth)), 78));
        return {
            id,
            width: bound.w,
            height: bound.h,
            children: children.map(child => {
                const layoutNode = drawNode(child);
                connectors.push({ from: id, to: layoutNode.id });
                return layoutNode;
            }),
        };
    };
    const layoutNode = drawNode(node, true);
    const root = options?.rootId
        ? service.getElementById(options.rootId)
        : undefined;
    const result = layout.right(layoutNode, {
        gapHorizontal: 130,
        gapVertical: 10,
        x: root ? root.x : options?.x ?? 0,
        y: root ? root.y : options?.y ?? 0,
    });
    const updatePosition = (node, result) => {
        const { id, width, height } = node;
        const { x, y } = result.self;
        service.updateElement(id, {
            xywh: `[${x},${y},${width},${height}]`,
        });
        node.children.forEach((child, index) => {
            const layoutNodeResult = result.children[index];
            updatePosition(child, layoutNodeResult);
        });
    };
    updatePosition(layoutNode, result);
    return { shapeIds, connectorIds };
};
const layoutAllNode = (node, service, options) => {
    const getLayoutNode = (node) => {
        const { children, id } = node;
        const ele = service.getElementById(id);
        return {
            id,
            width: ele.w,
            height: ele.h,
            children: children.map(child => getLayoutNode(child)),
        };
    };
    const layoutNode = getLayoutNode(node);
    const root = options?.rootId
        ? service.getElementById(options.rootId)
        : undefined;
    const result = layout.right(layoutNode, {
        gapHorizontal: 130,
        gapVertical: 10,
        x: root ? root.x : options?.x ?? 0,
        y: root ? root.y : options?.y ?? 0,
    });
    const updatePosition = (node, result) => {
        const { id, width, height } = node;
        const { x, y } = result.self;
        service.updateElement(id, {
            xywh: `[${x},${y},${width},${height}]`,
        });
        node.children.forEach((child, index) => {
            const layoutNodeResult = result.children[index];
            updatePosition(child, layoutNodeResult);
        });
    };
    updatePosition(layoutNode, result);
};
export function drawMindMap(service, mindMap, ops) {
    const { shapeIds, connectorIds } = drawAllNode(mindMap, service, ops);
    service.selection.set({
        elements: [...shapeIds, ...connectorIds],
        editing: false,
    });
    service.createGroupFromSelected();
}
export function layoutMindMap(service, mindMap, ops) {
    layoutAllNode(mindMap, service, ops);
}
export const createNode = (text, service, connector) => {
    const id = service.addElement(CanvasElementType.SHAPE, {
        ...DEFAULT_SHAPE_PROPS,
        xywh: `[${0},${0},${0},${0}]`,
        text: new DocCollection.Y.Text(text),
    });
    const ele = service.getElementById(id);
    const maxWidth = Math.max(...text.split('\n').map(line => getLineWidth(line, getFontString(ele)))) +
        SHAPE_TEXT_PADDING * 2;
    const bound = normalizeShapeBound(ele, new Bound(0, 0, Math.max(148, Math.min(600, maxWidth)), 78));
    service.updateElement(id, {
        xywh: bound.serialize(),
    });
    if (connector) {
        const direction = directionMap[connector.direction];
        service.addElement(CanvasElementType.CONNECTOR, {
            ...DEFAULT_CONNECTOR_PROPS,
            source: {
                id: connector.parentId,
                position: direction.from,
            },
            target: {
                id: id,
                position: direction.to,
            },
        });
    }
    return id;
};
export const changeText = (id, text, service) => {
    service.updateElement(id, {
        text: new DocCollection.Y.Text(text),
    });
    const ele = service.getElementById(id);
    const maxWidth = Math.max(...text.split('\n').map(line => getLineWidth(line, getFontString(ele)))) +
        SHAPE_TEXT_PADDING * 2;
    const bound = normalizeShapeBound(ele, new Bound(0, 0, Math.max(148, Math.min(600, maxWidth)), 78));
    service.updateElement(id, {
        xywh: bound.serialize(),
    });
};
//# sourceMappingURL=draw.js.map