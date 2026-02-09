import { BlockService } from '@blocksuite/block-std';
import { type BookmarkBlockModel } from './bookmark-model.js';
export declare class BookmarkBlockService extends BlockService<BookmarkBlockModel> {
    private static readonly linkPreviewer;
    static setLinkPreviewEndpoint: (endpoint: string) => void;
    private _dragHandleOption;
    queryUrlData: (url: string, signal?: AbortSignal) => Promise<Partial<import("../_common/embed-block-helper/types.js").LinkPreviewData>>;
    mounted(): void;
}
//# sourceMappingURL=bookmark-service.d.ts.map