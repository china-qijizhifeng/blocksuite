import type { AttachmentBlockModel } from '../../../../../attachment-block/index.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
export declare class EdgelessBlockPortalAttachment extends EdgelessPortalBase<AttachmentBlockModel> {
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-block-portal-attachment': EdgelessBlockPortalAttachment;
    }
}
//# sourceMappingURL=edgeless-attachment.d.ts.map