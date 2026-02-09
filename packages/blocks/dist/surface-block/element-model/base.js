var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { DisposableGroup } from '@blocksuite/global/utils';
import { randomSeed } from '../rough/math.js';
import { Bound } from '../utils/bound.js';
import { getBoundsWithRotation, getPointsFromBoundsWithRotation, linePolygonIntersects, polygonGetPointTangent, polygonNearestPoint, rotatePoints, } from '../utils/math-utils.js';
import { PointLocation } from '../utils/point-location.js';
import { deserializeXYWH, } from '../utils/xywh.js';
import { convertProps, getDeriveProperties, getYFieldPropsSet, local, updateDerivedProp, watch, yfield, } from './decorators.js';
let SurfaceElementModel = (() => {
    let _index_decorators;
    let _index_initializers = [];
    let _index_extraInitializers = [];
    let _seed_decorators;
    let _seed_initializers = [];
    let _seed_extraInitializers = [];
    let _display_decorators;
    let _display_initializers = [];
    let _display_extraInitializers = [];
    let _opacity_decorators;
    let _opacity_initializers = [];
    let _opacity_extraInitializers = [];
    let _externalXYWH_decorators;
    let _externalXYWH_initializers = [];
    let _externalXYWH_extraInitializers = [];
    return class SurfaceElementModel {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _index_decorators = [yfield()];
            _seed_decorators = [yfield()];
            _display_decorators = [local()];
            _opacity_decorators = [local()];
            _externalXYWH_decorators = [watch((_, instance) => {
                    instance['_local'].delete('externalBound');
                }), local()];
            __esDecorate(this, null, _index_decorators, { kind: "accessor", name: "index", static: false, private: false, access: { has: obj => "index" in obj, get: obj => obj.index, set: (obj, value) => { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
            __esDecorate(this, null, _seed_decorators, { kind: "accessor", name: "seed", static: false, private: false, access: { has: obj => "seed" in obj, get: obj => obj.seed, set: (obj, value) => { obj.seed = value; } }, metadata: _metadata }, _seed_initializers, _seed_extraInitializers);
            __esDecorate(this, null, _display_decorators, { kind: "accessor", name: "display", static: false, private: false, access: { has: obj => "display" in obj, get: obj => obj.display, set: (obj, value) => { obj.display = value; } }, metadata: _metadata }, _display_initializers, _display_extraInitializers);
            __esDecorate(this, null, _opacity_decorators, { kind: "accessor", name: "opacity", static: false, private: false, access: { has: obj => "opacity" in obj, get: obj => obj.opacity, set: (obj, value) => { obj.opacity = value; } }, metadata: _metadata }, _opacity_initializers, _opacity_extraInitializers);
            __esDecorate(this, null, _externalXYWH_decorators, { kind: "accessor", name: "externalXYWH", static: false, private: false, access: { has: obj => "externalXYWH" in obj, get: obj => obj.externalXYWH, set: (obj, value) => { obj.externalXYWH = value; } }, metadata: _metadata }, _externalXYWH_initializers, _externalXYWH_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get externalBound() {
            if (!this._local.has('externalBound')) {
                const bound = this.externalXYWH
                    ? Bound.deserialize(this.externalXYWH)
                    : null;
                this._local.set('externalBound', bound);
            }
            return this._local.get('externalBound');
        }
        get connectable() {
            return true;
        }
        get deserializedXYWH() {
            if (this.xywh !== this._lastXYWH) {
                const xywh = this.xywh;
                this._local.set('deserializedXYWH', deserializeXYWH(xywh));
                this._lastXYWH = xywh;
            }
            return this._local.get('deserializedXYWH') ?? [0, 0, 0, 0];
        }
        get x() {
            return this.deserializedXYWH[0];
        }
        get y() {
            return this.deserializedXYWH[1];
        }
        get w() {
            return this.deserializedXYWH[2];
        }
        get h() {
            return this.deserializedXYWH[3];
        }
        get group() {
            return this.surface.getGroup(this.id);
        }
        get groups() {
            return this.surface.getGroups(this.id);
        }
        get id() {
            return this._id;
        }
        get elementBound() {
            if (this.rotate) {
                return Bound.from(getBoundsWithRotation(this));
            }
            return Bound.deserialize(this.xywh);
        }
        get isConnected() {
            return this.surface.hasElementById(this.id);
        }
        #index_accessor_storage;
        get index() { return this.#index_accessor_storage; }
        set index(value) { this.#index_accessor_storage = value; }
        #seed_accessor_storage;
        get seed() { return this.#seed_accessor_storage; }
        set seed(value) { this.#seed_accessor_storage = value; }
        #display_accessor_storage;
        get display() { return this.#display_accessor_storage; }
        set display(value) { this.#display_accessor_storage = value; }
        #opacity_accessor_storage;
        get opacity() { return this.#opacity_accessor_storage; }
        set opacity(value) { this.#opacity_accessor_storage = value; }
        #externalXYWH_accessor_storage;
        get externalXYWH() { return this.#externalXYWH_accessor_storage; }
        set externalXYWH(value) { this.#externalXYWH_accessor_storage = value; }
        constructor(options) {
            this._lastXYWH = '[0,0,0,0]';
            /**
             * When the ymap is not connected to the doc, its value cannot be read.
             * But we need to use those value during the creation, so the yfield decorated field's value will
             * be stored in this map too during the creation.
             *
             * After the ymap is connected to the doc, this map will be cleared.
             */
            this._preserved = new Map();
            this._local = new Map();
            this._disposable = new DisposableGroup();
            this.#index_accessor_storage = __runInitializers(this, _index_initializers, void 0);
            this.#seed_accessor_storage = (__runInitializers(this, _index_extraInitializers), __runInitializers(this, _seed_initializers, void 0));
            this.#display_accessor_storage = (__runInitializers(this, _seed_extraInitializers), __runInitializers(this, _display_initializers, true));
            this.#opacity_accessor_storage = (__runInitializers(this, _display_extraInitializers), __runInitializers(this, _opacity_initializers, 1));
            this.#externalXYWH_accessor_storage = (__runInitializers(this, _opacity_extraInitializers), __runInitializers(this, _externalXYWH_initializers, undefined));
            __runInitializers(this, _externalXYWH_extraInitializers);
            const { id, yMap, model, stashedStore, onChange } = options;
            this._id = id;
            this.yMap = yMap;
            this.surface = model;
            this._stashed = stashedStore;
            this._onChange = onChange;
            // class properties is initialized before yMap has been set
            // so we need to manually assign the default value here
            this.index = 'a0';
            this.seed = randomSeed();
        }
        stash(prop) {
            if (this._stashed.has(prop)) {
                return;
            }
            if (!getYFieldPropsSet(this).has(prop)) {
                return;
            }
            const curVal = this[prop];
            this._stashed.set(prop, curVal);
            Object.defineProperty(this, prop, {
                configurable: true,
                enumerable: true,
                get: () => this._stashed.get(prop),
                set: (original) => {
                    const value = convertProps(prop, original, this);
                    const oldValue = this._stashed.get(prop);
                    const derivedProps = getDeriveProperties(prop, original, this);
                    this._stashed.set(prop, value);
                    this._onChange({
                        props: {
                            [prop]: value,
                        },
                        oldValues: {
                            [prop]: oldValue,
                        },
                        local: true,
                    });
                    this.surface['hooks'].update.emit({
                        id: this.id,
                        props: {
                            [prop]: value,
                        },
                        oldValues: {
                            [prop]: oldValue,
                        },
                    });
                    updateDerivedProp(derivedProps, this);
                },
            });
        }
        pop(prop) {
            if (!this._stashed.has(prop)) {
                return;
            }
            const value = this._stashed.get(prop);
            this._stashed.delete(prop);
            // @ts-ignore
            delete this[prop];
            if (getYFieldPropsSet(this).has(prop)) {
                this.surface.doc.transact(() => {
                    // directly set the value to the ymap to avoid
                    // executing derive and convert decorators again
                    this.yMap.set(prop, value);
                });
            }
            else {
                console.warn('pop a prop that is not yfield or local:', prop);
            }
        }
        containedByBounds(bounds) {
            return getPointsFromBoundsWithRotation(this).some(point => bounds.containsPoint(point));
        }
        getNearestPoint(point) {
            const points = getPointsFromBoundsWithRotation(this);
            return polygonNearestPoint(points, point);
        }
        intersectWithLine(start, end) {
            const points = getPointsFromBoundsWithRotation(this);
            return linePolygonIntersects(start, end, points);
        }
        getRelativePointLocation(relativePoint) {
            const bound = Bound.deserialize(this.xywh);
            const point = bound.getRelativePoint(relativePoint);
            const rotatePoint = rotatePoints([point], bound.center, this.rotate)[0];
            const points = rotatePoints(bound.points, bound.center, this.rotate);
            const tangent = polygonGetPointTangent(points, rotatePoint);
            return new PointLocation(rotatePoint, tangent);
        }
        boxSelect(bound) {
            return (this.containedByBounds(bound) ||
                bound.points.some((point, i, points) => this.intersectWithLine(point, points[(i + 1) % points.length])));
        }
        hitTest(x, y, _, __) {
            return this.elementBound.isPointInBound([x, y]);
        }
        serialize() {
            return this.yMap.toJSON();
        }
        /**
         * `onCreated` function will be executed when
         * element is created in local rather than remote peers
         */
        onCreated() { }
        static propsToY(props) {
            return props;
        }
    };
})();
export { SurfaceElementModel };
let SurfaceGroupLikeModel = (() => {
    let _classSuper = SurfaceElementModel;
    let _xywh_decorators;
    let _xywh_initializers = [];
    let _xywh_extraInitializers = [];
    return class SurfaceGroupLikeModel extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _xywh_decorators = [local()];
            __esDecorate(this, null, _xywh_decorators, { kind: "accessor", name: "xywh", static: false, private: false, access: { has: obj => "xywh" in obj, get: obj => obj.xywh, set: (obj, value) => { obj.xywh = value; } }, metadata: _metadata }, _xywh_initializers, _xywh_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        /**
         * The ids of the children. Its role is to provide a unique way to access the children.
         * You should update this field through `setChildIds` when the children are added or removed.
         */
        get childIds() {
            return this._childIds;
        }
        get childElements() {
            const elements = [];
            for (const key of this.childIds) {
                const element = this.surface.getElementById(key) ||
                    this.surface.doc.getBlockById(key);
                element && elements.push(element);
            }
            return elements;
        }
        #xywh_accessor_storage;
        get xywh() { return this.#xywh_accessor_storage; }
        set xywh(value) { this.#xywh_accessor_storage = value; }
        /**
         * Set the new value of the childIds
         * @param value the new value of the childIds
         * @param fromLocal if true, the change is happened in the local
         */
        setChildIds(value, fromLocal) {
            const oldChildIds = this.childIds;
            this._childIds = value;
            this._onChange({
                props: {
                    childIds: value,
                },
                oldValues: {
                    childIds: oldChildIds,
                },
                local: fromLocal,
            });
            this.surface['hooks'].update.emit({
                id: this.id,
                props: {
                    childIds: value,
                },
                oldValues: {
                    childIds: oldChildIds,
                },
            });
        }
        hasChild(element) {
            return ((typeof element === 'string'
                ? this.children?.has(element)
                : this.children?.has(element.id)) ?? false);
        }
        /**
         * Check if the group has the given descendant.
         */
        hasDescendant(element) {
            const groups = this.surface.getGroups(typeof element === 'string' ? element : element.id);
            return groups.some(group => group.id === this.id);
        }
        /**
         * Get all descendants of this group
         * @param withoutGroup if true, will not include group element
         */
        descendants(withoutGroup = true) {
            return this.childElements.reduce((prev, child) => {
                if (child instanceof SurfaceGroupLikeModel) {
                    prev = prev.concat(child.descendants());
                    !withoutGroup && prev.push(child);
                }
                else {
                    prev.push(child);
                }
                return prev;
            }, []);
        }
        constructor() {
            super(...arguments);
            this._childIds = [];
            this.#xywh_accessor_storage = __runInitializers(this, _xywh_initializers, '[0,0,0,0]');
            __runInitializers(this, _xywh_extraInitializers);
        }
    };
})();
export { SurfaceGroupLikeModel };
export class SurfaceLocalModel {
    constructor() {
        this._lastXYWH = '[0,0,-1,-1]';
        this._local = new Map();
        this.opacity = 1;
    }
    get deserializedXYWH() {
        if (this.xywh !== this._lastXYWH) {
            const xywh = this.xywh;
            this._local.set('deserializedXYWH', deserializeXYWH(xywh));
            this._lastXYWH = xywh;
        }
        return this._local.get('deserializedXYWH');
    }
    get x() {
        return this.deserializedXYWH[0];
    }
    get y() {
        return this.deserializedXYWH[1];
    }
    get w() {
        return this.deserializedXYWH[2];
    }
    get h() {
        return this.deserializedXYWH[3];
    }
}
//# sourceMappingURL=base.js.map