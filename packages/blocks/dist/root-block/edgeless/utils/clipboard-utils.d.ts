import type { EdgelessTextBlockModel } from '../../../edgeless-text/edgeless-text-model.js';
import type { EmbedSyncedDocModel } from '../../../embed-synced-doc-block/index.js';
import type { FrameBlockModel } from '../../../frame-block/index.js';
import type { ImageBlockModel } from '../../../image-block/index.js';
import type { NoteBlockModel } from '../../../note-block/index.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export declare function duplicate(edgeless: EdgelessRootBlockComponent, elements: BlockSuite.EdgelessModelType[], select?: boolean): Promise<void>;
export declare const splitElements: (elements: BlockSuite.EdgelessModelType[]) => {
    notes: NoteBlockModel[];
    shapes: BlockSuite.SurfaceModelType[];
    frames: FrameBlockModel[];
    images: ImageBlockModel[];
    edgelessTexts: EdgelessTextBlockModel[];
    embedSyncedDocs: EmbedSyncedDocModel[];
};
//# sourceMappingURL=clipboard-utils.d.ts.map