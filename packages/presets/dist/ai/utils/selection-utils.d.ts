import type { EditorHost } from '@blocksuite/block-std';
import { type FrameBlockModel, type SurfaceBlockComponent } from '@blocksuite/blocks';
import { EdgelessRootService } from '@blocksuite/blocks';
import type { BlockModel } from '@blocksuite/store';
export declare const getRootService: (host: EditorHost) => import("@blocksuite/blocks").PageRootService | EdgelessRootService;
export declare function getEdgelessRootFromEditor(editor: EditorHost): import("@blocksuite/blocks").EdgelessRootBlockComponent;
export declare function getEdgelessService(editor: EditorHost): EdgelessRootService;
export declare function selectedToCanvas(editor: EditorHost): Promise<HTMLCanvasElement | undefined>;
export declare function frameToCanvas(frame: FrameBlockModel, editor: EditorHost): Promise<HTMLCanvasElement | undefined>;
export declare function selectedToPng(editor: EditorHost): Promise<string | undefined>;
export declare function getSelectedModels(editorHost: EditorHost): BlockModel<object>[] | undefined;
export declare function getTextContentFromBlockModels(editorHost: EditorHost, models: BlockModel[], type?: 'markdown' | 'plain-text'): Promise<string>;
export declare function getSelectedTextContent(editorHost: EditorHost, type?: 'markdown' | 'plain-text'): Promise<string>;
export declare function selectAboveBlocks(editorHost: EditorHost, num?: number): Promise<string>;
export declare const stopPropagation: (e: Event) => void;
export declare function getSurfaceElementFromEditor(editor: EditorHost): SurfaceBlockComponent;
export declare const getFirstImageInFrame: (frame: FrameBlockModel, editor: EditorHost) => string | undefined;
export declare const getSelections: (host: EditorHost, mode?: 'flat' | 'highest') => import("@blocksuite/block-std").CommandKeyToData<keyof BlockSuite.CommandContext>;
export declare const getSelectedImagesAsBlobs: (host: EditorHost) => Promise<File[]>;
export declare const getSelectedNoteAnchor: (host: EditorHost, id: string) => Element | null;
export declare function getCopilotSelectedElems(host: EditorHost): BlockSuite.EdgelessModelType[];
export declare const imageCustomInput: (host: EditorHost) => Promise<{
    attachments: Blob[];
} | undefined>;
//# sourceMappingURL=selection-utils.d.ts.map