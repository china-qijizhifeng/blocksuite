import type { BlockSelection, Command } from '@blocksuite/block-std';
import type { AffineTextAttributes } from '../../../_common/inline/presets/affine-inline-specs.js';
export declare const formatBlockCommand: Command<'currentBlockSelections', never, {
    blockSelections?: BlockSelection[];
    styles: AffineTextAttributes;
    mode?: 'replace' | 'merge';
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            formatBlock: typeof formatBlockCommand;
        }
    }
}
//# sourceMappingURL=format-block.d.ts.map