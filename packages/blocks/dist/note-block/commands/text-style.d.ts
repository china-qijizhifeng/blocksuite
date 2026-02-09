import type { Command } from '@blocksuite/block-std';
import type { AffineTextAttributes } from '../../_common/inline/presets/affine-inline-specs.js';
export declare const toggleBold: Command;
export declare const toggleItalic: Command;
export declare const toggleUnderline: Command;
export declare const toggleStrike: Command;
export declare const toggleCode: Command;
export declare const toggleLink: Command;
export declare const getTextStyle: Command<never, 'textStyle'>;
export declare const isTextStyleActive: Command<never, never, {
    key: keyof AffineTextAttributes;
}>;
export declare const registerTextStyleCommands: (std: BlockSuite.Std) => void;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            textStyle?: AffineTextAttributes;
        }
        interface Commands {
            toggleBold: typeof toggleBold;
            toggleItalic: typeof toggleItalic;
            toggleUnderline: typeof toggleUnderline;
            toggleStrike: typeof toggleStrike;
            toggleCode: typeof toggleCode;
            toggleLink: typeof toggleLink;
            getTextStyle: typeof getTextStyle;
            isTextStyleActive: typeof isTextStyleActive;
        }
    }
}
//# sourceMappingURL=text-style.d.ts.map