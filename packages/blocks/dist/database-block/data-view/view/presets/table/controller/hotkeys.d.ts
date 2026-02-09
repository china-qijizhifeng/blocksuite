import type { ReactiveController } from 'lit';
import type { DataViewTable } from '../table-view.js';
export declare class TableHotkeysController implements ReactiveController {
    private host;
    constructor(host: DataViewTable);
    get selectionController(): import("./selection.js").TableSelectionController;
    hostConnected(): void;
}
//# sourceMappingURL=hotkeys.d.ts.map