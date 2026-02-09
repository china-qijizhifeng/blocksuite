import { type TextStyleProps } from '../surface-block/consts.js';
import type { SerializedXYWH } from '../surface-block/utils/xywh.js';
type EdgelessTextProps = {
    xywh: SerializedXYWH;
    index: string;
    scale: number;
    rotate: number;
    hasMaxWidth: boolean;
} & Omit<TextStyleProps, 'fontSize'>;
export declare const EdgelessTextBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<EdgelessTextProps>;
        flavour: "affine:edgeless-text";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: EdgelessTextProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<EdgelessTextProps>) | undefined;
};
declare const EdgelessTextBlockModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<EdgelessTextProps>;
};
export declare class EdgelessTextBlockModel extends EdgelessTextBlockModel_base {
}
export {};
//# sourceMappingURL=edgeless-text-model.d.ts.map