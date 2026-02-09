import { type Ref } from 'lit/directives/ref.js';
import type { AttachmentBlockModel } from '../attachment-model.js';
export declare const MoreMenu: ({ ref: moreMenuRef, model, downloadAttachment, abortController, }: {
    ref?: Ref<HTMLDivElement>;
    model: AttachmentBlockModel;
    downloadAttachment: (model: AttachmentBlockModel) => Promise<void> | void;
    abortController: AbortController;
}) => import("lit").TemplateResult<1>;
//# sourceMappingURL=more-menu.d.ts.map