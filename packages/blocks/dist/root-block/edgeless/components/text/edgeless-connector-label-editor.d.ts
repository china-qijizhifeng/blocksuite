import '../../../../_common/components/rich-text/rich-text.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { RichText } from '../../../../_common/components/rich-text/rich-text.js';
import { type ConnectorElementModel } from '../../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessConnectorLabelEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessConnectorLabelEditor extends EdgelessConnectorLabelEditor_base {
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline/inline-editor").InlineRootElement<import("@blocksuite/blocks").AffineTextAttributes>;
    static styles: import("lit").CSSResult;
    private _keeping;
    private _isComposition;
    private _resizeObserver;
    accessor richText: RichText;
    accessor connector: ConnectorElementModel;
    accessor edgeless: EdgelessRootBlockComponent;
    private _updateLabelRect;
    setKeeping(keeping: boolean): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-label-editor': EdgelessConnectorLabelEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-connector-label-editor.d.ts.map