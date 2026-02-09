import type { Command, TextSelection } from '@blocksuite/block-std';
import type { AffineTextAttributes } from '../../../_common/inline/presets/affine-inline-specs.js';
export declare const formatTextCommand: Command<'currentTextSelection', never, {
    textSelection?: TextSelection;
    styles: AffineTextAttributes;
    mode?: 'replace' | 'merge';
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            formatText: typeof formatTextCommand;
        }
    }
}
//# sourceMappingURL=format-text.d.ts.map