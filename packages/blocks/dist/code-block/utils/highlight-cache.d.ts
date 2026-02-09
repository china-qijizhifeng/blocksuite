import type { ThemedToken } from 'shiki';
declare class LRUCache<K, V> {
    private maxSize;
    private cache;
    constructor(maxSize: number);
    get(key: K): V | null;
    set(key: K, value: V): void;
}
export type highlightCacheKey = `${string}-${string}-${string}`;
export declare const highlightCache: LRUCache<`${string}-${string}-${string}`, Omit<ThemedToken, "offset">[]>;
export {};
//# sourceMappingURL=highlight-cache.d.ts.map