import './cell.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewRenderer } from '../../../data-view.js';
import type { DataViewKanbanManager } from './kanban-view-manager.js';
declare const KanbanCard_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class KanbanCard extends KanbanCard_base {
    static styles: import("lit").CSSResult;
    accessor dataViewEle: DataViewRenderer;
    accessor view: DataViewKanbanManager;
    accessor groupKey: string;
    accessor cardId: string;
    accessor isFocus: boolean;
    private renderTitle;
    private renderIcon;
    private renderHeader;
    private renderBody;
    private renderOps;
    private clickEdit;
    private getSelection;
    private clickMore;
    private contextMenu;
    connectedCallback(): void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-card': KanbanCard;
    }
}
export {};
//# sourceMappingURL=card.d.ts.map