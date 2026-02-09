import type { EditorHost } from '@blocksuite/block-std';
import type { InlineRange } from '@blocksuite/inline';
import type { BlockModel } from '@blocksuite/store';
import type { SelectionPosition } from '../types.js';
declare global {
    interface Document {
        caretPositionFromPoint(x: number, y: number): {
            offsetNode: Node;
            offset: number;
        };
    }
}
export declare function asyncSetInlineRange(editorHost: EditorHost, model: BlockModel, inlineRange: InlineRange): Promise<void>;
export declare function asyncFocusRichText(editorHost: EditorHost, id: string, inlineRange?: InlineRange): Promise<void> | undefined;
/**
 * A wrapper for the browser's `caretPositionFromPoint` and `caretRangeFromPoint`,
 * but adapted for different browsers.
 */
export declare function caretRangeFromPoint(clientX: number, clientY: number): Range | null;
/**
 * As the title is a text area, this function does not yet have support for `SelectionPosition`.
 */
export declare function focusTitle(editorHost: EditorHost, index?: number, len?: number): void;
/**
 * @deprecated Use `selectionManager.set` instead.
 */
export declare function focusBlockByModel(editorHost: EditorHost, model: BlockModel, position?: SelectionPosition, zoom?: number): void;
export declare function resetNativeSelection(range: Range | null): void;
/**
 * Return true if has native selection in the document.
 *
 * @example
 * ```ts
 * const isNativeSelection = hasNativeSelection();
 * if (isNativeSelection) {
 *   // do something
 * }
 * ```
 */
export declare function hasNativeSelection(): boolean;
export declare function getCurrentNativeRange(selection?: Selection | null): Range | null;
export declare function handleNativeRangeAtPoint(x: number, y: number): void;
//# sourceMappingURL=selection.d.ts.map