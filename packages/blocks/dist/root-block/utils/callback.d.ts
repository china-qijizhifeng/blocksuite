import type { BlockElement, EditorHost } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import type { RichText } from '../../_common/components/rich-text/rich-text.js';
export declare function onModelTextUpdated(editorHost: EditorHost, model: BlockModel, callback?: (text: RichText) => void): Promise<void>;
export declare function onModelElementUpdated(editorHost: EditorHost, model: BlockModel, callback: (blockElement: BlockElement) => void): Promise<void>;
//# sourceMappingURL=callback.d.ts.map