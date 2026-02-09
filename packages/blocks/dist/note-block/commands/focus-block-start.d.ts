import type { Command } from '@blocksuite/block-std';
export declare const focusBlockStart: Command<'focusBlock'>;
declare global {
    namespace BlockSuite {
        interface Commands {
            focusBlockStart: typeof focusBlockStart;
        }
    }
}
//# sourceMappingURL=focus-block-start.d.ts.map