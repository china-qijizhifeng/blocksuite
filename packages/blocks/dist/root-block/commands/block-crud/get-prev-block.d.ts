import type { Command } from '@blocksuite/block-std';
import type { BlockElement } from '@blocksuite/block-std';
export declare const getPrevBlockCommand: Command<'currentSelectionPath', 'prevBlock', {
    path?: string;
}>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            prevBlock?: BlockElement;
        }
        interface Commands {
            getPrevBlock: typeof getPrevBlockCommand;
        }
    }
}
//# sourceMappingURL=get-prev-block.d.ts.map