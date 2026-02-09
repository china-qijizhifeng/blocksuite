import type { UIEventHandler } from '@blocksuite/block-std';
import type { BlockElement } from '@blocksuite/block-std';
import { DisposableGroup } from '@blocksuite/global/utils';
import type { BlockSnapshot, Doc } from '@blocksuite/store';
import { copyMiddleware, pasteMiddleware } from './middlewares/index.js';
export declare class PageClipboard {
    private get _std();
    protected _disposables: DisposableGroup;
    host: BlockElement;
    constructor(host: BlockElement);
    private _copySelected;
    protected _init: () => void;
    hostConnected(): void;
    hostDisconnected(): void;
    onPageCopy: UIEventHandler;
    onPageCut: UIEventHandler;
    onPagePaste: UIEventHandler;
    onBlockSnapshotPaste: (snapshot: BlockSnapshot, doc: Doc, parent?: string, index?: number) => void;
}
export { copyMiddleware, pasteMiddleware };
//# sourceMappingURL=index.d.ts.map