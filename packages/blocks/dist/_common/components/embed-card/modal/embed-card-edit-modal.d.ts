import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { BookmarkBlockModel } from '../../../../bookmark-block/bookmark-model.js';
import type { EmbedFigmaModel } from '../../../../embed-figma-block/embed-figma-model.js';
import type { EmbedGithubModel } from '../../../../embed-github-block/embed-github-model.js';
import type { EmbedLoomModel } from '../../../../embed-loom-block/embed-loom-model.js';
import type { EmbedYoutubeModel } from '../../../../embed-youtube-block/embed-youtube-model.js';
type EmbedCardModel = BookmarkBlockModel | EmbedGithubModel | EmbedYoutubeModel | EmbedFigmaModel | EmbedLoomModel;
declare const EmbedCardEditModal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EmbedCardEditModal extends EmbedCardEditModal_base {
    static styles: import("lit").CSSResult;
    private accessor _titleInputValue;
    accessor model: EmbedCardModel;
    accessor host: EditorHost;
    accessor titleInput: HTMLInputElement;
    accessor descInput: HTMLTextAreaElement;
    private _handleInput;
    private _onDocumentKeydown;
    private _onSave;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare function toggleEmbedCardEditModal(host: EditorHost, embedCardModel: EmbedCardModel): void;
declare global {
    interface HTMLElementTagNameMap {
        'embed-card-edit-modal': EmbedCardEditModal;
    }
}
export {};
//# sourceMappingURL=embed-card-edit-modal.d.ts.map