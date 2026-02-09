import type { FromSnapshotPayload, SnapshotReturn, ToSnapshotPayload } from '@blocksuite/store';
import { BaseBlockTransformer } from '@blocksuite/store';
import type { ImageBlockProps } from './image-model.js';
export declare class ImageBlockTransformer extends BaseBlockTransformer<ImageBlockProps> {
    toSnapshot(payload: ToSnapshotPayload<ImageBlockProps>): Promise<{
        id: string;
        version?: number | undefined;
        flavour: string;
        props: Record<string, unknown>;
    }>;
    fromSnapshot(payload: FromSnapshotPayload): Promise<SnapshotReturn<ImageBlockProps>>;
}
//# sourceMappingURL=image-transformer.d.ts.map