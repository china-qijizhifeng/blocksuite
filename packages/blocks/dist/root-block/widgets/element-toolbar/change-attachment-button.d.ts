import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/card-style-panel.js';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { AttachmentBlockModel, EdgelessRootBlockComponent } from '../../../index.js';
declare const EdgelessChangeAttachmentButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeAttachmentButton extends EdgelessChangeAttachmentButton_base {
    accessor model: AttachmentBlockModel;
    accessor edgeless: EdgelessRootBlockComponent;
    private get _doc();
    get std(): import("@blocksuite/block-std").BlockStdScope;
    private get _blockElement();
    private get _getCardStyleOptions();
    private _showCaption;
    private _setCardStyle;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-attachment-button': EdgelessChangeAttachmentButton;
    }
}
export declare function renderAttachmentButton(edgeless: EdgelessRootBlockComponent, attachments?: AttachmentBlockModel[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-attachment-button.d.ts.map