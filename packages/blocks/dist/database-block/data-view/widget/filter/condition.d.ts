import '../../common/ref/ref.js';
import '../../common/literal/define.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { FilterGroup, SingleFilter, Variable } from '../../common/ast.js';
declare const FilterConditionView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FilterConditionView extends FilterConditionView_base {
    static styles: import("lit").CSSResult;
    accessor data: SingleFilter;
    accessor setData: (filter: SingleFilter) => void;
    accessor vars: Variable[];
    accessor onDelete: (() => void) | undefined;
    private _setRef;
    private _filterLabel;
    private _filterList;
    private _selectFilter;
    private _args;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-condition-view': FilterConditionView;
    }
}
export declare const popAddNewFilter: (target: HTMLElement, props: {
    value: FilterGroup;
    onChange: (value: FilterGroup) => void;
    vars: Variable[];
}) => void;
export {};
//# sourceMappingURL=condition.d.ts.map