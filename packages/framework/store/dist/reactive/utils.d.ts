import type { Doc as YDoc, YEvent } from 'yjs';
import { Array as YArray, Map as YMap } from 'yjs';
import type { ProxyOptions } from './proxy.js';
export type Native2Y<T> = T extends Record<string, infer U> ? YMap<U> : T extends Array<infer U> ? YArray<U> : T;
export declare function isPureObject(value: unknown): value is object;
type TransformOptions = {
    deep?: boolean;
    transform?: (value: unknown, origin: unknown) => unknown;
};
export declare function native2Y<T>(value: T, { deep, transform }?: TransformOptions): Native2Y<T>;
export declare function y2Native(yAbstract: unknown, { deep, transform }?: TransformOptions): unknown;
export type UnRecord = Record<string, unknown>;
export declare abstract class BaseReactiveYData<T, Y> {
    get proxy(): T;
    protected abstract readonly _proxy: T;
    protected abstract readonly _source: T;
    protected abstract readonly _ySource: Y;
    protected abstract readonly _options: ProxyOptions<T>;
    protected _skipNext: boolean;
    protected readonly _stashed: Set<string | number>;
    protected abstract _getProxy(): T;
    protected _getOrigin: (doc: YDoc) => {
        doc: YDoc;
        proxy: true;
        target: BaseReactiveYData<any, any>;
    };
    protected _updateWithSkip: (fn: () => void) => void;
    protected _transact: (doc: YDoc, fn: () => void) => void;
    protected _onObserve: (event: YEvent<any>, handler: () => void) => void;
    abstract stash(prop: string | number): void;
    abstract pop(prop: string | number): void;
}
export {};
//# sourceMappingURL=utils.d.ts.map