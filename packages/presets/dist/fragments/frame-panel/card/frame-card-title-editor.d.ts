import { ShadowlessElement } from '@blocksuite/block-std';
import type { AffineInlineEditor, FrameBlockModel, RichText } from '@blocksuite/blocks';
declare const FrameCardTitleEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FrameCardTitleEditor extends FrameCardTitleEditor_base {
    get inlineEditor(): AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline/inline-editor").InlineRootElement<import("@blocksuite/blocks").AffineTextAttributes>;
    static styles: import("lit").CSSResult;
    private _isComposing;
    accessor richText: RichText;
    accessor frameModel: FrameBlockModel;
    accessor titleContentElement: HTMLElement;
    accessor left: number;
    accessor maxWidth: number;
    private _unmount;
    getUpdateComplete(): Promise<boolean>;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-card-title-editor': FrameCardTitleEditor;
    }
}
export {};
//# sourceMappingURL=frame-card-title-editor.d.ts.map