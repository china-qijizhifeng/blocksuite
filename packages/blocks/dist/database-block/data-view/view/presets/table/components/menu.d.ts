import type { RootBlockComponent } from '../../../../../../root-block/index.js';
import type { DataViewRenderer } from '../../../../data-view.js';
import type { DataViewColumnManager } from '../../../data-view-manager.js';
import type { TableSelectionController } from '../controller/selection.js';
import { type ColumnDataType, type StatCalcOp } from '../stat-ops.js';
export declare const openDetail: (dataViewEle: DataViewRenderer, rowId: string, selection: TableSelectionController) => void;
export declare const popRowMenu: (dataViewEle: DataViewRenderer, ele: HTMLElement, rowId: string, selection: TableSelectionController) => void;
export declare const popColStatOperationMenu: (_rootElement: RootBlockComponent | null, elem: HTMLElement, _column: DataViewColumnManager, calcType: ColumnDataType, onSelect: (formula: StatCalcOp) => void) => void;
//# sourceMappingURL=menu.d.ts.map