import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewCellLifeCycle } from '../../column/index.js';
import type { DataViewColumnManager, DataViewManager } from '../../view/data-view-manager.js';
declare const RecordField_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class RecordField extends RecordField_base {
    private get readonly();
    get cell(): DataViewCellLifeCycle | undefined;
    static styles: import("lit").CSSResult;
    private _cell;
    accessor view: DataViewManager;
    accessor column: DataViewColumnManager;
    accessor rowId: string;
    accessor isFocus: boolean;
    accessor editing: boolean;
    changeEditing: (editing: boolean) => void;
    _click: (e: MouseEvent) => void;
    _clickLeft: (e: MouseEvent) => void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-record-field': RecordField;
    }
}
export {};
//# sourceMappingURL=field.d.ts.map