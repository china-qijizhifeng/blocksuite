import type { DataViewKanbanManager } from '../../../../view/presets/kanban/kanban-view-manager.js';
import type { DataViewTableManager } from '../../../../view/presets/table/table-view-manager.js';
import { WidgetBase } from '../../../widget-base.js';
export declare class DataViewHeaderToolsViewOptions extends WidgetBase {
    static styles: import("lit").CSSResult;
    accessor view: DataViewTableManager | DataViewKanbanManager;
    showToolBar(show: boolean): void;
    openMoreAction: (target: HTMLElement) => void;
    clickMoreAction: (e: MouseEvent) => void;
    render(): import("lit").TemplateResult<1> | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-view-options': DataViewHeaderToolsViewOptions;
    }
}
export declare const popViewOptions: (target: HTMLElement, view: DataViewTableManager | DataViewKanbanManager, onClose?: () => void) => void;
//# sourceMappingURL=view-options.d.ts.map