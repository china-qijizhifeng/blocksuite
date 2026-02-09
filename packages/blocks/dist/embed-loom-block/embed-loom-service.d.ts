import { BlockService } from '@blocksuite/block-std';
import { type EmbedLoomModel } from './embed-loom-model.js';
export declare class EmbedLoomBlockService extends BlockService<EmbedLoomModel> {
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    queryUrlData: (embedLoomModel: EmbedLoomModel, signal?: AbortSignal) => Promise<Partial<import("./embed-loom-model.js").EmbedLoomBlockUrlData>>;
    mounted(): void;
}
//# sourceMappingURL=embed-loom-service.d.ts.map