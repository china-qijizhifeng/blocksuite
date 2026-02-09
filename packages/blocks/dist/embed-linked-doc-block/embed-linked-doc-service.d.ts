import { BlockService } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
import type { EmbedLinkedDocModel } from './embed-linked-doc-model.js';
export declare class EmbedLinkedDocBlockService extends BlockService<EmbedLinkedDocModel> {
    slots: {
        linkedDocCreated: Slot<{
            docId: string;
        }>;
    };
    mounted(): void;
}
//# sourceMappingURL=embed-linked-doc-service.d.ts.map