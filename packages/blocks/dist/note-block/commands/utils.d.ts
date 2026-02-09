import type { Chain, Command, CommandKeyToData, InitCommandCtx } from '@blocksuite/block-std';
import type { AffineTextAttributes } from '../../_common/inline/presets/affine-inline-specs.js';
export declare function generateTextStyleCommand(key: Extract<keyof AffineTextAttributes, 'bold' | 'italic' | 'underline' | 'strike' | 'code'>): Command;
export declare function getCombinedTextStyle(chain: Chain<InitCommandCtx>): Chain<InitCommandCtx & CommandKeyToData<"textStyle">>;
export declare function isFormatSupported(chain: Chain<InitCommandCtx>): Chain<InitCommandCtx & CommandKeyToData<keyof BlockSuite.CommandContext>>;
//# sourceMappingURL=utils.d.ts.map