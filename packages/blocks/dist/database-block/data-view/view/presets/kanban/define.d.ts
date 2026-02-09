import type { FilterGroup } from '../../../common/ast.js';
import type { GroupBy, GroupProperty, Sort } from '../../../common/types.js';
import { type BasicViewDataType } from '../../data-view.js';
export declare const kanbanViewType: {
    type: "kanban";
    modelConfig: <Data extends BasicViewDataType<"table", {
        columns: import("../table/define.js").TableViewColumn[];
        filter: FilterGroup;
        groupBy?: GroupBy | undefined;
        groupProperties?: GroupProperty[] | undefined;
        sort?: Sort | undefined;
        header?: {
            titleColumn?: string | undefined;
            iconColumn?: string | undefined;
            imageColumn?: string | undefined;
        } | undefined;
    }> | BasicViewDataType<"kanban", DataType>>(model: import("../../data-view.js").DataViewConfig<Data>) => {
        type: "kanban";
        model: import("../../data-view.js").DataViewConfig<Data>;
        rendererConfig: (renderer: import("../../data-view.js").DataViewRendererConfig) => {
            type: "kanban";
            model: import("../../data-view.js").DataViewConfig<Data>;
            renderer: import("../../data-view.js").DataViewRendererConfig;
        };
    };
};
declare global {
    interface DataViewDataTypeMap {
        kanban: DataType;
    }
}
export type KanbanViewColumn = {
    id: string;
    hide?: boolean;
};
type DataType = {
    columns: KanbanViewColumn[];
    filter: FilterGroup;
    groupBy?: GroupBy;
    sort?: Sort;
    header: {
        titleColumn?: string;
        iconColumn?: string;
        coverColumn?: string;
    };
    groupProperties: GroupProperty[];
};
export type KanbanViewData = BasicViewDataType<typeof kanbanViewType.type, DataType>;
export declare const kanbanViewModel: {
    type: "kanban";
    model: import("../../data-view.js").DataViewConfig<KanbanViewData>;
    rendererConfig: (renderer: import("../../data-view.js").DataViewRendererConfig) => {
        type: "kanban";
        model: import("../../data-view.js").DataViewConfig<KanbanViewData>;
        renderer: import("../../data-view.js").DataViewRendererConfig;
    };
};
export {};
//# sourceMappingURL=define.d.ts.map