import { assertExists } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
export class CommentManager {
    constructor(host) {
        this.host = host;
    }
    get commentsMap() {
        return this.host.doc.spaceDoc.getMap('comments');
    }
    parseTextSelection(selection) {
        const [_, ctx] = this._command
            .chain()
            .getSelectedBlocks({
            currentTextSelection: selection,
            types: ['text'],
        })
            .run();
        const blocks = ctx.selectedBlocks;
        if (!blocks || blocks.length === 0)
            return null;
        const { from, to } = selection;
        const fromBlock = blocks[0];
        const fromBlockText = fromBlock.model.text;
        const fromBlockPath = fromBlock.path;
        assertExists(fromBlockText);
        assertExists(fromBlockPath);
        const toBlock = blocks[blocks.length - 1];
        const toBlockText = toBlock.model.text;
        const toBlockPath = toBlock.path;
        assertExists(toBlockText);
        assertExists(toBlockPath);
        const startIndex = DocCollection.Y.createRelativePositionFromTypeIndex(fromBlockText.yText, from.index);
        const endIndex = DocCollection.Y.createRelativePositionFromTypeIndex(toBlockText.yText, to ? to.index + to.length : from.index + from.length);
        const quote = blocks.reduce((acc, block, index) => {
            const text = block.model.text;
            if (!text)
                return acc;
            if (index === 0) {
                return (acc +
                    text.yText.toString().slice(from.index, from.index + from.length));
            }
            if (index === blocks.length - 1 && to) {
                return acc + ' ' + text.yText.toString().slice(0, to.index + to.length);
            }
            return acc + ' ' + text.yText.toString();
        }, '');
        return {
            quote,
            range: {
                start: {
                    path: fromBlockPath,
                    index: startIndex,
                },
                end: {
                    path: toBlockPath,
                    index: endIndex,
                },
            },
        };
    }
    addComment(selection, payload) {
        const parseResult = this.parseTextSelection(selection);
        if (!parseResult) {
            throw new Error('Invalid selection');
        }
        const { quote, range } = parseResult;
        const id = this.host.doc.collection.idGenerator();
        const comment = {
            id,
            date: Date.now(),
            start: range.start,
            end: range.end,
            quote,
            ...payload,
        };
        this.commentsMap.set(id, new DocCollection.Y.Map(Object.entries(comment)));
        return comment;
    }
    getComments() {
        const comments = [];
        this.commentsMap.forEach((comment, key) => {
            const start = comment.get('start');
            const end = comment.get('end');
            const startIndex = DocCollection.Y.createAbsolutePositionFromRelativePosition(start.index, this.host.doc.spaceDoc);
            const startBlock = this.host.view.viewFromPath('block', start.path);
            const endIndex = DocCollection.Y.createAbsolutePositionFromRelativePosition(end.index, this.host.doc.spaceDoc);
            const endBlock = this.host.view.viewFromPath('block', end.path);
            if (!startIndex || !startBlock || !endIndex || !endBlock) {
                // remove outdated comment
                this.commentsMap.delete(key);
                return;
            }
            const result = {
                id: comment.get('id'),
                date: comment.get('date'),
                start,
                end,
                quote: comment.get('quote'),
                author: comment.get('author'),
                text: comment.get('text'),
            };
            comments.push(result);
        });
        return comments;
    }
    get _command() {
        return this.host.command;
    }
}
//# sourceMappingURL=comment-manager.js.map