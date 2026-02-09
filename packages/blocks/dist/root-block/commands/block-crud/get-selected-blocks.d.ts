import type { BlockSelection, Command, TextSelection } from '@blocksuite/block-std';
import { BlockElement } from '@blocksuite/block-std';
import type { RoleType } from '@blocksuite/store';
import type { ImageSelection } from '../../../image-block/image-selection.js';
export declare const getSelectedBlocksCommand: Command<'currentTextSelection' | 'currentBlockSelections' | 'currentImageSelections', 'selectedBlocks', {
    textSelection?: TextSelection;
    blockSelections?: BlockSelection[];
    imageSelections?: ImageSelection[];
    filter?: (el: BlockElement) => boolean;
    types?: Extract<BlockSuite.SelectionType, 'block' | 'text' | 'image'>[];
    roles?: RoleType[];
    mode?: 'all' | 'flat' | 'highest';
}>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            selectedBlocks?: BlockElement[];
        }
        interface Commands {
            getSelectedBlocks: typeof getSelectedBlocksCommand;
        }
    }
}
//# sourceMappingURL=get-selected-blocks.d.ts.map