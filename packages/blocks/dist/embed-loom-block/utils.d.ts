import type { EmbedLoomBlockComponent } from './embed-loom-block.js';
import type { EmbedLoomBlockUrlData, EmbedLoomModel } from './embed-loom-model.js';
export declare function queryEmbedLoomData(embedLoomModel: EmbedLoomModel, signal?: AbortSignal): Promise<Partial<EmbedLoomBlockUrlData>>;
export declare function queryLoomOEmbedData(url: string, signal?: AbortSignal): Promise<Partial<EmbedLoomBlockUrlData>>;
export declare function refreshEmbedLoomUrlData(embedLoomElement: EmbedLoomBlockComponent, signal?: AbortSignal): Promise<void>;
//# sourceMappingURL=utils.d.ts.map