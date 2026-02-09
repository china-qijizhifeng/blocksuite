import { BlockService } from '@blocksuite/block-std';
import type { BlockModel, Doc } from '@blocksuite/store';
import { InlineManager } from '../_common/inline/inline-manager.js';
import { type AffineTextAttributes } from '../_common/inline/presets/affine-inline-specs.js';
import { ReferenceNodeConfig } from '../_common/inline/presets/nodes/reference-node/reference-config.js';
import type { ViewMeta } from './data-view/view/data-view.js';
import type { DatabaseBlockModel } from './database-model.js';
export declare class DatabaseBlockService<TextAttributes extends AffineTextAttributes = AffineTextAttributes> extends BlockService<DatabaseBlockModel> {
    readonly inlineManager: InlineManager<TextAttributes>;
    readonly referenceNodeConfig: ReferenceNodeConfig;
    databaseViewInitEmpty: (model: DatabaseBlockModel, viewMeta: ViewMeta) => void;
    viewPresets: {
        tableViewConfig: {
            type: "table";
            model: import("./data-view/view/data-view.js").DataViewConfig<import("./data-view/view/presets/table/define.js").TableViewData>;
            renderer: import("./data-view/view/data-view.js").DataViewRendererConfig;
        };
        kanbanViewConfig: {
            type: "kanban";
            model: import("./data-view/view/data-view.js").DataViewConfig<import("./data-view/view/presets/kanban/define.js").KanbanViewData>;
            renderer: import("./data-view/view/data-view.js").DataViewRendererConfig;
        };
    };
    mounted(): void;
    initDatabaseBlock(doc: Doc, model: BlockModel, databaseId: string, viewMeta: ViewMeta, isAppendNewRow?: boolean): void;
}
//# sourceMappingURL=database-service.d.ts.map