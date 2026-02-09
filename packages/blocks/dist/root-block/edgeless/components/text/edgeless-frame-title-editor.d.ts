import { ShadowlessElement } from '@blocksuite/block-std';
import type { RichText } from '../../../../_common/components/rich-text/rich-text.js';
import type { FrameBlockComponent, FrameBlockModel } from '../../../../frame-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessFrameTitleEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFrameTitleEditor extends EdgelessFrameTitleEditor_base {
    get editorHost(): import("@blocksuite/block-std").EditorHost;
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline/inline-editor").InlineRootElement<import("@blocksuite/blocks").AffineTextAttributes>;
    get frameBlock(): FrameBlockComponent;
    accessor richText: RichText;
    accessor frameModel: FrameBlockModel;
    accessor edgeless: EdgelessRootBlockComponent;
    private _unmount;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-frame-title-editor': EdgelessFrameTitleEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-frame-title-editor.d.ts.map