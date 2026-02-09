import type { EmbedCardStyle } from '../_common/types.js';
export declare const EmbedSyncedDocStyles: EmbedCardStyle[];
export type EmbedSyncedDocBlockProps = {
    pageId: string;
    style: EmbedCardStyle;
    caption?: string | null;
    scale?: number;
};
declare const EmbedSyncedDocModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<EmbedSyncedDocBlockProps & import("../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>;
};
export declare class EmbedSyncedDocModel extends EmbedSyncedDocModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-synced-doc': EmbedSyncedDocModel;
        }
    }
}
export {};
//# sourceMappingURL=embed-synced-doc-model.d.ts.map