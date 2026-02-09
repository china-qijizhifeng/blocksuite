import { ShadowlessElement } from '@blocksuite/block-std';
import type { PropertyValues } from 'lit';
import { type MenuOptions } from '../../../../_common/components/index.js';
import { DataViewKanbanManager } from '../../view/presets/kanban/kanban-view-manager.js';
import { DataViewTableManager } from '../../view/presets/table/table-view-manager.js';
declare const GroupSetting_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class GroupSetting extends GroupSetting_base {
    static styles: import("lit").CSSResult;
    accessor view: DataViewTableManager | DataViewKanbanManager;
    accessor groupContainer: HTMLElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): unknown;
    connectedCallback(): void;
}
export declare const selectGroupByProperty: (view: DataViewTableManager | DataViewKanbanManager, onClose?: () => void) => MenuOptions;
export declare const popSelectGroupByProperty: (target: HTMLElement, view: DataViewTableManager | DataViewKanbanManager, onClose?: () => void) => void;
export declare const popGroupSetting: (target: HTMLElement, view: DataViewTableManager | DataViewKanbanManager, onBack: () => void) => void;
export {};
//# sourceMappingURL=setting.d.ts.map