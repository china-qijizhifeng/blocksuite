import '../../buttons/toolbar-button.js';
import './shape-menu.js';
import './shape-draggable.js';
import { LitElement } from 'lit';
import type { LastProps } from '../../../../../surface-block/managers/edit-session.js';
declare const EdgelessShapeToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessShapeToolButton extends EdgelessShapeToolButton_base {
    static styles: import("lit").CSSResult;
    type: "shape";
    accessor states: Partial<LastProps['shape']>;
    get stateKeys(): (("radius" | "shapeType" | "filled" | "fillColor" | "strokeColor" | "shapeStyle") | ("fontSize" | "color" | "fontFamily" | "fontStyle" | "fontWeight" | "textAlign" | "strokeWidth" | "strokeStyle" | "roughness" | "textHorizontalAlign" | "textVerticalAlign"))[];
    private _toggleMenu;
    private _updateOverlay;
    private _handleShapeClick;
    updateMenu(): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-tool-button': EdgelessShapeToolButton;
    }
}
export {};
//# sourceMappingURL=shape-tool-button.d.ts.map