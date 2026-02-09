import { ShadowlessElement } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import { type TemplateResult } from 'lit';
import type { AttachmentBlockModel } from '../../attachment-block/attachment-model.js';
import type { BookmarkBlockModel } from '../../bookmark-block/bookmark-model.js';
import type { EmbedFigmaModel } from '../../embed-figma-block/embed-figma-model.js';
import type { EmbedGithubModel } from '../../embed-github-block/embed-github-model.js';
import type { EmbedHtmlModel } from '../../embed-html-block/embed-html-model.js';
import type { EmbedLinkedDocModel } from '../../embed-linked-doc-block/embed-linked-doc-model.js';
import type { EmbedLoomModel } from '../../embed-loom-block/embed-loom-model.js';
import type { EmbedSyncedDocModel } from '../../embed-synced-doc-block/embed-synced-doc-model.js';
import type { EmbedYoutubeModel } from '../../embed-youtube-block/embed-youtube-model.js';
import type { ImageBlockModel } from '../../image-block/image-model.js';
declare const SurfaceRefGenericBlockPortal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class SurfaceRefGenericBlockPortal extends SurfaceRefGenericBlockPortal_base {
    static styles: import("lit").CSSResult;
    accessor index: number;
    accessor model: ImageBlockModel | AttachmentBlockModel | BookmarkBlockModel | EmbedGithubModel | EmbedYoutubeModel | EmbedFigmaModel | EmbedLinkedDocModel | EmbedSyncedDocModel | EmbedHtmlModel | EmbedLoomModel;
    accessor renderModel: (model: BlockModel) => TemplateResult;
    firstUpdated(): void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'surface-ref-generic-block-portal': SurfaceRefGenericBlockPortal;
    }
}
export {};
//# sourceMappingURL=generic-block.d.ts.map