import './../button.js';
import '../tooltip/tooltip.js';
import { LitElement } from 'lit';
import type { BookmarkBlockModel } from '../../../bookmark-block/bookmark-model.js';
import type { EmbedGithubModel } from '../../../embed-github-block/embed-github-model.js';
import type { EmbedLinkedDocModel } from '../../../embed-linked-doc-block/embed-linked-doc-model.js';
declare const EmbedCardStyleMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EmbedCardStyleMenu extends EmbedCardStyleMenu_base {
    static styles: import("lit").CSSResult;
    accessor model: BookmarkBlockModel | EmbedGithubModel | EmbedLinkedDocModel;
    accessor abortController: AbortController;
    private _setEmbedCardStyle;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'embed-card-style-menu': EmbedCardStyleMenu;
    }
}
export {};
//# sourceMappingURL=embed-card-style-popper.d.ts.map