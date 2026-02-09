import { nothing } from 'lit';
import type { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import type { EmbedGithubBlockComponent } from './embed-github-block.js';
import type { EmbedGithubBlockUrlData, EmbedGithubModel } from './embed-github-model.js';
export declare function queryEmbedGithubData(embedGithubModel: EmbedGithubModel, linkPreviewer: LinkPreviewer, signal?: AbortSignal): Promise<Partial<EmbedGithubBlockUrlData>>;
export declare function queryEmbedGithubApiData(embedGithubModel: EmbedGithubModel, signal?: AbortSignal): Promise<Partial<EmbedGithubBlockUrlData>>;
export declare function refreshEmbedGithubUrlData(embedGithubElement: EmbedGithubBlockComponent, signal?: AbortSignal): Promise<void>;
export declare function refreshEmbedGithubStatus(embedGithubElement: EmbedGithubBlockComponent, signal?: AbortSignal): Promise<void>;
export declare function getGithubStatusIcon(type: 'issue' | 'pr', status: string, statusReason: string | null): import("lit").TemplateResult<1> | typeof nothing;
//# sourceMappingURL=utils.d.ts.map