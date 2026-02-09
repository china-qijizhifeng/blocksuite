import type { BlockElement } from '@blocksuite/block-std';
export declare class PageKeyboardManager {
    rootElement: BlockElement;
    constructor(rootElement: BlockElement);
    private get _doc();
    private get _selection();
    private get _currentSelection();
    private _handleDelete;
    private _deleteBlocksBySelection;
    private _replaceBlocksBySelection;
    private _createEmbedBlock;
}
//# sourceMappingURL=keyboard-manager.d.ts.map