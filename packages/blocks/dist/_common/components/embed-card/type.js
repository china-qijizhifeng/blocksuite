import { BookmarkBlockComponent } from '../../../bookmark-block/bookmark-block.js';
import { EmbedFigmaBlockComponent } from '../../../embed-figma-block/embed-figma-block.js';
import { EmbedGithubBlockComponent } from '../../../embed-github-block/embed-github-block.js';
import { EmbedLinkedDocBlockComponent, } from '../../../embed-linked-doc-block/index.js';
import { EmbedLoomBlockComponent } from '../../../embed-loom-block/embed-loom-block.js';
import { EmbedSyncedDocBlockComponent } from '../../../embed-synced-doc-block/embed-synced-doc-block.js';
import { EmbedYoutubeBlockComponent } from '../../../embed-youtube-block/embed-youtube-block.js';
export function isEmbedCardBlockElement(block) {
    return (block instanceof BookmarkBlockComponent ||
        block instanceof EmbedGithubBlockComponent ||
        block instanceof EmbedYoutubeBlockComponent ||
        block instanceof EmbedFigmaBlockComponent ||
        block instanceof EmbedLinkedDocBlockComponent ||
        block instanceof EmbedSyncedDocBlockComponent ||
        block instanceof EmbedLoomBlockComponent);
}
//# sourceMappingURL=type.js.map