import './condition.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { TemplateResult } from 'lit';
import type { Filter, FilterGroup, Variable } from '../../common/ast.js';
declare const FilterGroupView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FilterGroupView extends FilterGroupView_base {
    private get isMaxDepth();
    static styles: import("lit").CSSResult;
    private opMap;
    accessor depth: number;
    accessor data: FilterGroup;
    accessor vars: Variable[];
    accessor setData: (filter: FilterGroup) => void;
    accessor containerClass: {
        index: number;
        class: string;
    } | undefined;
    private _setFilter;
    private _addNew;
    private _selectOp;
    private _clickConditionOps;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-group-view': FilterGroupView;
    }
}
export declare const getDepth: (filter: Filter) => number;
export {};
//# sourceMappingURL=filter-group.d.ts.map