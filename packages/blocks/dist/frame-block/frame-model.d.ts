import type { Text } from '@blocksuite/store';
import type { IHitTestOptions } from '../surface-block/element-model/base.js';
import { Bound } from '../surface-block/utils/bound.js';
import type { SerializedXYWH } from '../surface-block/utils/xywh.js';
type FrameBlockProps = {
    title: Text;
    background: string;
    xywh: SerializedXYWH;
    index: string;
};
export declare const FrameBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<FrameBlockProps>;
        flavour: "affine:frame";
    } & {
        version: number;
        role: "content";
        parent: string[];
        children: never[];
    };
    onUpgrade?: ((data: FrameBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<FrameBlockProps>) | undefined;
};
declare const FrameBlockModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<FrameBlockProps>;
};
export declare class FrameBlockModel extends FrameBlockModel_base {
    static PADDING: number[];
    hitTest(x: number, y: number, _: IHitTestOptions): boolean;
    boxSelect(selectedBound: Bound): boolean;
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:frame': FrameBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=frame-model.d.ts.map