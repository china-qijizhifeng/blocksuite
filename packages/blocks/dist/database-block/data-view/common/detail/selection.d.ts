import type { KanbanCard } from '../../view/presets/kanban/card.js';
import type { KanbanCardSelection } from '../../view/presets/kanban/types.js';
import type { RecordDetail } from './detail.js';
import { RecordField } from './field.js';
type DetailViewSelection = {
    propertyId: string;
    isEditing: boolean;
};
export declare class DetailSelection {
    private viewEle;
    _selection?: DetailViewSelection;
    constructor(viewEle: RecordDetail);
    get selection(): DetailViewSelection | undefined;
    set selection(selection: DetailViewSelection | undefined);
    onSelect: (selection?: DetailViewSelection) => void;
    blur(selection: DetailViewSelection): void;
    focus(selection: DetailViewSelection): void;
    getSelectCard(selection: KanbanCardSelection): KanbanCard | undefined;
    getFocusCellContainer(selection: DetailViewSelection): RecordField | undefined;
    focusUp(): void;
    focusDown(): void;
    deleteProperty(): void;
    focusFirstCell(): void;
}
export {};
//# sourceMappingURL=selection.d.ts.map