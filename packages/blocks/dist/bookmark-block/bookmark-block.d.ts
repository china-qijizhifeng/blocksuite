import './components/bookmark-card.js';
import { BlockComponent } from '../_common/components/block-component.js';
import type { BookmarkBlockModel } from './bookmark-model.js';
import type { BookmarkBlockService } from './bookmark-service.js';
export declare class BookmarkBlockComponent extends BlockComponent<BookmarkBlockModel, BookmarkBlockService> {
    get isInSurface(): boolean;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent | null;
    private _isInSurface;
    private _fetchAbortController?;
    accessor useCaptionEditor: boolean;
    accessor loading: boolean;
    accessor error: boolean;
    accessor bookmarkCard: HTMLElement;
    open: () => void;
    refreshData: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-bookmark': BookmarkBlockComponent;
    }
}
//# sourceMappingURL=bookmark-block.d.ts.map