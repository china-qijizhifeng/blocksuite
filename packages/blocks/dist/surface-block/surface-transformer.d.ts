import type { FromSnapshotPayload, SnapshotReturn, ToSnapshotPayload, Y } from '@blocksuite/store';
import { BaseBlockTransformer } from '@blocksuite/store';
import type { SurfaceBlockProps } from './surface-model.js';
export declare class SurfaceBlockTransformer extends BaseBlockTransformer<SurfaceBlockProps> {
    private _toJSON;
    private _fromJSON;
    private _elementToJSON;
    elementFromJSON(element: Record<string, unknown>): Y.Map<unknown>;
    toSnapshot(payload: ToSnapshotPayload<SurfaceBlockProps>): Promise<{
        id: string;
        version?: number | undefined;
        flavour: string;
        props: Record<string, unknown>;
    }>;
    fromSnapshot(payload: FromSnapshotPayload): Promise<SnapshotReturn<SurfaceBlockProps>>;
}
//# sourceMappingURL=surface-transformer.d.ts.map