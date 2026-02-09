import { type NoteChildrenFlavour, type Point } from '../../../_common/utils/index.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export type NoteOptions = {
    childFlavour: NoteChildrenFlavour;
    childType: string | null;
    collapse: boolean;
};
export declare function addNote(edgeless: EdgelessRootBlockComponent, point: Point, options: NoteOptions, width?: number, height?: number): void;
//# sourceMappingURL=note.d.ts.map