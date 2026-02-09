import '../../edgeless/components/buttons/menu-button.js';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { MindmapElementModel } from '../../../surface-block/element-model/mindmap.js';
import type { ShapeElementModel } from '../../../surface-block/element-model/shape.js';
import { LayoutType } from '../../../surface-block/element-model/utils/mindmap/layout.js';
import { MindmapStyle } from '../../../surface-block/element-model/utils/mindmap/style.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
interface LayoutItem {
    name: string;
    value: LayoutType;
    icon: TemplateResult<1>;
}
declare class EdgelessChangeMindmapStylePanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor mindmapStyle: MindmapStyle | null;
    accessor onSelect: (style: MindmapStyle) => void;
    render(): unknown;
}
declare class EdgelessChangeMindmapLayoutPanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor mindmapLayout: LayoutType | null;
    accessor onSelect: (style: LayoutType) => void;
    render(): unknown;
}
declare const EdgelessChangeMindmapButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeMindmapButton extends EdgelessChangeMindmapButton_base {
    accessor elements: MindmapElementModel[];
    accessor nodes: ShapeElementModel[];
    accessor edgeless: EdgelessRootBlockComponent;
    accessor layoutType: LayoutType;
    get layout(): LayoutItem;
    private _getCommonStyle;
    private _getCommonLayoutType;
    private _updateStyle;
    private _updateLayoutType;
    private get _mindmaps();
    private _isSubnode;
    render(): TemplateResult<1>;
}
export declare function renderMindmapButton(edgeless: EdgelessRootBlockComponent, elements?: (ShapeElementModel | MindmapElementModel)[]): TemplateResult<1> | typeof nothing;
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-mindmap-style-panel': EdgelessChangeMindmapStylePanel;
        'edgeless-change-mindmap-layout-panel': EdgelessChangeMindmapLayoutPanel;
        'edgeless-change-mindmap-button': EdgelessChangeMindmapButton;
    }
}
export {};
//# sourceMappingURL=change-mindmap-button.d.ts.map