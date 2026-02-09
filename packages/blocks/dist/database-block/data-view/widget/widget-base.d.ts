import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataSource } from '../common/data-source/base.js';
import type { ViewSource } from '../common/index.js';
import type { DataViewExpose } from '../view/data-view.js';
import type { DataViewManager } from '../view/data-view-manager.js';
import type { DataViewWidgetProps } from './types.js';
declare const WidgetBase_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class WidgetBase extends WidgetBase_base implements DataViewWidgetProps {
    accessor view: DataViewManager;
    accessor viewMethods: DataViewExpose;
    accessor viewSource: ViewSource;
    accessor dataSource: DataSource;
}
export {};
//# sourceMappingURL=widget-base.d.ts.map