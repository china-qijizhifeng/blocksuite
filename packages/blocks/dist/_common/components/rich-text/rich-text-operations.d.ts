import type { EditorHost } from '@blocksuite/block-std';
import { type BlockModel } from '@blocksuite/store';
import type { ExtendedModel } from '../../types.js';
export declare function handleBlockEndEnter(editorHost: EditorHost, model: ExtendedModel): void;
export declare function handleBlockSplit(editorHost: EditorHost, model: ExtendedModel, splitIndex: number, splitLength: number): Promise<void> | undefined;
/**
 * @example
 * before unindent:
 * - aaa
 *   - bbb
 * - ccc|
 *   - ddd
 *   - eee
 *
 * after unindent:
 * - aaa
 *   - bbb
 *   - ccc|
 *     - ddd
 *     - eee
 */
export declare function handleIndent(editorHost: EditorHost, model: ExtendedModel, offset?: number): void;
export declare function handleMultiBlockIndent(editorHost: EditorHost, models: BlockModel[]): void;
/**
 * @example
 * before unindent:
 * - aaa
 *   - bbb
 *   - ccc|
 *     - ddd
 *   - eee
 *
 * after unindent:
 * - aaa
 *   - bbb
 * - ccc|
 *   - ddd
 *   - eee
 */
export declare function handleUnindent(editorHost: EditorHost, model: ExtendedModel, offset?: number): void;
export declare function handleMultiBlockOutdent(editorHost: EditorHost, models: BlockModel[]): void;
export declare function handleRemoveAllIndent(editorHost: EditorHost, model: ExtendedModel, offset?: number): void;
export declare function handleRemoveAllIndentForMultiBlocks(editorHost: EditorHost, models: BlockModel[]): void;
export declare function handleLineStartBackspace(editorHost: EditorHost, model: ExtendedModel): void;
export declare function handleLineEndForwardDelete(editorHost: EditorHost, model: ExtendedModel): void;
//# sourceMappingURL=rich-text-operations.d.ts.map