import type { Doc } from '@blocksuite/store';
import type { FrameBlockModel } from '../../frame-block/frame-model.js';
import type { EdgelessRootService } from '../../index.js';
import type { NoteBlockModel } from '../../note-block/note-model.js';
import { Bound, Overlay, type RoughCanvas } from '../../surface-block/index.js';
export declare function removeContainedFrames(frames: FrameBlockModel[]): FrameBlockModel[];
export declare class FrameOverlay extends Overlay {
    bound: Bound | null;
    render(ctx: CanvasRenderingContext2D, _rc: RoughCanvas): void;
    highlight(frame: FrameBlockModel): void;
    clear(): void;
}
export declare function isFrameInner(frame: FrameBlockModel, frames: FrameBlockModel[]): boolean;
export declare class EdgelessFrameManager {
    private _rootService;
    private _disposable;
    constructor(_rootService: EdgelessRootService);
    selectFrame(eles: BlockSuite.EdgelessModelType[]): FrameBlockModel | null;
    getElementsInFrame(frame: FrameBlockModel, fullyContained?: boolean): BlockSuite.EdgelessModelType[];
    createFrameOnSelected(): BlockSuite.EdgelessModelType | null;
    dispose(): void;
}
export declare function getNotesInFrame(doc: Doc, frame: FrameBlockModel, fullyContained?: boolean): NoteBlockModel[];
export declare function getBlocksInFrame(doc: Doc, model: FrameBlockModel, fullyContained?: boolean): BlockSuite.EdgelessBlockModelType[];
//# sourceMappingURL=frame-manager.d.ts.map