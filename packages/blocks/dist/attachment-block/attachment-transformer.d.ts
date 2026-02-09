import type { FromSnapshotPayload, SnapshotReturn, ToSnapshotPayload } from '@blocksuite/store';
import { BaseBlockTransformer } from '@blocksuite/store';
import type { AttachmentBlockProps } from './attachment-model.js';
export declare class AttachmentBlockTransformer extends BaseBlockTransformer<AttachmentBlockProps> {
    toSnapshot(payload: ToSnapshotPayload<AttachmentBlockProps>): Promise<{
        id: string;
        version?: number | undefined;
        flavour: string;
        props: Record<string, unknown>;
    }>;
    fromSnapshot(payload: FromSnapshotPayload): Promise<SnapshotReturn<AttachmentBlockProps>>;
}
//# sourceMappingURL=attachment-transformer.d.ts.map