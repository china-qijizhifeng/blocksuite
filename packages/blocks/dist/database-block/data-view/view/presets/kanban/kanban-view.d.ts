import './group.js';
import './header.js';
import './controller/drag.js';
import '../../../common/group-by/define.js';
import type { GroupHelper } from '../../../common/group-by/helper.js';
import { DataViewBase } from '../../data-view-base.js';
import { KanbanClipboardController } from './controller/clipboard.js';
import { KanbanHotkeysController } from './controller/hotkeys.js';
import { KanbanSelectionController } from './controller/selection.js';
import type { DataViewKanbanManager } from './kanban-view-manager.js';
import type { KanbanViewSelectionWithType } from './types.js';
export declare class DataViewKanban extends DataViewBase<DataViewKanbanManager, KanbanViewSelectionWithType> {
    static styles: import("lit").CSSResult;
    private dragController;
    selectionController: KanbanSelectionController;
    hotkeysController: KanbanHotkeysController;
    clipboardController: KanbanClipboardController;
    accessor groups: HTMLElement;
    groupHelper?: GroupHelper;
    connectedCallback(): void;
    firstUpdated(): void;
    renderAddGroup: () => import("lit").TemplateResult | undefined;
    onWheel: (event: WheelEvent) => void;
    render(): import("lit").TemplateResult;
    focusFirstCell(): void;
    getSelection(): KanbanViewSelectionWithType | undefined;
    hideIndicator(): void;
    moveTo(id: string, evt: MouseEvent): void;
    showIndicator(evt: MouseEvent): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-kanban': DataViewKanban;
    }
}
//# sourceMappingURL=kanban-view.d.ts.map