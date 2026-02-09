import type { EditorHost } from '@blocksuite/block-std';
import { type InlineRange } from '@blocksuite/inline';
import type { BlockModel } from '@blocksuite/store';
import type { AffineInlineEditor } from '../../../inline/presets/affine-inline-specs.js';
export declare function onSoftEnter(inlineRange: InlineRange, inlineEditor: AffineInlineEditor): boolean;
export declare function hardEnter(editorHost: EditorHost, model: BlockModel, range: InlineRange, 
/**
 * @deprecated
 */
inlineEditor: AffineInlineEditor, e: KeyboardEvent, shortKey?: boolean): boolean;
export declare function onBackspace(editorHost: EditorHost, model: BlockModel, e: KeyboardEvent, inlineEditor: AffineInlineEditor): boolean;
export declare function onForwardDelete(editorHost: EditorHost, model: BlockModel, e: KeyboardEvent, inlineEditor: AffineInlineEditor): boolean;
//# sourceMappingURL=legacy.d.ts.map