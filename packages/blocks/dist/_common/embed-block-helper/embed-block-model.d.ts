import type { Constructor } from '@blocksuite/global/utils';
import type { BlockModel } from '@blocksuite/store';
import { type EdgelessSelectableProps } from '../edgeless/mixin/index.js';
import type { EmbedProps } from './types.js';
export declare function defineEmbedModel<Props extends object, T extends Constructor<BlockModel<Props>> = Constructor<BlockModel<Props>>>(SuperClass: T): {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<Props & EdgelessSelectableProps>;
};
export type EmbedBlockModel<Props = object> = BlockModel<EmbedProps<Props>>;
//# sourceMappingURL=embed-block-model.d.ts.map