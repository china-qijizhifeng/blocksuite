import type { Command } from '@blocksuite/block-std';
export declare const focusBlockEnd: Command<'focusBlock'>;
declare global {
    namespace BlockSuite {
        interface Commands {
            focusBlockEnd: typeof focusBlockEnd;
        }
    }
}
//# sourceMappingURL=focus-block-end.d.ts.map