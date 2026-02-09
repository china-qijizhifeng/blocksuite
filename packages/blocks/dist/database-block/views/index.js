import { viewPresets } from '../data-view/view/index.js';
export const databaseBlockViews = [
    viewPresets.tableViewConfig,
    viewPresets.kanbanViewConfig,
];
export const databaseBlockViewMap = Object.fromEntries(databaseBlockViews.map(view => [view.type, view]));
//# sourceMappingURL=index.js.map