import type { BlockElement, EditorHost } from '@blocksuite/block-std';
import { type BaseSelection, type PointerEventState } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import { type BlockComponent, type EmbedCardStyle, Point } from '../../../_common/utils/index.js';
import { type DropResult, type OnDragEndProps } from './config.js';
export declare const getDragHandleContainerHeight: (model: BlockModel) => number;
export declare const containChildBlock: (blockElements: BlockElement[], childPath: string[]) => boolean;
export declare const containBlock: (blockIDs: string[], targetID: string) => boolean;
export declare const insideDatabaseTable: (element: Element) => boolean;
export declare const captureEventTarget: (target: EventTarget | null) => Element | null;
export declare const getNoteId: (blockElement: BlockElement) => string;
export declare const includeTextSelection: (selections: BaseSelection[]) => boolean;
/**
 * Check if the path of two blocks are equal
 */
export declare const isBlockPathEqual: (path1: string | null | undefined, path2: string | null | undefined) => boolean;
export declare const getContainerOffsetPoint: (state: PointerEventState) => Point;
export declare const isOutOfNoteBlock: (editorHost: EditorHost, noteBlock: Element, point: Point, scale: number) => boolean;
export declare const getClosestNoteBlock: (editorHost: EditorHost, rootElement: BlockComponent, point: Point) => BlockComponent | null | undefined;
export declare const getClosestBlockByPoint: (editorHost: EditorHost, rootElement: BlockComponent, point: Point) => BlockElement<BlockModel<object>, import("@blocksuite/block-std").BlockService<BlockModel<object>>, string> | null;
export declare function calcDropTarget(point: Point, model: BlockModel, element: Element, draggingElements: BlockComponent[], scale: number, 
/**
 * Allow the dragging block to be dropped as sublist
 */
allowSublist?: boolean): DropResult | null;
export declare const getDropResult: (event: MouseEvent, scale?: number) => DropResult | null;
export declare function getDragHandleLeftPadding(blockElements: BlockElement[]): 2 | 18;
export declare function updateDragHandleClassName(blockElements?: BlockElement[]): void;
export declare function getDuplicateBlocks(blocks: BlockModel[]): {
    flavour: string;
    blockProps: Record<string, unknown>;
}[];
export declare function convertDragPreviewDocToEdgeless({ blockComponent, dragPreview, cssSelector, width, height, noteScale, state, }: OnDragEndProps & {
    blockComponent: BlockElement;
    cssSelector: string;
    width?: number;
    height?: number;
    style?: EmbedCardStyle;
}): boolean;
export declare function convertDragPreviewEdgelessToDoc({ blockComponent, dropBlockId, dropType, state, style, }: OnDragEndProps & {
    blockComponent: BlockElement;
    style?: EmbedCardStyle;
}): boolean;
//# sourceMappingURL=utils.d.ts.map