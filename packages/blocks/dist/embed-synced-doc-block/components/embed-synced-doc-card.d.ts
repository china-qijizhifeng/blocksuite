import { ShadowlessElement } from '@blocksuite/block-std';
import type { SurfaceRefRenderer } from '../../surface-ref-block/surface-ref-renderer.js';
import type { SurfaceRefBlockService } from '../../surface-ref-block/surface-ref-service.js';
import type { EmbedSyncedDocBlockComponent } from '../embed-synced-doc-block.js';
declare const EmbedSyncedDocCard_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EmbedSyncedDocCard extends EmbedSyncedDocCard_base {
    static styles: import("lit").CSSResult;
    accessor block: EmbedSyncedDocBlockComponent;
    accessor isError: boolean;
    accessor isNoteContentEmpty: boolean;
    accessor isBannerEmpty: boolean;
    accessor surfaceRefService: SurfaceRefBlockService;
    accessor surfaceRefRenderer: SurfaceRefRenderer | null;
    accessor bannerContainer: Promise<HTMLDivElement>;
    accessor noteContainer: Promise<HTMLDivElement>;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    get host(): import("@blocksuite/block-std").EditorHost;
    get model(): import("@blocksuite/blocks").EmbedSyncedDocModel;
    get path(): string[];
    get linkedDoc(): import("@blocksuite/store").Doc | null;
    get editorMode(): import("@blocksuite/blocks").DocMode;
    get blockState(): {
        isLoading: boolean;
        isError: boolean;
        isDeleted: boolean;
        isCycle: boolean;
    };
    private _isDocEmpty;
    private _selectBlock;
    private _handleClick;
    cleanUpSurfaceRefRenderer: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-synced-doc-card': EmbedSyncedDocCard;
    }
}
export {};
//# sourceMappingURL=embed-synced-doc-card.d.ts.map