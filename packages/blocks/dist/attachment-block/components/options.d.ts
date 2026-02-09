import { type RefOrCallback } from 'lit/directives/ref.js';
import type { AttachmentBlockComponent } from '../attachment-block.js';
import type { AttachmentBlockModel } from '../attachment-model.js';
export declare function AttachmentOptionsTemplate({ anchor, model, showCaption, downloadAttachment, abortController, ref: refOrCallback, }: {
    anchor: AttachmentBlockComponent;
    model: AttachmentBlockModel;
    downloadAttachment: (model: AttachmentBlockModel) => void | Promise<void>;
    showCaption: () => void;
    abortController: AbortController;
    ref?: RefOrCallback;
}): import("lit").TemplateResult<1>;
//# sourceMappingURL=options.d.ts.map