import type { ViewMeta } from './data-view/index.js';
import type { DatabaseBlockModel } from './database-model.js';
export declare const databaseViewInitEmpty: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
export declare const databaseViewInitConvert: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
export declare const databaseViewInitTemplate: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
export declare const databaseViewAddView: (model: DatabaseBlockModel, viewMeta: ViewMeta) => import("./data-view/view/data-view.js").BasicViewDataType<"table", {
    columns: import("./data-view/view/presets/table/define.js").TableViewColumn[];
    filter: import("./data-view/common/ast.js").FilterGroup;
    groupBy?: import("./data-view/common/types.js").GroupBy | undefined;
    groupProperties?: import("./data-view/common/types.js").GroupProperty[] | undefined;
    sort?: import("./data-view/common/types.js").Sort | undefined;
    header?: {
        titleColumn?: string | undefined;
        iconColumn?: string | undefined;
        imageColumn?: string | undefined;
    } | undefined;
}> | import("./data-view/view/data-view.js").BasicViewDataType<"kanban", {
    columns: import("./data-view/view/presets/kanban/define.js").KanbanViewColumn[];
    filter: import("./data-view/common/ast.js").FilterGroup;
    groupBy?: import("./data-view/common/types.js").GroupBy | undefined;
    sort?: import("./data-view/common/types.js").Sort | undefined;
    header: {
        titleColumn?: string | undefined;
        iconColumn?: string | undefined;
        coverColumn?: string | undefined;
    };
    groupProperties: import("./data-view/common/types.js").GroupProperty[];
}>;
//# sourceMappingURL=utils.d.ts.map