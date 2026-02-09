import type { ReactiveController } from 'lit';
import type { DataViewKanban } from '../kanban-view.js';
export declare class KanbanHotkeysController implements ReactiveController {
    private host;
    constructor(host: DataViewKanban);
    private get hasSelection();
    hostConnected(): void;
}
//# sourceMappingURL=hotkeys.d.ts.map