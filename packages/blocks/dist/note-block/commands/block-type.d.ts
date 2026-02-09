import type { Command } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
type UpdateBlockConfig = {
    flavour: BlockSuite.Flavour;
    props?: Record<string, unknown>;
};
export declare const updateBlockType: Command<'selectedBlocks', 'updatedBlocks', UpdateBlockConfig>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            updatedBlocks?: BlockModel[];
        }
        interface Commands {
            updateBlockType: typeof updateBlockType;
        }
    }
}
export {};
//# sourceMappingURL=block-type.d.ts.map