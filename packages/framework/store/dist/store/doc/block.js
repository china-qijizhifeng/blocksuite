import { assertExists } from '@blocksuite/global/utils';
import * as Y from 'yjs';
import { Boxed, y2Native } from '../../reactive/index.js';
import { createYProxy, native2Y } from '../../reactive/index.js';
import { BlockModel, internalPrimitives } from '../../schema/base.js';
import { BlockViewType } from './doc.js';
export class Block {
    constructor(schema, yBlock, doc, options = {}) {
        this.schema = schema;
        this.yBlock = yBlock;
        this.doc = doc;
        this.options = options;
        this._byPassProxy = false;
        this._stashed = new Set();
        this.blockViewType = BlockViewType.Display;
        this._byPassUpdate = (fn) => {
            this._byPassProxy = true;
            fn();
            this._byPassProxy = false;
        };
        this._getPropsProxy = (name, value) => {
            return createYProxy(value, {
                onChange: () => {
                    this.options.onChange?.(this, name, value);
                },
            });
        };
        this.stash = (prop) => {
            if (this._stashed.has(prop))
                return;
            this._stashed.add(prop);
            this._stashProp(prop);
        };
        this.pop = (prop) => {
            if (!this._stashed.has(prop))
                return;
            this._popProp(prop);
        };
        const { id, flavour, version, yChildren, props } = this._parseYBlock();
        this.id = id;
        this.flavour = flavour;
        this.yChildren = yChildren;
        this.version = version;
        this.model = this._createModel(props);
        this.yChildren.observe(() => {
            this.model.childrenUpdated.emit();
        });
        this.yBlock.observe(event => {
            event.keysChanged.forEach(key => {
                const type = event.changes.keys.get(key);
                if (!type) {
                    return;
                }
                if (type.action === 'update' || type.action === 'add') {
                    const value = this.yBlock.get(key);
                    const keyName = key.replace('prop:', '');
                    const proxy = this._getPropsProxy(keyName, value);
                    this._byPassUpdate(() => {
                        // @ts-ignore
                        this.model[keyName] = proxy;
                    });
                    this.options.onChange?.(this, keyName, value);
                    return;
                }
                if (type.action === 'delete') {
                    const keyName = key.replace('prop:', '');
                    this._byPassUpdate(() => {
                        // @ts-ignore
                        delete this.model[keyName];
                    });
                    this.options.onChange?.(this, keyName, undefined);
                    return;
                }
            });
        });
        this.yBlock.observeDeep(evtArr => {
            const evt = evtArr[0];
            // filter out events from itself
            // as this event is triggered in observe function
            if (!evt || evt.currentTarget === evt.target)
                return;
            this.options.onChange?.(this, '', undefined);
        });
        if (doc) {
            this.model.doc = doc;
        }
    }
    _stashProp(prop) {
        this.model[prop] = y2Native(this.yBlock.get(`prop:${prop}`), {
            transform: (value, origin) => {
                if (Boxed.is(origin)) {
                    return value;
                }
                if (origin instanceof Y.Map) {
                    return new Proxy(value, {
                        get: (target, p, receiver) => {
                            return Reflect.get(target, p, receiver);
                        },
                        set: (target, p, value, receiver) => {
                            const result = Reflect.set(target, p, value, receiver);
                            this.options.onChange?.(this, prop, value);
                            return result;
                        },
                        deleteProperty: (target, p) => {
                            const result = Reflect.deleteProperty(target, p);
                            this.options.onChange?.(this, prop, undefined);
                            return result;
                        },
                    });
                }
                if (origin instanceof Y.Array) {
                    return new Proxy(value, {
                        get: (target, p, receiver) => {
                            return Reflect.get(target, p, receiver);
                        },
                        set: (target, p, value, receiver) => {
                            const index = Number(p);
                            if (Number.isNaN(index)) {
                                return Reflect.set(target, p, value, receiver);
                            }
                            const result = Reflect.set(target, p, value, receiver);
                            this.options.onChange?.(this, prop, value);
                            return result;
                        },
                        deleteProperty: (target, p) => {
                            const result = Reflect.deleteProperty(target, p);
                            this.options.onChange?.(this, p, undefined);
                            return result;
                        },
                    });
                }
                return value;
            },
        });
    }
    _popProp(prop) {
        const model = this.model;
        const value = model[prop];
        this._stashed.delete(prop);
        model[prop] = value;
    }
    _parseYBlock() {
        let id;
        let flavour;
        let version;
        let yChildren;
        const props = {};
        this.yBlock.forEach((value, key) => {
            if (key.startsWith('prop:')) {
                const keyName = key.replace('prop:', '');
                props[keyName] = this._getPropsProxy(keyName, value);
                return;
            }
            if (key === 'sys:id' && typeof value === 'string') {
                id = value;
                return;
            }
            if (key === 'sys:flavour' && typeof value === 'string') {
                flavour = value;
                return;
            }
            if (key === 'sys:children' && value instanceof Y.Array) {
                yChildren = value;
                return;
            }
            if (key === 'sys:version' && typeof value === 'number') {
                version = value;
                return;
            }
        });
        assertExists(id, 'Block id is not found');
        assertExists(flavour, 'Block flavour is not found');
        assertExists(yChildren, 'Block children is not found');
        const schema = this.schema.flavourSchemaMap.get(flavour);
        assertExists(schema, `Cannot find schema for flavour ${flavour}`);
        const defaultProps = schema.model.props?.(internalPrimitives);
        if (typeof version !== 'number') {
            // no version found in data, set to schema version
            version = schema.version;
        }
        // Set default props if not exists
        if (defaultProps) {
            Object.entries(defaultProps).forEach(([key, value]) => {
                if (key in props)
                    return;
                const yValue = native2Y(value);
                this.yBlock.set(`prop:${key}`, yValue);
                props[key] = this._getPropsProxy(key, yValue);
            });
        }
        return {
            id,
            flavour,
            version,
            props,
            yChildren,
        };
    }
    _createModel(props) {
        const schema = this.schema.flavourSchemaMap.get(this.flavour);
        assertExists(schema, `Cannot find schema for flavour ${this.flavour}`);
        const model = schema.model.toModel?.() ?? new BlockModel();
        Object.assign(model, props);
        model.id = this.id;
        model.version = this.version;
        model.keys = Object.keys(props);
        model.flavour = schema.model.flavour;
        model.role = schema.model.role;
        model.yBlock = this.yBlock;
        model.stash = this.stash;
        model.pop = this.pop;
        return new Proxy(model, {
            has: (target, p) => {
                return Reflect.has(target, p);
            },
            set: (target, p, value, receiver) => {
                if (!this._byPassProxy &&
                    typeof p === 'string' &&
                    model.keys.includes(p)) {
                    if (this._stashed.has(p)) {
                        const result = Reflect.set(target, p, value, receiver);
                        this.options.onChange?.(this, p, value);
                        return result;
                    }
                    const yValue = native2Y(value);
                    this.yBlock.set(`prop:${p}`, yValue);
                    const proxy = this._getPropsProxy(p, yValue);
                    return Reflect.set(target, p, proxy, receiver);
                }
                return Reflect.set(target, p, value, receiver);
            },
            get: (target, p, receiver) => {
                return Reflect.get(target, p, receiver);
            },
            deleteProperty: (target, p) => {
                if (!this._byPassProxy &&
                    typeof p === 'string' &&
                    model.keys.includes(p)) {
                    this.yBlock.delete(`prop:${p}`);
                }
                return Reflect.deleteProperty(target, p);
            },
        });
    }
}
//# sourceMappingURL=block.js.map