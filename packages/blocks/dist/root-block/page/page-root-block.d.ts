import { BlockElement } from '@blocksuite/block-std';
import type { Text } from '@blocksuite/store';
import { type Viewport } from '../../_common/utils/index.js';
import { PageClipboard } from '../clipboard/index.js';
import type { PageRootBlockWidgetName } from '../index.js';
import { PageKeyboardManager } from '../keyboard/keyboard-manager.js';
import type { RootBlockModel } from '../root-model.js';
import type { PageRootService } from './page-root-service.js';
export declare class PageRootBlockComponent extends BlockElement<RootBlockModel, PageRootService, PageRootBlockWidgetName> {
    get slots(): {
        docLinkClicked: import("@blocksuite/store").Slot<{
            docId: string;
            blockId?: string | undefined;
        }>;
        tagClicked: import("@blocksuite/store").Slot<{
            tagId: string;
        }>;
        viewportUpdated: import("@blocksuite/store").Slot<Viewport>;
    };
    get rootScrollContainer(): HTMLElement;
    get viewportElement(): HTMLDivElement | null;
    get viewport(): Viewport | null;
    static styles: import("lit").CSSResult;
    private _viewportElement;
    keyboardManager: PageKeyboardManager | null;
    clipboardController: PageClipboard;
    accessor rootElementContainer: HTMLDivElement;
    private _createDefaultNoteBlock;
    private _getDefaultNoteBlock;
    private _initViewportResizeEffect;
    prependParagraphWithText: (text: Text) => void;
    focusFirstParagraph: () => void;
    firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-page-root': PageRootBlockComponent;
    }
}
//# sourceMappingURL=page-root-block.d.ts.map