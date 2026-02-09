import type { Command } from '@blocksuite/block-std';
import type { RootService } from '../../root-block/root-service.js';
export declare const insertLinkByQuickSearchCommand: Command<never, 'insertedLinkType', {
    userInput?: string;
    skipSelection?: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            insertedLinkType?: ReturnType<RootService['insertLinkByQuickSearch']>;
        }
        interface Commands {
            insertLinkByQuickSearch: typeof insertLinkByQuickSearchCommand;
        }
    }
}
//# sourceMappingURL=insert-link-by-quick-search.d.ts.map