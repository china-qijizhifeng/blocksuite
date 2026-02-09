import '../../../utils/tags/multi-tag-select.js';
import '../../../utils/tags/multi-tag-view.js';
import { type SelectTag } from '../../../utils/tags/multi-tag-select.js';
import { BaseCellRenderer } from '../../base-cell.js';
import type { SelectColumnData } from '../../types.js';
export declare class MultiSelectCell extends BaseCellRenderer<string[], SelectColumnData> {
    render(): import("lit").TemplateResult;
}
export declare class MultiSelectCellEditing extends BaseCellRenderer<string[], SelectColumnData> {
    get _options(): SelectTag[];
    get _value(): string[];
    private popTagSelect;
    _onChange: (ids: string[]) => void;
    _editComplete: () => void;
    _onOptionsChange: (options: SelectTag[]) => void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult;
}
export declare const multiSelectColumnConfig: import("../../column-config.js").ColumnMeta<"multi-select", string[], SelectColumnData>;
//# sourceMappingURL=cell-renderer.d.ts.map