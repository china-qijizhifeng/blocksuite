import type { EditorHost } from '@blocksuite/block-std';
import { WidgetElement } from '@blocksuite/block-std';
import type { AffineInlineEditor } from '../../../_common/inline/presets/affine-inline-specs.js';
import { type LinkedDocOptions } from './config.js';
import { LinkedDocPopover } from './linked-doc-popover.js';
export declare function showLinkedDocPopover({ editorHost, inlineEditor, range, container, abortController, options, triggerKey, }: {
    editorHost: EditorHost;
    inlineEditor: AffineInlineEditor;
    range: Range;
    container?: HTMLElement;
    abortController?: AbortController;
    options: LinkedDocOptions;
    triggerKey: string;
}): LinkedDocPopover;
export declare const AFFINE_LINKED_DOC_WIDGET = "affine-linked-doc-widget";
export declare class AffineLinkedDocWidget extends WidgetElement {
    static DEFAULT_OPTIONS: LinkedDocOptions;
    options: LinkedDocOptions;
    private getInlineEditor;
    private _onKeyDown;
    connectedCallback(): void;
    showLinkedDoc: (inlineEditor: AffineInlineEditor, triggerKey: string) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_LINKED_DOC_WIDGET]: AffineLinkedDocWidget;
    }
}
//# sourceMappingURL=index.d.ts.map