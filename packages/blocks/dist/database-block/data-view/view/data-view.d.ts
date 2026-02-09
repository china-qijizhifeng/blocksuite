import type { BlockStdScope, EventName, UIEventHandler } from '@blocksuite/block-std';
import type { Disposable, Slot } from '@blocksuite/global/utils';
import type { Doc } from '@blocksuite/store';
import type { DataSource } from '../common/data-source/base.js';
import type { ViewSource } from '../common/index.js';
import type { DataViewRenderer } from '../data-view.js';
import type { DataViewSelection, InsertToPosition } from '../types.js';
import type { UniComponent } from '../utils/uni-component/index.js';
import type { DataViewWidget } from '../widget/types.js';
import type { DataViewManagerBase } from './data-view-manager.js';
import type { DataViewManager } from './data-view-manager.js';
export interface DataViewProps<T extends DataViewManager = DataViewManager, Selection extends DataViewSelection = DataViewSelection> {
    dataViewEle: DataViewRenderer;
    headerWidget?: DataViewWidget;
    view: T;
    viewSource: ViewSource;
    dataSource: DataSource;
    bindHotkey: (hotkeys: Record<string, UIEventHandler>) => Disposable;
    handleEvent: (name: EventName, handler: UIEventHandler) => Disposable;
    setSelection: (selection?: Selection) => void;
    selectionUpdated: Slot<Selection | undefined>;
    onDrag?: (evt: MouseEvent, id: string) => () => void;
    getFlag?: Doc['awarenessStore']['getFlag'];
    std: BlockStdScope;
}
export interface DataViewExpose {
    addRow?(position: InsertToPosition | number): void;
    getSelection?(): DataViewSelection | undefined;
    focusFirstCell(): void;
    showIndicator?(evt: MouseEvent): boolean;
    hideIndicator?(): void;
    moveTo?(id: string, evt: MouseEvent): void;
}
declare global {
    export interface DataViewDataTypeMap {
    }
}
export type BasicViewDataType<Type extends string = string, T = NonNullable<unknown>> = {
    id: string;
    name: string;
    mode: Type;
} & T;
export type _DataViewDataTypeMap = {
    [K in keyof DataViewDataTypeMap]: BasicViewDataType<Extract<K, string>, DataViewDataTypeMap[K]>;
};
export type DefaultViewDataType = BasicViewDataType & {
    mode: string;
};
type FallBack<T> = [T] extends [never] ? DefaultViewDataType : T;
export type DataViewDataType = FallBack<_DataViewDataTypeMap[keyof _DataViewDataTypeMap]>;
export type DataViewTypes = keyof DataViewDataTypeMap;
export interface DataViewConfig<Data extends DataViewDataType = DataViewDataType> {
    defaultName: string;
    dataViewManager: new () => DataViewManagerBase<Data>;
}
export interface DataViewRendererConfig {
    view: UniComponent<DataViewProps, DataViewExpose>;
    icon: UniComponent;
}
export type ViewMeta<Type extends string = DataViewTypes, Data extends DataViewDataType = any> = {
    type: Type;
    model: DataViewConfig<Data>;
    renderer: DataViewRendererConfig;
};
export declare const viewType: <Type extends string>(type: Type) => {
    type: Type;
    modelConfig: <Data extends BasicViewDataType<"table", {
        columns: import("./presets/table/define.js").TableViewColumn[];
        filter: import("../common/ast.js").FilterGroup;
        groupBy?: import("../common/types.js").GroupBy | undefined;
        groupProperties?: import("../common/types.js").GroupProperty[] | undefined;
        sort?: import("../common/types.js").Sort | undefined;
        header?: {
            titleColumn?: string | undefined;
            iconColumn?: string | undefined;
            imageColumn?: string | undefined;
        } | undefined;
    }> | BasicViewDataType<"kanban", {
        columns: import("./presets/kanban/define.js").KanbanViewColumn[];
        filter: import("../common/ast.js").FilterGroup;
        groupBy?: import("../common/types.js").GroupBy | undefined;
        sort?: import("../common/types.js").Sort | undefined;
        header: {
            titleColumn?: string | undefined;
            iconColumn?: string | undefined;
            coverColumn?: string | undefined;
        };
        groupProperties: import("../common/types.js").GroupProperty[];
    }>>(model: DataViewConfig<Data>) => {
        type: Type;
        model: DataViewConfig<Data>;
        rendererConfig: (renderer: DataViewRendererConfig) => {
            type: Type;
            model: DataViewConfig<Data>;
            renderer: DataViewRendererConfig;
        };
    };
};
export declare class ViewRendererManager {
    private map;
    getView(type: string): DataViewRendererConfig;
    get all(): DataViewRendererConfig[];
}
export declare const viewRendererManager: ViewRendererManager;
export {};
//# sourceMappingURL=data-view.d.ts.map