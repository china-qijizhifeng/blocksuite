import type { Command } from '@blocksuite/block-std';
import type { BlockSelection } from '@blocksuite/block-std';
export declare const getBlockSelectionsCommand: Command<never, 'currentBlockSelections'>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            currentBlockSelections?: BlockSelection[];
        }
        interface Commands {
            getBlockSelections: typeof getBlockSelectionsCommand;
        }
    }
}
//# sourceMappingURL=get-block-selections.d.ts.map