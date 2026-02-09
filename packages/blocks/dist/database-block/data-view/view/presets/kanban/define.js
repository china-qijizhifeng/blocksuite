import { viewType } from '../../data-view.js';
import { DataViewKanbanManager } from './kanban-view-manager.js';
export const kanbanViewType = viewType('kanban');
export const kanbanViewModel = kanbanViewType.modelConfig({
    defaultName: 'Kanban View',
    dataViewManager: DataViewKanbanManager,
});
//# sourceMappingURL=define.js.map