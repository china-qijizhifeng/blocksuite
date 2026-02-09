import type { Command } from '@blocksuite/block-std';
import type { BlockElement } from '@blocksuite/block-std';
export declare const getNextBlockCommand: Command<'currentSelectionPath', 'nextBlock', {
    path?: string;
}>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            nextBlock?: BlockElement;
        }
        interface Commands {
            getNextBlock: typeof getNextBlockCommand;
        }
    }
}
//# sourceMappingURL=get-next-block.d.ts.map