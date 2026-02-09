import { ShadowlessElement } from '@blocksuite/block-std';
import type { BlockComponent } from '../../../utils/query.js';
declare const EmbedCardEditCaptionEditModal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EmbedCardEditCaptionEditModal extends EmbedCardEditCaptionEditModal_base {
    private get _model();
    private get _doc();
    static styles: import("lit").CSSResult;
    accessor block: BlockComponent;
    accessor captionInput: HTMLTextAreaElement;
    private _onKeydown;
    private _onSave;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare function toggleEmbedCardCaptionEditModal(block: BlockComponent): void;
declare global {
    interface HTMLElementTagNameMap {
        'embed-card-caption-edit-modal': EmbedCardEditCaptionEditModal;
    }
}
export {};
//# sourceMappingURL=embed-card-caption-edit-modal.d.ts.map