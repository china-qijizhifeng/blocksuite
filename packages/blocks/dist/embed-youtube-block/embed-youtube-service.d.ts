import { BlockService } from '@blocksuite/block-std';
import { type EmbedYoutubeModel } from './embed-youtube-model.js';
export declare class EmbedYoutubeBlockService extends BlockService<EmbedYoutubeModel> {
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    queryUrlData: (embedYoutubeModel: EmbedYoutubeModel, signal?: AbortSignal) => Promise<Partial<import("./embed-youtube-model.js").EmbedYoutubeBlockUrlData>>;
    mounted(): void;
}
//# sourceMappingURL=embed-youtube-service.d.ts.map