import type { Command } from '@blocksuite/block-std';
export declare const selectBlocksBetween: Command<'focusBlock' | 'anchorBlock', never, {
    tail: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            selectBlocksBetween: typeof selectBlocksBetween;
        }
    }
}
//# sourceMappingURL=select-blocks-between.d.ts.map