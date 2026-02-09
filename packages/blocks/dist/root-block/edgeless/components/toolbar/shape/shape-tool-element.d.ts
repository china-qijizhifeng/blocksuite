import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
import type { ShapeType } from '../../../../../surface-block/elements/shape/consts.js';
import type { ShapeStyle } from '../../../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
export type ShapeName = ShapeType | 'roundedRect';
export interface Shape {
    name: ShapeName;
    svg: TemplateResult<1>;
}
declare const EdgelessShapeToolElement_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessShapeToolElement extends EdgelessShapeToolElement_base {
    static styles: import("lit").CSSResult;
    private accessor _shapeElement;
    private accessor _backupShapeElement;
    private _transformMap;
    private accessor _startCoord;
    private accessor _dragging;
    private accessor _isOutside;
    accessor shape: Shape;
    accessor order: number;
    accessor getContainerRect: () => DOMRect;
    accessor handleClick: () => void;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor shapeType: ShapeName;
    accessor shapeStyle: ShapeStyle;
    accessor radius: number;
    private _onDragStart;
    private _onDragMove;
    private _onDragEnd;
    private _onMouseMove;
    private _touchMove;
    private _onMouseUp;
    private _onTouchEnd;
    private _addShape;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-tool-element': EdgelessShapeToolElement;
    }
}
export {};
//# sourceMappingURL=shape-tool-element.d.ts.map