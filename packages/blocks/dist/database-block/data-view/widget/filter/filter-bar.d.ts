import { ShadowlessElement } from '@blocksuite/block-std';
import { type TemplateResult } from 'lit';
import type { FilterGroup, Variable } from '../../common/ast.js';
declare const FilterBar_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FilterBar extends FilterBar_base {
    static styles: import("lit").CSSResult;
    accessor data: FilterGroup;
    accessor vars: Variable[];
    accessor setData: (filter: FilterGroup) => void;
    updateMoreFilterPanel?: () => void;
    private _setFilter;
    private addFilter;
    private expandGroup;
    private deleteFilter;
    updated(): void;
    renderMoreFilter: (count: number) => TemplateResult;
    showMoreFilter: (e: MouseEvent, count: number) => void;
    renderAddFilter: () => TemplateResult<1>;
    renderMore: (count: number) => TemplateResult<1>;
    renderCondition(i: number): TemplateResult<1>;
    renderFilters(): (() => TemplateResult<1>)[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'filter-bar': FilterBar;
    }
}
export {};
//# sourceMappingURL=filter-bar.d.ts.map