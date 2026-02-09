import type { Command } from '@blocksuite/block-std';
export declare const selectBlock: Command<'focusBlock'>;
declare global {
    namespace BlockSuite {
        interface Commands {
            selectBlock: typeof selectBlock;
        }
    }
}
//# sourceMappingURL=select-block.d.ts.map