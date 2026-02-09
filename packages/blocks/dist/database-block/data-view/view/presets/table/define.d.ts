import type { FilterGroup } from '../../../common/ast.js';
import type { GroupBy, GroupProperty, Sort } from '../../../common/types.js';
import { type BasicViewDataType } from '../../data-view.js';
import type { StatCalcOpType } from './types.js';
export declare const tableViewType: {
    type: "table";
    modelConfig: <Data extends BasicViewDataType<"table", DataType> | BasicViewDataType<"kanban", {
        columns: import("../kanban/define.js").KanbanViewColumn[];
        filter: FilterGroup;
        groupBy?: GroupBy | undefined;
        sort?: Sort | undefined;
        header: {
            titleColumn?: string | undefined;
            iconColumn?: string | undefined;
            coverColumn?: string | undefined;
        };
        groupProperties: GroupProperty[];
    }>>(model: import("../../data-view.js").DataViewConfig<Data>) => {
        type: "table";
        model: import("../../data-view.js").DataViewConfig<Data>;
        rendererConfig: (renderer: import("../../data-view.js").DataViewRendererConfig) => {
            type: "table";
            model: import("../../data-view.js").DataViewConfig<Data>;
            renderer: import("../../data-view.js").DataViewRendererConfig;
        };
    };
};
declare global {
    interface DataViewDataTypeMap {
        table: DataType;
    }
}
export type TableViewColumn = {
    id: string;
    width: number;
    statCalcType?: StatCalcOpType;
    hide?: boolean;
};
type DataType = {
    columns: TableViewColumn[];
    filter: FilterGroup;
    groupBy?: GroupBy;
    groupProperties?: GroupProperty[];
    sort?: Sort;
    header?: {
        titleColumn?: string;
        iconColumn?: string;
        imageColumn?: string;
    };
};
export type TableViewData = BasicViewDataType<typeof tableViewType.type, DataType>;
export declare const tableViewModel: {
    type: "table";
    model: import("../../data-view.js").DataViewConfig<TableViewData>;
    rendererConfig: (renderer: import("../../data-view.js").DataViewRendererConfig) => {
        type: "table";
        model: import("../../data-view.js").DataViewConfig<TableViewData>;
        renderer: import("../../data-view.js").DataViewRendererConfig;
    };
};
export {};
//# sourceMappingURL=define.d.ts.map