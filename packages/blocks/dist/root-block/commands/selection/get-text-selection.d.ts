import type { Command } from '@blocksuite/block-std';
import type { TextSelection } from '@blocksuite/block-std';
export declare const getTextSelectionCommand: Command<never, 'currentTextSelection'>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            currentTextSelection?: TextSelection;
        }
        interface Commands {
            getTextSelection: typeof getTextSelectionCommand;
        }
    }
}
//# sourceMappingURL=get-text-selection.d.ts.map