import type { LinkPreviewData } from '../_common/embed-block-helper/index.js';
import type { EmbedCardStyle } from '../_common/types.js';
import type { SerializedXYWH } from '../surface-block/utils/xywh.js';
export interface BookmarkBlockEdgelessProps {
    index: string;
    xywh: SerializedXYWH;
    rotate: number;
}
export declare const BookmarkStyles: EmbedCardStyle[];
export type BookmarkBlockProps = {
    style: (typeof BookmarkStyles)[number];
    url: string;
    caption: string | null;
} & LinkPreviewData & BookmarkBlockEdgelessProps;
export declare const BookmarkBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<BookmarkBlockProps>;
        flavour: "affine:bookmark";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: BookmarkBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<BookmarkBlockProps>) | undefined;
};
declare const BookmarkBlockModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<BookmarkBlockProps>;
};
export declare class BookmarkBlockModel extends BookmarkBlockModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:bookmark': BookmarkBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=bookmark-model.d.ts.map