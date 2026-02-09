import type { ReactiveController } from 'lit';
import type { InsertToPosition } from '../../../../types.js';
import { KanbanCard } from '../card.js';
import { KanbanGroup } from '../group.js';
import type { DataViewKanban } from '../kanban-view.js';
export declare class KanbanDragController implements ReactiveController {
    private host;
    get scrollContainer(): HTMLElement;
    dropPreview: {
        display(group: KanbanGroup, self: KanbanCard | undefined, card?: KanbanCard | undefined): void;
        remove(): void;
    };
    constructor(host: DataViewKanban);
    getInsertPosition: (evt: MouseEvent) => {
        group: KanbanGroup;
        card?: KanbanCard;
        position: InsertToPosition;
    } | undefined;
    shooIndicator: (evt: MouseEvent, self: KanbanCard | undefined) => {
        group: KanbanGroup;
        position: InsertToPosition;
    } | undefined;
    hostConnected(): void;
    dragStart: (ele: KanbanCard, evt: PointerEvent) => void;
}
//# sourceMappingURL=drag.d.ts.map