import { type Disposable } from './disposable.js';
export declare class Slot<T = void> implements Disposable {
    private _emitting;
    private _callbacks;
    private _disposables;
    filter(testFun: (v: T) => boolean): Slot<T>;
    flatMap<U>(mapper: (v: T) => U[] | U): Slot<U>;
    on(callback: (v: T) => unknown): Disposable;
    subscribe: <U>(selector: (state: T) => U, callback: (value: U) => void, config?: {
        equalityFn?: (a: U, b: U) => boolean;
        filter?: (state: T) => boolean;
    }) => Disposable;
    once(callback: (v: T) => unknown): Disposable;
    unshift(callback: (v: T) => unknown): Disposable;
    emit(v: T): void;
    pipe(that: Slot<T>): Slot<T>;
    dispose(): void;
    toDispose(disposables: Disposable[]): Slot<T>;
}
//# sourceMappingURL=slot.d.ts.map