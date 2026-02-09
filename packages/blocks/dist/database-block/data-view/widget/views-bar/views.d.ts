import '../../common/component/overflow/overflow.js';
import { WidgetBase } from '../widget-base.js';
export declare class DataViewHeaderViews extends WidgetBase {
    get readonly(): boolean;
    static styles: import("lit").CSSResult;
    private getRenderer;
    _addViewMenu: (event: MouseEvent) => void;
    _showMore: (event: MouseEvent) => void;
    openViewOption: (target: HTMLElement, id: string) => void;
    _clickView(event: MouseEvent, id: string): void;
    connectedCallback(): void;
    renderMore: (count: number) => import("lit").TemplateResult<1> | undefined;
    renderViews: () => (() => import("lit").TemplateResult<1>)[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-views': DataViewHeaderViews;
    }
}
//# sourceMappingURL=views.d.ts.map