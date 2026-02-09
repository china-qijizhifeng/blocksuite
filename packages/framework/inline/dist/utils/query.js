import { assertExists } from '@blocksuite/global/utils';
import { INLINE_ROOT_ATTR } from '../consts.js';
export function getInlineEditorInsideRoot(element) {
    const rootElement = element.closest(`[${INLINE_ROOT_ATTR}]`);
    assertExists(rootElement, 'element must be inside a v-root');
    const inlineEditor = rootElement.inlineEditor;
    assertExists(inlineEditor, 'element must be inside a v-root with inline-editor');
    return inlineEditor;
}
//# sourceMappingURL=query.js.map