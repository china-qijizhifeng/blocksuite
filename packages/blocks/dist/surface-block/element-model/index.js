import { DocCollection } from '@blocksuite/store';
import { SurfaceElementModel } from './base.js';
import { BrushElementModel } from './brush.js';
import { ConnectorElementModel } from './connector.js';
import { initializedObservers, initializeWatchers } from './decorators.js';
import { getDecoratorState } from './decorators/common.js';
import { GroupElementModel } from './group.js';
import { MindmapElementModel } from './mindmap.js';
import { ShapeElementModel } from './shape.js';
import { TextElementModel } from './text.js';
const elementsCtorMap = {
    group: GroupElementModel,
    connector: ConnectorElementModel,
    shape: ShapeElementModel,
    brush: BrushElementModel,
    text: TextElementModel,
    mindmap: MindmapElementModel,
};
export function createElementModel(type, id, yMap, model, options) {
    const stashed = new Map();
    const Ctor = elementsCtorMap[type];
    if (!Ctor) {
        throw new Error(`Invalid element type: ${yMap.get('type')}`);
    }
    const state = getDecoratorState();
    state.creating = true;
    state.skipYfield = options.skipFieldInit ?? false;
    let mounted = false;
    const elementModel = new Ctor({
        id,
        yMap,
        model,
        stashedStore: stashed,
        onChange: payload => mounted && options.onChange({ id, ...payload }),
    });
    state.creating = false;
    state.skipYfield = false;
    const unmount = () => {
        mounted = false;
        elementModel['_disposable'].dispose();
    };
    const mount = () => {
        initializedObservers(Ctor.prototype, elementModel);
        initializeWatchers(Ctor.prototype, elementModel);
        elementModel['_disposable'].add(onElementChange(yMap, payload => {
            mounted &&
                options.onChange({
                    id,
                    ...payload,
                });
        }));
        elementModel['_preserved'].clear();
        mounted = true;
        elementModel.onCreated();
    };
    return {
        model: elementModel,
        mount,
        unmount,
    };
}
function onElementChange(yMap, callback) {
    const observer = (event, transaction) => {
        const props = {};
        const oldValues = {};
        event.keysChanged.forEach(key => {
            const type = event.changes.keys.get(key);
            const oldValue = event.changes.keys.get(key)?.oldValue;
            if (!type) {
                return;
            }
            if (type.action === 'update' || type.action === 'add') {
                props[key] = yMap.get(key);
                oldValues[key] = oldValue;
            }
        });
        callback({
            props,
            oldValues,
            local: transaction.local,
        });
    };
    yMap.observe(observer);
    return () => {
        yMap.observe(observer);
    };
}
export function propsToY(type, props) {
    const ctor = elementsCtorMap[type];
    if (!ctor) {
        throw new Error(`Invalid element type: ${type}`);
    }
    // @ts-ignore
    return (ctor.propsToY ?? SurfaceElementModel.propsToY)(props);
}
export function createModelFromProps(props, model, options) {
    const { type, id, ...rest } = props;
    if (!id) {
        throw new Error('Cannot find id in props');
    }
    const yMap = new DocCollection.Y.Map();
    const elementModel = createElementModel(type, id, yMap, model, {
        ...options,
        newCreate: true,
    });
    props = propsToY(type, props);
    yMap.set('type', type);
    yMap.set('id', id);
    Object.keys(rest).forEach(key => {
        if (props[key] !== undefined) {
            // @ts-ignore
            elementModel.model[key] = props[key];
        }
    });
    return elementModel;
}
export { BrushElementModel, ConnectorElementModel, GroupElementModel, MindmapElementModel, ShapeElementModel, SurfaceElementModel, TextElementModel, };
export var CanvasElementType;
(function (CanvasElementType) {
    CanvasElementType["SHAPE"] = "shape";
    CanvasElementType["BRUSH"] = "brush";
    CanvasElementType["CONNECTOR"] = "connector";
    CanvasElementType["TEXT"] = "text";
    CanvasElementType["GROUP"] = "group";
    CanvasElementType["MINDMAP"] = "mindmap";
})(CanvasElementType || (CanvasElementType = {}));
export function isCanvasElementType(type) {
    return type.toLocaleUpperCase() in CanvasElementType;
}
//# sourceMappingURL=index.js.map