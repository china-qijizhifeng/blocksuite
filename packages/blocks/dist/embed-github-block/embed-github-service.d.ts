import { BlockService } from '@blocksuite/block-std';
import { type EmbedGithubModel } from './embed-github-model.js';
export declare class EmbedGithubBlockService extends BlockService<EmbedGithubModel> {
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    queryUrlData: (embedGithubModel: EmbedGithubModel, signal?: AbortSignal) => Promise<Partial<import("./embed-github-model.js").EmbedGithubBlockUrlData>>;
    queryApiData: (embedGithubModel: EmbedGithubModel, signal?: AbortSignal) => Promise<Partial<import("./embed-github-model.js").EmbedGithubBlockUrlData>>;
    mounted(): void;
}
//# sourceMappingURL=embed-github-service.d.ts.map