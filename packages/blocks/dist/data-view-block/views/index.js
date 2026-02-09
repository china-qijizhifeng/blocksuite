import { viewPresets, } from '../../database-block/data-view/index.js';
export const blockQueryViews = [
    viewPresets.tableViewConfig,
    viewPresets.kanbanViewConfig,
];
export const blockQueryViewMap = Object.fromEntries(blockQueryViews.map(view => [view.type, view]));
//# sourceMappingURL=index.js.map