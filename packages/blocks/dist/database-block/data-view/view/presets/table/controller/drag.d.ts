import type { ReactiveController } from 'lit';
import type { InsertToPosition } from '../../../../types.js';
import { TableRow } from '../components/row.js';
import type { DataViewTable } from '../table-view.js';
export declare class TableDragController implements ReactiveController {
    private host;
    dropPreview: {
        display(x: number, y: number, width: number): void;
        remove(): void;
    };
    constructor(host: DataViewTable);
    getInsertPosition: (evt: MouseEvent) => {
        groupKey: string | undefined;
        position: InsertToPosition;
        y: number;
        width: number;
        x: number;
    } | undefined;
    showIndicator: (evt: MouseEvent) => {
        groupKey: string | undefined;
        position: InsertToPosition;
        y: number;
        width: number;
        x: number;
    } | undefined;
    hostConnected(): void;
    dragStart: (row: TableRow, evt: PointerEvent) => void;
}
//# sourceMappingURL=drag.d.ts.map