import type { BlockElement } from '@blocksuite/block-std';
import type { ListType } from '../../../../list-block/index.js';
export declare function convertToList(element: BlockElement, listType: ListType, prefix: string, otherProperties?: Record<string, unknown>): boolean;
export declare function convertToParagraph(element: BlockElement, type: 'text' | 'quote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', prefix: string): boolean;
export declare function convertToDivider(element: BlockElement, prefix: string): boolean;
//# sourceMappingURL=utils.d.ts.map