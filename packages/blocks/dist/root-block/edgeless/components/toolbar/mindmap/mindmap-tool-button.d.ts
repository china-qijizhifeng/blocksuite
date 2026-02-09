import './mindmap-menu.js';
import { LitElement } from 'lit';
import { MindmapStyle } from '../../../../../surface-block/index.js';
import type { EdgelessTool } from '../../../types.js';
import { EdgelessDraggableElementController } from '../common/draggable/draggable-element.controller.js';
import { type DraggableTool } from './basket-elements.js';
declare const EdgelessMindmapToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessMindmapToolButton extends EdgelessMindmapToolButton_base {
    get mindmaps(): import("./assets.js").ToolbarMindmapItem[];
    get draggableTools(): DraggableTool[];
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'][];
    enableActiveBackground: boolean;
    draggableController: EdgelessDraggableElementController<DraggableTool>;
    accessor enableBlur: boolean;
    accessor activeStyle: MindmapStyle;
    accessor readyToDrop: boolean;
    accessor mindmapElement: HTMLElement;
    private _toggleMenu;
    initDragController(): void;
    updated(_changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-mindmap-tool-button': EdgelessMindmapToolButton;
    }
}
export {};
//# sourceMappingURL=mindmap-tool-button.d.ts.map