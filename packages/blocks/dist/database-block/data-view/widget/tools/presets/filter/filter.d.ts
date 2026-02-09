import '../../../filter/filter-group.js';
import { nothing } from 'lit';
import { WidgetBase } from '../../../widget-base.js';
export declare class DataViewHeaderToolsFilter extends WidgetBase {
    private get readonly();
    private get _filter();
    private set _filter(value);
    static styles: import("lit").CSSResult;
    private addFilter;
    connectedCallback(): void;
    showToolBar(show: boolean): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-filter': DataViewHeaderToolsFilter;
    }
}
//# sourceMappingURL=filter.d.ts.map