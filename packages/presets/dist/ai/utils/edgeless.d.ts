import type { BlockElement, EditorHost } from '@blocksuite/block-std';
import type { EdgelessCopilotWidget, EdgelessRootService } from '@blocksuite/blocks';
import { MindmapElementModel } from '@blocksuite/blocks';
export declare function mindMapToMarkdown(mindmap: MindmapElementModel): string;
export declare function isMindMapRoot(ele: BlockSuite.EdgelessModelType): boolean;
export declare function isMindmapChild(ele: BlockSuite.EdgelessModelType): boolean;
export declare function getService(host: EditorHost): EdgelessRootService;
export declare function getEdgelessCopilotWidget(host: EditorHost): EdgelessCopilotWidget;
export declare function findNoteBlockModel(blockElement: BlockElement): import("@blocksuite/blocks").NoteBlockModel | null;
//# sourceMappingURL=edgeless.d.ts.map