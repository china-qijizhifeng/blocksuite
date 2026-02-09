import type { ReactiveController } from 'lit';
import type { DataViewKanban } from '../kanban-view.js';
export declare class KanbanClipboardController implements ReactiveController {
    host: DataViewKanban;
    private get readonly();
    constructor(host: DataViewKanban);
    private _onCopy;
    private _onPaste;
    hostConnected(): void;
}
//# sourceMappingURL=clipboard.d.ts.map