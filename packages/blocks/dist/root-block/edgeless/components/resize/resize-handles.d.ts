import { nothing } from 'lit';
import type { IVec } from '../../../../surface-block/index.js';
export declare enum HandleDirection {
    Left = "left",
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    TopLeft = "top-left",
    BottomLeft = "bottom-left",
    TopRight = "top-right",
    BottomRight = "bottom-right"
}
/**
 * Indicate how selected elements can be resized.
 *
 * - edge: The selected elements can only be resized dragging edge, usually when note element is selected
 * - all: The selected elements can be resize both dragging edge or corner, usually when all elements are `shape`
 * - none: The selected elements can't be resized, usually when all elements are `connector`
 * - corner: The selected elements can only be resize dragging corner, this is by default mode
 * - edgeAndCorner: The selected elements can be resize both dragging left right edge or corner, usually when all elements are 'text'
 */
export type ResizeMode = 'edge' | 'all' | 'none' | 'corner' | 'edgeAndCorner';
export declare function ResizeHandles(resizeMode: ResizeMode, onPointerDown: (e: PointerEvent, direction: HandleDirection) => void, updateCursor?: (dragging: boolean, options?: {
    type: 'resize' | 'rotate';
    target?: HTMLElement;
    point?: IVec;
}) => void): import("lit").TemplateResult<1> | typeof nothing;
//# sourceMappingURL=resize-handles.d.ts.map