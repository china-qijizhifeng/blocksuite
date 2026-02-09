import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewColumnManager, DataViewManager } from '../view/data-view-manager.js';
import type { CellRenderProps, DataViewCellLifeCycle } from './manager.js';
declare const BaseCellRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare abstract class BaseCellRenderer<Value, Data extends Record<string, unknown> = Record<string, unknown>> extends BaseCellRenderer_base implements DataViewCellLifeCycle, CellRenderProps<Data, Value> {
    accessor view: DataViewManager;
    accessor column: DataViewColumnManager<Value, Data>;
    accessor rowId: string;
    accessor isEditing: boolean;
    accessor selectCurrentCell: (editing: boolean) => void;
    get readonly(): boolean;
    get value(): Value | undefined;
    onChange(value: Value | undefined): void;
    beforeEnterEditMode(): boolean;
    onEnterEditMode(): void;
    onExitEditMode(): void;
    focusCell(): boolean;
    blurCell(): boolean;
    connectedCallback(): void;
    forceUpdate(): void;
    onCopy(_e: ClipboardEvent): void;
    onCut(_e: ClipboardEvent): void;
    onPaste(_e: ClipboardEvent): void;
}
export {};
//# sourceMappingURL=base-cell.d.ts.map