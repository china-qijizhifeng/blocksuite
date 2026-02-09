import './card.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewKanbanManager } from './kanban-view-manager.js';
declare const KanbanHeader_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class KanbanHeader extends KanbanHeader_base {
    static styles: import("lit").CSSResult;
    accessor view: DataViewKanbanManager;
    private clickGroup;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban-header': KanbanHeader;
    }
}
export {};
//# sourceMappingURL=header.d.ts.map