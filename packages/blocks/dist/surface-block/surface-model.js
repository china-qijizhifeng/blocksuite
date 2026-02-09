import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { BlockModel, Boxed, defineBlockSchema, DocCollection, Text, } from '@blocksuite/store';
import { SurfaceGroupLikeModel, } from './element-model/base.js';
import { createElementModel, createModelFromProps, propsToY, } from './element-model/index.js';
import { connectorMiddleware } from './middlewares/connector.js';
import { groupRelationMiddleware, groupSizeMiddleware, } from './middlewares/group.js';
import { SurfaceBlockTransformer } from './surface-transformer.js';
import { generateElementId } from './utils/index.js';
const migration = {
    toV4: data => {
        const { elements } = data;
        if (elements instanceof Boxed) {
            const value = elements.getValue();
            if (!value) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            for (const [key, element] of value.entries()) {
                const type = element.get('type');
                if (type === 'shape' || type === 'text') {
                    const isBold = element.get('isBold');
                    const isItalic = element.get('isItalic');
                    element.delete('isBold');
                    element.delete('isItalic');
                    if (isBold) {
                        element.set('bold', true);
                    }
                    if (isItalic) {
                        element.set('italic', true);
                    }
                }
                if (type === 'connector') {
                    const source = element.get('source');
                    const target = element.get('target');
                    const sourceId = source['id'];
                    const targetId = target['id'];
                    if (!source['position'] && !sourceId) {
                        value.delete(key);
                        return;
                    }
                    if (!target['position'] && !targetId) {
                        value.delete(key);
                        return;
                    }
                }
            }
        }
        else {
            for (const key of Object.keys(elements)) {
                const element = elements[key];
                const type = element['type'];
                if (type === 'shape' || type === 'text') {
                    const isBold = element['isBold'];
                    const isItalic = element['isItalic'];
                    delete element['isBold'];
                    delete element['isItalic'];
                    if (isBold) {
                        element['bold'] = true;
                    }
                    if (isItalic) {
                        element['italic'] = true;
                    }
                }
                if (type === 'connector') {
                    const source = element['source'];
                    const target = element['target'];
                    const sourceId = source['id'];
                    const targetId = target['id'];
                    // @ts-expect-error
                    if (!source['position'] && (!sourceId || !elements[sourceId])) {
                        delete elements[key];
                        return;
                    }
                    // @ts-expect-error
                    if (!target['position'] && (!targetId || !elements[targetId])) {
                        delete elements[key];
                        return;
                    }
                }
            }
        }
    },
    toV5: data => {
        const { elements } = data;
        if (!(elements instanceof Boxed)) {
            const yMap = new DocCollection.Y.Map();
            Object.entries(elements).forEach(([key, value]) => {
                const map = new DocCollection.Y.Map();
                Object.entries(value).forEach(([_key, _value]) => {
                    map.set(_key, _value instanceof DocCollection.Y.Text
                        ? _value.clone()
                        : _value instanceof Text
                            ? _value.yText.clone()
                            : _value);
                });
                yMap.set(key, map);
            });
            const wrapper = new Boxed(yMap);
            data.elements = wrapper;
        }
        const childrenMap = data.elements.getValue();
        for (const [id, element] of childrenMap) {
            if (element.get('type') === 'mindmap' ||
                element.get('type') === 'group') {
                const children = element.get('children');
                if (children?.size === 0) {
                    childrenMap.delete(id);
                }
            }
        }
    },
};
export const SurfaceBlockSchema = defineBlockSchema({
    flavour: 'affine:surface',
    props: (internalPrimitives) => ({
        elements: internalPrimitives.Boxed(new DocCollection.Y.Map()),
    }),
    metadata: {
        version: 5,
        role: 'hub',
        parent: ['affine:page'],
        children: [
            'affine:frame',
            'affine:image',
            'affine:bookmark',
            'affine:attachment',
            'affine:embed-*',
            'affine:edgeless-text',
        ],
    },
    onUpgrade: (data, previousVersion, version) => {
        if (previousVersion < 4 && version >= 4) {
            migration.toV4(data);
        }
        if (previousVersion < 5 && version >= 5) {
            migration.toV5(data);
        }
    },
    transformer: () => new SurfaceBlockTransformer(),
    toModel: () => new SurfaceBlockModel(),
});
export class SurfaceBlockModel extends BlockModel {
    get elementModels() {
        const models = [];
        this._elementModels.forEach(model => models.push(model.model));
        return models;
    }
    constructor() {
        super();
        this._elementModels = new Map();
        this._disposables = new DisposableGroup();
        this._groupToElements = new Map();
        this._elementToGroup = new Map();
        this._connectorToElements = new Map();
        this._elementToConnector = new Map();
        /**
         * Hooks is used to attach extra logic when calling `addElement`、`updateElement`(or assign property directly) and `removeElement`.
         * It's useful when dealing with relation between different model.
         */
        this.hooks = {
            update: new Slot(),
            remove: new Slot(),
        };
        this.elementUpdated = new Slot();
        this.elementAdded = new Slot();
        this.elementRemoved = new Slot();
        this.created.once(() => this._init());
    }
    _init() {
        this._initElementModels();
        this._watchGroupRelationChange();
        this._watchConnectorRelationChange();
        this._applyMiddlewares();
    }
    _applyMiddlewares() {
        [
            connectorMiddleware(this, this.hooks),
            groupRelationMiddleware(this, this.hooks),
            groupSizeMiddleware(this, this.hooks),
        ].forEach(disposable => this._disposables.add(disposable));
    }
    _initElementModels() {
        const elementsYMap = this.elements.getValue();
        const onElementsMapChange = (event, transaction) => {
            const { changes, keysChanged } = event;
            keysChanged.forEach(id => {
                const change = changes.keys.get(id);
                const element = this.elements.getValue().get(id);
                switch (change?.action) {
                    case 'add':
                        if (element) {
                            if (!this._elementModels.has(id)) {
                                const model = createElementModel(element.get('type'), element.get('id'), element, this, {
                                    onChange: payload => this.elementUpdated.emit(payload),
                                    skipFieldInit: true,
                                });
                                this._elementModels.set(id, model);
                            }
                            const { mount } = this._elementModels.get(id);
                            mount();
                            this.elementAdded.emit({ id, local: transaction.local });
                        }
                        break;
                    case 'delete':
                        if (this._elementModels.has(id)) {
                            const { model, unmount } = this._elementModels.get(id);
                            unmount();
                            this.elementRemoved.emit({
                                id,
                                type: model.type,
                                model,
                                local: transaction.local,
                            });
                            this._elementToGroup.delete(id);
                            this._elementToConnector.delete(id);
                            this._elementModels.delete(id);
                        }
                        break;
                }
            });
        };
        elementsYMap.forEach((val, key) => {
            const model = createElementModel(val.get('type'), val.get('id'), val, this, {
                onChange: payload => this.elementUpdated.emit(payload),
                skipFieldInit: true,
            });
            this._elementModels.set(key, model);
            model.mount();
        });
        elementsYMap.observe(onElementsMapChange);
        this._disposables.add(() => {
            elementsYMap.unobserve(onElementsMapChange);
        });
    }
    _watchGroupRelationChange() {
        const addToGroup = (elementId, groupId) => {
            this._elementToGroup.set(elementId, groupId);
            this._groupToElements.set(groupId, (this._groupToElements.get(groupId) || []).concat(elementId));
        };
        const removeFromGroup = (elementId, groupId) => {
            if (this._elementToGroup.has(elementId)) {
                const group = this._elementToGroup.get(elementId);
                if (group === groupId) {
                    this._elementToGroup.delete(elementId);
                }
            }
            if (this._groupToElements.has(groupId)) {
                const elements = this._groupToElements.get(groupId);
                const index = elements.indexOf(elementId);
                if (index !== -1) {
                    elements.splice(index, 1);
                    elements.length === 0 && this._groupToElements.delete(groupId);
                }
            }
        };
        const isGroup = (element) => element instanceof SurfaceGroupLikeModel;
        this.elementModels.forEach(model => {
            if (isGroup(model)) {
                model.childIds.forEach(childId => {
                    addToGroup(childId, model.id);
                });
            }
        });
        this.elementUpdated.on(({ id, oldValues }) => {
            const element = this.getElementById(id);
            if (isGroup(element) && oldValues['childIds']) {
                oldValues['childIds'].forEach(childId => {
                    removeFromGroup(childId, id);
                });
                element.childIds.forEach(childId => {
                    addToGroup(childId, id);
                });
                if (element.childIds.length === 0) {
                    this.removeElement(id);
                }
            }
        });
        this.elementAdded.on(({ id }) => {
            const element = this.getElementById(id);
            if (isGroup(element)) {
                element.childIds.forEach(childId => {
                    addToGroup(childId, id);
                });
            }
        });
        this.elementRemoved.on(({ id, model }) => {
            if (isGroup(model)) {
                const children = [...(this._groupToElements.get(id) || [])];
                children.forEach(childId => removeFromGroup(childId, id));
            }
        });
        this._disposables.add(this.doc.slots.blockUpdated.on(({ type, id }) => {
            switch (type) {
                case 'delete': {
                    const group = this.getGroup(id);
                    if (group) {
                        // eslint-disable-next-line unicorn/prefer-dom-node-remove
                        group.removeChild(id);
                    }
                }
            }
        }));
    }
    _watchConnectorRelationChange() {
        const addConnector = (targetId, connectorId) => {
            const connectors = this._elementToConnector.get(targetId);
            if (!connectors) {
                this._elementToConnector.set(targetId, [connectorId]);
            }
            else {
                connectors.push(connectorId);
            }
            this._connectorToElements.set(connectorId, (this._connectorToElements.get(connectorId) || []).concat(targetId));
        };
        const removeConnector = (targetId, connectorId) => {
            if (this._elementToConnector.has(targetId)) {
                const connectors = this._elementToConnector.get(targetId);
                const index = connectors.indexOf(connectorId);
                if (index !== -1) {
                    connectors.splice(index, 1);
                    connectors.length === 0 && this._elementToConnector.delete(targetId);
                }
            }
            if (this._connectorToElements.has(connectorId)) {
                const elements = this._connectorToElements.get(connectorId);
                const index = elements.indexOf(targetId);
                if (index !== -1) {
                    elements.splice(index, 1);
                    elements.length === 0 &&
                        this._connectorToElements.delete(connectorId);
                }
            }
        };
        const updateConnectorMap = (element, type) => {
            if (element.type !== 'connector')
                return;
            const connector = element;
            const connected = [connector.source.id, connector.target.id];
            const action = type === 'add' ? addConnector : removeConnector;
            connected.forEach(id => {
                id && action(id, connector.id);
            });
        };
        this.elementModels.forEach(model => updateConnectorMap(model, 'add'));
        this.elementUpdated.on(({ id, oldValues }) => {
            const element = this.getElementById(id);
            if (element.type !== 'connector' ||
                (!oldValues['source'] && !oldValues['target']))
                return;
            const oldConnected = [
                oldValues['source']?.id,
                oldValues['target']?.id,
            ];
            oldConnected.forEach(id => {
                id && removeConnector(id, element.id);
            });
            updateConnectorMap(element, 'add');
        });
        this.elementAdded.on(id => updateConnectorMap(this.getElementById(id.id), 'add'));
        this.elementRemoved.on(({ id, type }) => {
            if (type === 'connector') {
                const connected = [...(this._connectorToElements.get(id) || [])];
                connected.forEach(connectedId => removeConnector(connectedId, id));
            }
        });
    }
    dispose() {
        super.dispose();
        this._disposables.dispose();
        this.elementAdded.dispose();
        this.elementRemoved.dispose();
        this.elementUpdated.dispose();
        this._elementModels.forEach(({ unmount }) => unmount());
        this._elementModels.clear();
        this.hooks.update.dispose();
        this.hooks.remove.dispose();
    }
    isInMindmap(id) {
        const group = this.getGroup(id);
        return group?.type === 'mindmap';
    }
    getConnectors(id) {
        return (this._elementToConnector.get(id) || []).map(id => this.getElementById(id));
    }
    getGroup(id) {
        return this._elementToGroup.has(id)
            ? this.getElementById(this._elementToGroup.get(id))
            : null;
    }
    getGroups(id) {
        const groups = [];
        let group = this.getGroup(id);
        while (group) {
            groups.push(group);
            group = this.getGroup(group.id);
        }
        return groups;
    }
    getElementsByType(type) {
        return this.elementModels.filter(model => model.type === type);
    }
    hasElementById(id) {
        return this._elementModels.has(id);
    }
    getElementById(id) {
        return this._elementModels.get(id)?.model ?? null;
    }
    addElement(props) {
        if (this.doc.readonly) {
            throw new Error('Cannot add element in readonly mode');
        }
        const id = generateElementId();
        // @ts-ignore
        props.id = id;
        const elementModel = createModelFromProps(props, this, {
            onChange: payload => this.elementUpdated.emit(payload),
        });
        this._elementModels.set(id, elementModel);
        this.doc.transact(() => {
            this.elements.getValue().set(id, elementModel.model.yMap);
        });
        return id;
    }
    removeElement(id) {
        if (this.doc.readonly) {
            throw new Error('Cannot remove element in readonly mode');
        }
        if (!this.hasElementById(id)) {
            return;
        }
        this.doc.transact(() => {
            const element = this.getElementById(id);
            const group = this.getGroup(id);
            if (element instanceof SurfaceGroupLikeModel) {
                element.childIds.forEach(childId => {
                    if (this.hasElementById(childId)) {
                        this.removeElement(childId);
                    }
                    else if (this.doc.hasBlock(childId)) {
                        this.doc.deleteBlock(this.doc.getBlock(childId).model);
                    }
                });
            }
            if (group) {
                // eslint-disable-next-line unicorn/prefer-dom-node-remove
                group.removeChild(id);
            }
            this.elements.getValue().delete(id);
            this.hooks.remove.emit({
                id,
                model: element,
                type: element.type,
            });
        });
    }
    updateElement(id, props) {
        if (this.doc.readonly) {
            throw new Error('Cannot update element in readonly mode');
        }
        const elementModel = this.getElementById(id);
        if (!elementModel) {
            throw new Error(`Element ${id} is not found`);
        }
        this.doc.transact(() => {
            props = propsToY(elementModel.type, props);
            Object.entries(props).forEach(([key, value]) => {
                // @ts-ignore
                elementModel[key] = value;
            });
        });
    }
}
//# sourceMappingURL=surface-model.js.map