import { ShadowlessElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { Comment, CommentManager } from './comment-manager.js';
declare const CommentInput_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CommentInput extends CommentInput_base {
    get host(): import("@blocksuite/block-std").EditorHost;
    static styles: import("lit").CSSResult;
    private accessor _editor;
    accessor manager: CommentManager;
    accessor onSubmit: undefined | ((comment: Comment) => void);
    private _submit;
    private _cancel;
    render(): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'comment-input': CommentInput;
    }
}
export {};
//# sourceMappingURL=comment-input.d.ts.map