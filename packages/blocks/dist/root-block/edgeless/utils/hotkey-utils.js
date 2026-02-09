import { ShapeType } from '../../../surface-block/index.js';
const shapeMap = {
    [ShapeType.Rect]: 0,
    [ShapeType.Ellipse]: 1,
    [ShapeType.Diamond]: 2,
    [ShapeType.Triangle]: 3,
    roundedRect: 4,
};
const shapes = Object.keys(shapeMap);
export function getNextShapeType(cur) {
    return shapes[(shapeMap[cur] + 1) % shapes.length];
}
export function updateShapeProps(shapeType, edgeless) {
    const props = shapeType === 'roundedRect'
        ? {
            shapeType: ShapeType.Rect,
            radius: 0.1,
        }
        : {
            shapeType,
            radius: 0,
        };
    edgeless.service.editPropsStore.record('shape', props);
}
//# sourceMappingURL=hotkey-utils.js.map