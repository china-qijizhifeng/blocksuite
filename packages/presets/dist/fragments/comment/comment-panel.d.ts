import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { CommentManager } from './comment-manager.js';
declare const CommentPanel_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CommentPanel extends CommentPanel_base {
    static styles: import("lit").CSSResult;
    private accessor _container;
    accessor host: EditorHost;
    commentManager: CommentManager | null;
    private _addComment;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'comment-panel': CommentPanel;
    }
}
export {};
//# sourceMappingURL=comment-panel.d.ts.map