import '../../../filter/filter-group.js';
import type { DataViewKanbanManager } from '../../../../view/presets/kanban/kanban-view-manager.js';
import type { DataViewTableManager } from '../../../../view/presets/table/table-view-manager.js';
import { WidgetBase } from '../../../widget-base.js';
export declare class DataViewHeaderToolsSearch extends WidgetBase {
    get showSearch(): boolean;
    set showSearch(value: boolean);
    static styles: import("lit").CSSResult;
    private accessor _searchInput;
    private accessor _showSearch;
    accessor view: DataViewTableManager | DataViewKanbanManager;
    preventBlur: boolean;
    private _onSearch;
    private _onSearchBlur;
    private _onSearchKeydown;
    private _clearSearch;
    private _clickSearch;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-search': DataViewHeaderToolsSearch;
    }
}
//# sourceMappingURL=search.d.ts.map