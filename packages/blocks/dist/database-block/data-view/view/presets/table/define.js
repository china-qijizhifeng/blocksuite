import { viewType } from '../../data-view.js';
import { DataViewTableManager } from './table-view-manager.js';
export const tableViewType = viewType('table');
export const tableViewModel = tableViewType.modelConfig({
    defaultName: 'Table View',
    dataViewManager: DataViewTableManager,
});
//# sourceMappingURL=define.js.map