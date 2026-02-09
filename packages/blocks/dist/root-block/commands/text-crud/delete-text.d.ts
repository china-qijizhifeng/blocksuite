import type { Command, TextSelection } from '@blocksuite/block-std';
export declare const deleteTextCommand: Command<'currentTextSelection', never, {
    textSelection?: TextSelection;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            deleteText: typeof deleteTextCommand;
        }
    }
}
//# sourceMappingURL=delete-text.d.ts.map