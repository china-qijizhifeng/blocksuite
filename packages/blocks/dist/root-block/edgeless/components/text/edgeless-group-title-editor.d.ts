import { ShadowlessElement } from '@blocksuite/block-std';
import type { RichText } from '../../../../_common/components/rich-text/rich-text.js';
import type { GroupElementModel } from '../../../../surface-block/element-model/group.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessGroupTitleEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessGroupTitleEditor extends EdgelessGroupTitleEditor_base {
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline/inline-editor").InlineRootElement<import("@blocksuite/blocks").AffineTextAttributes>;
    accessor richText: RichText;
    accessor group: GroupElementModel;
    accessor edgeless: EdgelessRootBlockComponent;
    private _unmount;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-group-title-editor': EdgelessGroupTitleEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-group-title-editor.d.ts.map