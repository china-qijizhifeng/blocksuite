import type { EmbedCardStyle } from '../_common/types.js';
export declare const EmbedHtmlStyles: EmbedCardStyle[];
export type EmbedHtmlBlockProps = {
    style: (typeof EmbedHtmlStyles)[number];
    caption: string | null;
    html?: string;
    design?: string;
};
declare const EmbedHtmlModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<EmbedHtmlBlockProps & import("../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>;
};
export declare class EmbedHtmlModel extends EmbedHtmlModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-html': EmbedHtmlModel;
        }
    }
}
export {};
//# sourceMappingURL=embed-html-model.d.ts.map