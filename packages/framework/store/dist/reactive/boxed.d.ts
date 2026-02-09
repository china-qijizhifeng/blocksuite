import * as Y from 'yjs';
export declare class Boxed<T = unknown> {
    get yMap(): Y.Map<T>;
    private readonly _map;
    constructor(value: T);
    setValue(value: T): T;
    getValue(): T | undefined;
    static is: (value: unknown) => value is Boxed<unknown>;
    static from: <T_1>(map: Y.Map<T_1>) => Boxed<T_1>;
}
//# sourceMappingURL=boxed.d.ts.map