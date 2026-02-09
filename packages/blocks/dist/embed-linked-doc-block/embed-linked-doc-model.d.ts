import type { EmbedCardStyle } from '../_common/types.js';
export declare const EmbedLinkedDocStyles: EmbedCardStyle[];
export type EmbedLinkedDocBlockProps = {
    pageId: string;
    style: EmbedCardStyle;
    caption: string | null;
};
declare const EmbedLinkedDocModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<EmbedLinkedDocBlockProps & import("../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>;
};
export declare class EmbedLinkedDocModel extends EmbedLinkedDocModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-linked-doc': EmbedLinkedDocModel;
        }
    }
}
export {};
//# sourceMappingURL=embed-linked-doc-model.d.ts.map