export declare class PathFinder {
    private constructor();
    static id: (path: readonly string[]) => string;
    static parent: (path: readonly string[]) => string[];
    static pathToKey: (path: readonly string[]) => string;
    static keyToPath: (key: string) => string[];
    static equals: (path1: readonly string[], path2: readonly string[]) => boolean;
    static includes: (path1: string[], path2: string[]) => boolean;
}
//# sourceMappingURL=path-finder.d.ts.map