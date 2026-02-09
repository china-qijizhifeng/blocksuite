import type { BlockStdScope, EventName, UIEventHandler } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { Disposable, Slot } from '@blocksuite/global/utils';
import type { Doc } from '@blocksuite/store';
import type { DataSource } from '../common/data-source/base.js';
import type { ViewSource } from '../common/index.js';
import type { DataViewRenderer } from '../data-view.js';
import type { DataViewSelection, InsertToPosition } from '../types.js';
import type { DataViewWidget } from '../widget/types.js';
import type { DataViewExpose, DataViewProps } from './data-view.js';
import type { DataViewManager } from './data-view-manager.js';
declare const DataViewBase_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare abstract class DataViewBase<T extends DataViewManager = DataViewManager, Selection extends DataViewSelection = DataViewSelection> extends DataViewBase_base implements DataViewProps<T, Selection>, DataViewExpose {
    accessor std: BlockStdScope;
    accessor headerWidget: DataViewWidget;
    accessor dataViewEle: DataViewRenderer;
    accessor view: T;
    accessor viewSource: ViewSource;
    accessor dataSource: DataSource;
    accessor bindHotkey: (hotkeys: Record<string, UIEventHandler>) => Disposable;
    accessor handleEvent: (name: EventName, handler: UIEventHandler) => Disposable;
    accessor modalMode: boolean | undefined;
    accessor setSelection: (selection?: Selection) => void;
    accessor selectionUpdated: Slot<Selection | undefined>;
    accessor onDrag: ((evt: MouseEvent, id: string) => () => void) | undefined;
    accessor getFlag: Doc['awarenessStore']['getFlag'];
    addRow?(position: InsertToPosition): void;
    abstract focusFirstCell(): void;
    abstract getSelection(): Selection | undefined;
}
export {};
//# sourceMappingURL=data-view-base.d.ts.map