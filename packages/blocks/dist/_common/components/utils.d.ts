import type { EditorHost } from '@blocksuite/block-std';
import type { InlineEditor } from '@blocksuite/inline';
import { BlockModel } from '@blocksuite/store';
import type { AffineInlineEditor } from '../inline/presets/affine-inline-specs.js';
export declare const createKeydownObserver: ({ target, inlineEditor, onUpdateQuery, onMove, onConfirm, onEsc, interceptor, abortController, }: {
    target: HTMLElement;
    inlineEditor: InlineEditor;
    onUpdateQuery: (val: string) => void;
    onMove: (step: 1 | -1) => void;
    onConfirm: () => void;
    onEsc?: () => void;
    interceptor?: (e: KeyboardEvent, next: () => void) => void;
    abortController: AbortController;
}) => void;
/**
 * Remove specified text from the current range.
 */
export declare function cleanSpecifiedTail(editorHost: EditorHost, inlineEditorOrModel: AffineInlineEditor | BlockModel, str: string): void;
/**
 * You should add a container before the scrollbar style to prevent the style pollution of the whole doc.
 */
export declare const scrollbarStyle: (container: string) => import("lit").CSSResult;
//# sourceMappingURL=utils.d.ts.map