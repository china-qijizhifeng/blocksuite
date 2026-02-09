import type { ReactiveController } from 'lit';
import type { DataViewTable } from '../table-view.js';
export declare class TableClipboardController implements ReactiveController {
    host: DataViewTable;
    private get readonly();
    private get std();
    constructor(host: DataViewTable);
    private _onCopy;
    private _onCut;
    private _onPaste;
    hostConnected(): void;
}
//# sourceMappingURL=clipboard.d.ts.map