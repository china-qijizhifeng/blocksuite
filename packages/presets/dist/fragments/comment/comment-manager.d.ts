import type { TextSelection } from '@blocksuite/block-std';
import type { EditorHost } from '@blocksuite/block-std';
import { type Y } from '@blocksuite/store';
export interface CommentMeta {
    id: string;
    date: number;
}
export interface CommentRange {
    start: {
        path: string[];
        index: Y.RelativePosition;
    };
    end: {
        path: string[];
        index: Y.RelativePosition;
    };
}
export interface CommentContent {
    quote: string;
    author: string;
    text: Y.Text;
}
export type Comment = CommentMeta & CommentRange & CommentContent;
export declare class CommentManager {
    readonly host: EditorHost;
    constructor(host: EditorHost);
    get commentsMap(): Y.Map<Y.Map<unknown>>;
    parseTextSelection(selection: TextSelection): {
        quote: CommentContent['quote'];
        range: CommentRange;
    } | null;
    addComment(selection: TextSelection, payload: Pick<CommentContent, 'author' | 'text'>): Comment;
    getComments(): Comment[];
    private get _command();
}
//# sourceMappingURL=comment-manager.d.ts.map