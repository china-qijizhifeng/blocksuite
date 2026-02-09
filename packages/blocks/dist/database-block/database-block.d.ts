/// <reference types="@blocksuite/global" />
import './components/title/index.js';
import { Slot } from '@blocksuite/global/utils';
import { BlockComponent, DragIndicator } from '../_common/components/index.js';
import type { AffineInnerModalWidget } from '../root-block/index.js';
import { DatabaseBlockDataSource } from './data-source.js';
import { type DataViewExpose, type DataViewProps, type DataViewSelection, type DataViewWidget, type ViewSource } from './data-view/index.js';
import type { DatabaseBlockModel } from './database-model.js';
import type { DatabaseBlockService } from './database-service.js';
export declare class DatabaseBlockComponent extends BlockComponent<DatabaseBlockModel, DatabaseBlockService> {
    get topContenteditableElement(): import("@blocksuite/block-std").BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null;
    get view(): DataViewExpose | undefined;
    get dataSource(): DatabaseBlockDataSource;
    get viewSource(): ViewSource;
    get getFlag(): <Key extends keyof BlockSuiteFlags>(field: Key) => BlockSuiteFlags[Key] | undefined;
    get innerModalWidget(): AffineInnerModalWidget;
    static styles: import("lit").CSSResult;
    private dataView;
    private _dataSource?;
    private _viewSource?;
    indicator: DragIndicator;
    toolsWidget: DataViewWidget;
    headerWidget: DataViewWidget;
    selectionUpdated: Slot<DataViewSelection | undefined>;
    private _clickDatabaseOps;
    private renderDatabaseOps;
    private renderTitle;
    onDrag: (evt: MouseEvent, id: string) => (() => void);
    connectedCallback(): void;
    setSelection: (selection: DataViewSelection | undefined) => void;
    _bindHotkey: DataViewProps['bindHotkey'];
    _handleEvent: DataViewProps['handleEvent'];
    getRootService: () => import("../root-block/index.js").PageRootService | import("../root-block/index.js").EdgelessRootService;
    renderBlock(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database': DatabaseBlockComponent;
    }
}
//# sourceMappingURL=database-block.d.ts.map