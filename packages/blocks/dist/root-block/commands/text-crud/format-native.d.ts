import type { Command } from '@blocksuite/block-std';
import type { AffineTextAttributes } from '../../../_common/inline/presets/affine-inline-specs.js';
export declare const formatNativeCommand: Command<never, never, {
    range?: Range;
    styles: AffineTextAttributes;
    mode?: 'replace' | 'merge';
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            formatNative: typeof formatNativeCommand;
        }
    }
}
//# sourceMappingURL=format-native.d.ts.map