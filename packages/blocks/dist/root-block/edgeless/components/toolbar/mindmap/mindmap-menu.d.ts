import { LitElement, type TemplateResult } from 'lit';
import type { MindmapStyle } from '../../../../../surface-block/index.js';
import { EdgelessDraggableElementController } from '../common/draggable/draggable-element.controller.js';
import { type ToolbarMindmapItem } from './assets.js';
import { textRender } from './basket-elements.js';
type TextItem = {
    type: 'text';
    icon: TemplateResult;
    render: typeof textRender;
};
declare const EdgelessMindmapMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessMindmapMenu extends EdgelessMindmapMenu_base {
    get mindMaps(): ToolbarMindmapItem[];
    static styles: import("lit").CSSResult;
    type: "mindmap";
    draggableController: EdgelessDraggableElementController<ToolbarMindmapItem | TextItem>;
    accessor activeStyle: MindmapStyle;
    accessor onActiveStyleChange: (style: MindmapStyle) => void;
    initDragController(): void;
    updated(changedProperties: Map<PropertyKey, unknown>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-mindmap-menu': EdgelessMindmapMenu;
    }
}
export {};
//# sourceMappingURL=mindmap-menu.d.ts.map