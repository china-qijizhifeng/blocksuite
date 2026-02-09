import './card.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { GroupData } from '../../../common/group-by/helper.js';
import type { DataViewRenderer } from '../../../data-view.js';
import type { DataViewKanbanManager } from './kanban-view-manager.js';
declare const KanbanGroup_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class KanbanGroup extends KanbanGroup_base {
    static styles: import("lit").CSSResult;
    accessor dataViewEle: DataViewRenderer;
    accessor view: DataViewKanbanManager;
    accessor group: GroupData;
    private clickAddCard;
    private clickAddCardInStart;
    private clickGroupOptions;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-group': KanbanGroup;
    }
}
export {};
//# sourceMappingURL=group.d.ts.map