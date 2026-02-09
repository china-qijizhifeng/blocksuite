import type { Constructor } from '@blocksuite/global/utils';
import { BlockModel } from '@blocksuite/store';
import { EdgelessBlockModel } from '../../../root-block/edgeless/edgeless-block-model.js';
import type { SerializedXYWH } from '../../../surface-block/index.js';
export type EdgelessSelectableProps = {
    xywh: SerializedXYWH;
    index: string;
};
export declare function selectable<Props extends EdgelessSelectableProps, T extends Constructor<BlockModel<Props>> = Constructor<BlockModel<Props>>>(SuperClass: T): typeof EdgelessBlockModel<Props>;
//# sourceMappingURL=edgeless-selectable.d.ts.map