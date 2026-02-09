import { getDecoratorState } from './common.js';
import { convertProps } from './convert.js';
import { getDeriveProperties, updateDerivedProp } from './derive.js';
import { startObserve } from './observer.js';
const yPropsSetSymbol = Symbol('yProps');
export function getYFieldPropsSet(target) {
    const proto = Object.getPrototypeOf(target);
    // @ts-ignore
    if (!Object.hasOwn(proto, yPropsSetSymbol)) {
        // @ts-ignore
        proto[yPropsSetSymbol] = new Set();
    }
    // @ts-ignore
    return proto[yPropsSetSymbol];
}
export function yfield(fallback) {
    // return function yDecorator(prototype: unknown, prop: string | symbol) {
    return function yDecorator(target, context) {
        const prop = context.name;
        return {
            init(v) {
                const yProps = getYFieldPropsSet(this);
                yProps.add(prop);
                if (getDecoratorState()?.skipYfield) {
                    return;
                }
                if (this.yMap) {
                    if (this.yMap.doc) {
                        this.surface.doc.transact(() => {
                            this.yMap.set(prop, v);
                        });
                    }
                    else {
                        this.yMap.set(prop, v);
                        this._preserved.set(prop, v);
                    }
                }
                return v;
            },
            get() {
                return (this.yMap.get(prop) ??
                    this._preserved.get(prop) ??
                    fallback);
            },
            set(originalVal) {
                const isCreating = getDecoratorState()?.creating;
                if (getDecoratorState()?.skipYfield) {
                    return;
                }
                const derivedProps = getDeriveProperties(prop, originalVal, this);
                const val = isCreating
                    ? originalVal
                    : convertProps(prop, originalVal, this);
                const oldValue = target.get.call(this);
                if (this.yMap.doc) {
                    this.surface.doc.transact(() => {
                        this.yMap.set(prop, val);
                    });
                }
                else {
                    this.yMap.set(prop, val);
                    this._preserved.set(prop, val);
                }
                startObserve(prop, this);
                if (!isCreating) {
                    updateDerivedProp(derivedProps, this);
                    this.surface['hooks'].update.emit({
                        id: this.id,
                        props: {
                            [prop]: val,
                        },
                        oldValues: {
                            [prop]: oldValue,
                        },
                    });
                }
            },
        };
    };
}
//# sourceMappingURL=yfield.js.map