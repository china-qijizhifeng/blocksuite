/**
 * Set metadata for a property
 * @param symbol Unique symbol for the metadata
 * @param target The target object to set metadata on, usually the prototype
 * @param prop The property name
 * @param val The value to set
 */
export declare function setObjectPropMeta(symbol: symbol, target: unknown, prop: string | symbol, val: unknown): void;
/**
 * Get metadata for a property
 * @param target The target object to retrieve metadata from, usually the prototype
 * @param symbol Unique symbol for the metadata
 * @param prop The property name, if not provided, returns all metadata for that symbol
 * @returns
 */
export declare function getObjectPropMeta(target: unknown, symbol: symbol, prop?: string | symbol): any;
export declare function getDecoratorState(): {
    creating: boolean;
    deriving: boolean;
    skipYfield: boolean;
};
//# sourceMappingURL=common.d.ts.map