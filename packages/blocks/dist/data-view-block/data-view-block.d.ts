/// <reference types="@blocksuite/global" />
import { Slot } from '@blocksuite/store';
import { BlockComponent } from '../_common/components/index.js';
import type { DataSource } from '../database-block/data-view/common/data-source/base.js';
import { type DataViewProps, type DataViewSelection, type DataViewWidget, type ViewSource } from '../database-block/data-view/index.js';
import { type AffineInnerModalWidget } from '../root-block/index.js';
import type { DataViewBlockModel } from './data-view-model.js';
export declare class DataViewBlockComponent extends BlockComponent<DataViewBlockModel> {
    get topContenteditableElement(): import("@blocksuite/block-std").BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null;
    get view(): import("../database-block/data-view/index.js").DataViewExpose | undefined;
    get dataSource(): DataSource;
    get viewSource(): ViewSource;
    get getFlag(): <Key extends keyof BlockSuiteFlags>(field: Key) => BlockSuiteFlags[Key] | undefined;
    get innerModalWidget(): AffineInnerModalWidget;
    static styles: import("lit").CSSResult;
    private dataView;
    private _dataSource?;
    private _viewSource?;
    toolsWidget: DataViewWidget;
    headerWidget: DataViewWidget;
    selectionUpdated: Slot<DataViewSelection | undefined>;
    private _clickDatabaseOps;
    private renderDatabaseOps;
    connectedCallback(): void;
    setSelection: (selection: DataViewSelection | undefined) => void;
    _bindHotkey: DataViewProps['bindHotkey'];
    _handleEvent: DataViewProps['handleEvent'];
    getRootService: () => import("../root-block/index.js").PageRootService | import("../root-block/index.js").EdgelessRootService;
    renderBlock(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view': DataViewBlockComponent;
    }
}
//# sourceMappingURL=data-view-block.d.ts.map