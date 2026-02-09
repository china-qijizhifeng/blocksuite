import type { PointerEventState } from '@blocksuite/block-std';
import type { BlockElement, EditorHost } from '@blocksuite/block-std';
import type { Disposable } from '@blocksuite/global/utils';
import type { Point, Rect } from '../../../_common/utils/index.js';
import type { DragPreview } from './components/drag-preview.js';
export declare const DRAG_HANDLE_CONTAINER_HEIGHT = 24;
export declare const DRAG_HANDLE_CONTAINER_WIDTH = 16;
export declare const DRAG_HANDLE_CONTAINER_WIDTH_TOP_LEVEL = 8;
export declare const DRAG_HANDLE_CONTAINER_OFFSET_LEFT = 2;
export declare const DRAG_HANDLE_CONTAINER_OFFSET_LEFT_LIST = 18;
export declare const DRAG_HANDLE_CONTAINER_OFFSET_LEFT_TOP_LEVEL = 5;
export declare const DRAG_HANDLE_CONTAINER_PADDING = 8;
export declare const DRAG_HANDLE_GRABBER_HEIGHT = 12;
export declare const DRAG_HANDLE_GRABBER_WIDTH = 4;
export declare const DRAG_HANDLE_GRABBER_WIDTH_HOVERED = 2;
export declare const DRAG_HANDLE_GRABBER_BORDER_RADIUS = 4;
export declare const DRAG_HANDLE_GRABBER_MARGIN = 4;
export declare const HOVER_AREA_RECT_PADDING_TOP_LEVEL = 6;
export declare const NOTE_CONTAINER_PADDING = 24;
export declare const EDGELESS_NOTE_EXTRA_PADDING = 20;
export declare const DRAG_HOVER_RECT_PADDING = 4;
export declare const BLOCK_CHILDREN_CONTAINER_PADDING_LEFT = 26;
export type DropType = 'before' | 'after' | 'in';
export type DropResult = {
    rect: Rect | null;
    dropBlockId: string;
    dropType: DropType;
};
export type OnDragStartProps = {
    state: PointerEventState;
    startDragging: (blockElements: BlockElement[], state: PointerEventState, dragPreview?: HTMLElement, dragPreviewOffset?: Point) => void;
    anchorBlockId: string;
    anchorBlockPath: string | null;
    editorHost: EditorHost;
};
export type OnDragEndProps = {
    state: PointerEventState;
    draggingElements: BlockElement[];
    dropBlockId: string;
    dropType: DropType | null;
    dragPreview: DragPreview;
    noteScale: number;
    editorHost: EditorHost;
};
export type DragHandleOption = {
    flavour: string | RegExp;
    edgeless?: boolean;
    onDragStart?: (props: OnDragStartProps) => boolean;
    onDragMove?: (state: PointerEventState, draggingElements?: BlockElement[]) => boolean;
    onDragEnd?: (props: OnDragEndProps) => boolean;
};
export declare class DragHandleOptionsRunner {
    get options(): DragHandleOption[];
    private optionMap;
    private _getExistingOptionWithSameFlavour;
    private _decreaseOptionCount;
    getOption(flavour: string): DragHandleOption | undefined;
    register(option: DragHandleOption): Disposable;
}
//# sourceMappingURL=config.d.ts.map