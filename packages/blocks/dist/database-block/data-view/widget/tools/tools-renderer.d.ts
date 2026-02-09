import './presets/search/search.js';
import './presets/filter/filter.js';
import './presets/view-options/view-options.js';
import './presets/table-add-row/add-row.js';
import type { ViewSource } from '../../common/index.js';
import type { DataViewExpose } from '../../view/data-view.js';
import type { DataViewManager } from '../../view/data-view-manager.js';
import type { DataViewWidget } from '../types.js';
import { WidgetBase } from '../widget-base.js';
export declare class DataViewHeaderTools extends WidgetBase {
    static styles: import("lit").CSSResult;
    accessor toolsMap: Record<string, DataViewWidget[]>;
    accessor showToolBar: boolean;
    render(): import("lit").TemplateResult<1> | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools': DataViewHeaderTools;
    }
}
export declare const renderTools: (view: DataViewManager, viewMethods: DataViewExpose, viewSource: ViewSource) => import("lit").TemplateResult<1>;
//# sourceMappingURL=tools-renderer.d.ts.map