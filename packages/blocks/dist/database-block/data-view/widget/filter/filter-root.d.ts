import './condition.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { FilterGroup, Variable } from '../../common/ast.js';
import type { FilterGroupView } from './filter-group.js';
declare const FilterRootView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FilterRootView extends FilterRootView_base {
    static styles: import("lit").CSSResult;
    accessor data: FilterGroup;
    accessor vars: Variable[];
    accessor setData: (filter: FilterGroup) => void;
    accessor onBack: () => void;
    accessor containerClass: {
        index: number;
        class: string;
    } | undefined;
    private _setFilter;
    private _addNew;
    private _clickConditionOps;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-root-view': FilterGroupView;
    }
}
export {};
//# sourceMappingURL=filter-root.d.ts.map