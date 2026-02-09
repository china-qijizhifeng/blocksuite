import { LitElement } from 'lit';
import { EdgelessDraggableElementController } from '../common/draggable/draggable-element.controller.js';
import type { DraggableShape } from './utils.js';
declare const EdgelessToolbarShapeDraggable_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessToolbarShapeDraggable extends EdgelessToolbarShapeDraggable_base {
    get shapeShadow(): "0 0 7px rgba(0, 0, 0, .22)" | "0 0 5px rgba(0, 0, 0, .2)";
    static styles: import("lit").CSSResult;
    draggableController: EdgelessDraggableElementController<DraggableShape>;
    type: "shape";
    accessor color: string;
    accessor stroke: string;
    accessor onShapeClick: (shape: DraggableShape) => void;
    accessor readyToDrop: boolean;
    accessor shapeContainer: HTMLDivElement;
    draggingShape: DraggableShape['name'];
    private _setShapeOverlayLock;
    initDragController(): void;
    updated(_changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-toolbar-shape-draggable': EdgelessToolbarShapeDraggable;
    }
}
export {};
//# sourceMappingURL=shape-draggable.d.ts.map