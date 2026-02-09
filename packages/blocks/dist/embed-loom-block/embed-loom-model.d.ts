import type { EmbedCardStyle } from '../_common/types.js';
export declare const loomUrlRegex: RegExp;
export type EmbedLoomBlockUrlData = {
    videoId: string | null;
    image: string | null;
    title: string | null;
    description: string | null;
};
export declare const EmbedLoomStyles: EmbedCardStyle[];
export type EmbedLoomBlockProps = {
    style: (typeof EmbedLoomStyles)[number];
    url: string;
    caption: string | null;
} & EmbedLoomBlockUrlData;
declare const EmbedLoomModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<{
        style: EmbedCardStyle;
        url: string;
        caption: string | null;
    } & EmbedLoomBlockUrlData & import("../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>;
};
export declare class EmbedLoomModel extends EmbedLoomModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-loom': EmbedLoomModel;
        }
    }
}
export {};
//# sourceMappingURL=embed-loom-model.d.ts.map