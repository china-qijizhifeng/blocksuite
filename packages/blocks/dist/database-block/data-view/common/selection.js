import { BaseSelection } from '@blocksuite/block-std';
import { z } from 'zod';
const TableViewSelectionSchema = z.object({
    viewId: z.string(),
    type: z.literal('table'),
    rowsSelection: z
        .object({
        start: z.number(),
        end: z.number(),
    })
        .optional(),
    columnsSelection: z
        .object({
        start: z.number(),
        end: z.number(),
    })
        .optional(),
    focus: z.object({
        rowIndex: z.number(),
        columnIndex: z.number(),
    }),
    isEditing: z.boolean(),
});
const KanbanCellSelectionSchema = z.object({
    selectionType: z.literal('cell'),
    groupKey: z.string(),
    cardId: z.string(),
    columnId: z.string(),
    isEditing: z.boolean(),
});
const KanbanCardSelectionSchema = z.object({
    selectionType: z.literal('card'),
    cards: z.array(z.object({
        groupKey: z.string(),
        cardId: z.string(),
    })),
});
const KanbanGroupSelectionSchema = z.object({
    selectionType: z.literal('group'),
    groupKeys: z.array(z.string()),
});
const DatabaseSelectionSchema = z.object({
    blockId: z.string(),
    viewSelection: z.union([
        TableViewSelectionSchema,
        KanbanCellSelectionSchema,
        KanbanCardSelectionSchema,
        KanbanGroupSelectionSchema,
    ]),
});
export class DatabaseSelection extends BaseSelection {
    static { this.type = 'database'; }
    static { this.group = 'note'; }
    constructor({ blockId, viewSelection, }) {
        super({
            blockId,
        });
        this.viewSelection = viewSelection;
    }
    get viewId() {
        return this.viewSelection.viewId;
    }
    getSelection(type) {
        return this.viewSelection.type === type
            ? this.viewSelection
            : undefined;
    }
    equals(other) {
        if (!(other instanceof DatabaseSelection)) {
            return false;
        }
        return this.blockId === other.blockId;
    }
    toJSON() {
        return {
            type: 'database',
            blockId: this.blockId,
            viewSelection: this.viewSelection,
        };
    }
    static fromJSON(json) {
        DatabaseSelectionSchema.parse(json);
        return new DatabaseSelection({
            blockId: json.blockId,
            viewSelection: json.viewSelection,
        });
    }
}
//# sourceMappingURL=selection.js.map