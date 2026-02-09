import '../buttons/tool-icon-button.js';
import { LitElement } from 'lit';
type SizeItem = {
    name?: string;
    value: number;
};
export declare class EdgelessSizePanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor size: number;
    accessor sizeList: SizeItem[];
    accessor onSelect: ((size: number) => void) | undefined;
    accessor onPopperCose: (() => void) | undefined;
    accessor minSize: number;
    accessor maxSize: number;
    accessor type: 'normal' | 'check';
    private _onSelect;
    private _onPopperClose;
    private _onKeydown;
    renderItem(): ({ name, value }: SizeItem) => import("lit").TemplateResult<1>;
    renderItemWithNormal: ({ name, value }: SizeItem) => import("lit").TemplateResult<1>;
    renderItemWithCheck: ({ name, value }: SizeItem) => import("lit").TemplateResult<1>;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-size-panel': EdgelessSizePanel;
    }
}
export {};
//# sourceMappingURL=size-panel.d.ts.map