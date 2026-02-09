import type { EmbedCardStyle } from '../_common/types.js';
export declare const figmaUrlRegex: RegExp;
export type EmbedFigmaBlockUrlData = {
    title: string | null;
    description: string | null;
};
export declare const EmbedFigmaStyles: EmbedCardStyle[];
export type EmbedFigmaBlockProps = {
    style: (typeof EmbedFigmaStyles)[number];
    url: string;
    caption: string | null;
} & EmbedFigmaBlockUrlData;
declare const EmbedFigmaModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<{
        style: EmbedCardStyle;
        url: string;
        caption: string | null;
    } & EmbedFigmaBlockUrlData & import("../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>;
};
export declare class EmbedFigmaModel extends EmbedFigmaModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-figma': EmbedFigmaModel;
        }
    }
}
export {};
//# sourceMappingURL=embed-figma-model.d.ts.map