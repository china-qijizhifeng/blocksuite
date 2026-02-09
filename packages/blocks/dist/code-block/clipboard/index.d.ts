import type { BlockElement } from '@blocksuite/block-std';
import { type UIEventHandler } from '@blocksuite/block-std';
import { DisposableGroup } from '@blocksuite/global/utils';
export declare class CodeClipboardController {
    private get _std();
    private _clipboard;
    protected _disposables: DisposableGroup;
    host: BlockElement;
    constructor(host: BlockElement);
    protected _init: () => void;
    hostConnected(): void;
    hostDisconnected(): void;
    onPagePaste: UIEventHandler;
}
//# sourceMappingURL=index.d.ts.map