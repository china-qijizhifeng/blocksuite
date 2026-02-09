import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
declare const EmbedCardCreateModal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EmbedCardCreateModal extends EmbedCardCreateModal_base {
    static styles: import("lit").CSSResult;
    private accessor _linkInputValue;
    accessor host: EditorHost;
    accessor titleText: string;
    accessor descriptionText: string;
    accessor createOptions: {
        mode: 'page';
        parentModel: BlockModel | string;
        index?: number;
    } | {
        mode: 'edgeless';
    };
    accessor onConfirm: () => void;
    accessor input: HTMLInputElement;
    private _handleInput;
    private _onDocumentKeydown;
    private _onConfirm;
    private _onCancel;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare function toggleEmbedCardCreateModal(host: EditorHost, titleText: string, descriptionText: string, createOptions: {
    mode: 'page';
    parentModel: BlockModel | string;
    index?: number;
} | {
    mode: 'edgeless';
}): Promise<void>;
declare global {
    interface HTMLElementTagNameMap {
        'embed-card-create-modal': EmbedCardCreateModal;
    }
}
export {};
//# sourceMappingURL=embed-card-create-modal.d.ts.map