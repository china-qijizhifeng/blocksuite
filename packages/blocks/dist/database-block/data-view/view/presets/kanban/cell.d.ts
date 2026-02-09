import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewCellLifeCycle } from '../../../column/index.js';
import type { DataViewKanbanColumnManager, DataViewKanbanManager } from './kanban-view-manager.js';
declare const KanbanCell_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class KanbanCell extends KanbanCell_base {
    get cell(): DataViewCellLifeCycle | undefined;
    get selection(): import("./controller/selection.js").KanbanSelectionController | undefined;
    static styles: import("lit").CSSResult;
    private _cell;
    accessor contentOnly: boolean;
    accessor view: DataViewKanbanManager;
    accessor groupKey: string;
    accessor cardId: string;
    accessor column: DataViewKanbanColumnManager;
    accessor isFocus: boolean;
    accessor editing: boolean;
    connectedCallback(): void;
    selectCurrentCell: (editing: boolean) => void;
    renderIcon(): import("lit").TemplateResult | undefined;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-cell': KanbanCell;
    }
}
export {};
//# sourceMappingURL=cell.d.ts.map