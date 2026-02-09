export declare function loadingSort<T extends {
    id: string;
    deps: string[];
}>(elements: T[]): T[];
export declare function sortIndex(a: {
    id: string;
    index: string;
}, b: {
    id: string;
    index: string;
}, groupIndexMap: Map<string, {
    id: string;
    index: string;
}>): 0 | 1 | -1;
//# sourceMappingURL=sort.d.ts.map