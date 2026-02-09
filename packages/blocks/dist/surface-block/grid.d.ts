import { type IBound } from './consts.js';
export declare class GridManager<T extends BlockSuite.EdgelessModelType> {
    get isEmpty(): boolean;
    private _grids;
    private _elementToGrids;
    private _externalGrids;
    private _externalElementToGrids;
    private _createGrid;
    private _createExternalGrid;
    private _getGrid;
    private _getExternalGrid;
    private _addToExternalGrids;
    private _removeFromExternalGrids;
    private _searchExternal;
    update(element: T): void;
    add(element: T): void;
    remove(element: T): void;
    boundHasChanged(a: IBound, b: IBound): boolean;
    search(bound: IBound, strict?: boolean, getSet?: false): T[];
    search(bound: IBound, strict: boolean | undefined, getSet: true): Set<T>;
    pick(x: number, y: number): T[];
    /**
     *
     * @param bound
     * @param strict
     * @param reverseChecking If true, check if the bound is inside the elements instead of checking if the elements are inside the bound
     * @returns
     */
    has(bound: IBound, strict?: boolean, reverseChecking?: boolean, exclude?: Set<T>): boolean;
}
//# sourceMappingURL=grid.d.ts.map