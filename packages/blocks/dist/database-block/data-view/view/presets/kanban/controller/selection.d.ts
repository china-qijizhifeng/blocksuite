import type { ReactiveController } from 'lit';
import { KanbanCard } from '../card.js';
import { KanbanCell } from '../cell.js';
import type { DataViewKanban } from '../kanban-view.js';
import type { KanbanCardSelection, KanbanCardSelectionCard, KanbanCellSelection, KanbanViewSelection, KanbanViewSelectionWithType } from '../types.js';
export declare class KanbanSelectionController implements ReactiveController {
    private host;
    get view(): import("../kanban-view-manager.js").DataViewKanbanManager;
    get selection(): KanbanViewSelectionWithType | undefined;
    set selection(data: KanbanViewSelection | undefined);
    _selection?: KanbanViewSelectionWithType;
    constructor(host: DataViewKanban);
    hostConnected(): void;
    shiftClickCard: (event: MouseEvent) => void;
    blur(selection: KanbanViewSelection): void;
    focus(selection: KanbanViewSelection): void;
    getNextFocusCell(selection: KanbanCellSelection, index: number, nextPosition: 'up' | 'down' | 'left' | 'right'): {
        cell: KanbanCell;
        cardId?: string;
        groupKey?: string;
    };
    getNextFocusCard(selection: KanbanCardSelection, index: number, nextPosition: 'up' | 'down' | 'left' | 'right'): {
        card: KanbanCard;
        cards: KanbanCardSelectionCard[];
    };
    focusNext(position: 'up' | 'down' | 'left' | 'right'): void;
    focusOut(): void;
    focusIn(): void;
    deleteCard(): void;
    focusFirstCell(): void;
    insertRowBefore(): void;
    insertRowAfter(): void;
    moveCard(rowId: string, key: string): void;
}
//# sourceMappingURL=selection.d.ts.map