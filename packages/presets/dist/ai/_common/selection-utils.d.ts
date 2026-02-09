import type { EditorHost } from '@blocksuite/block-std';
import { EdgelessRootService, type FrameBlockModel, type SurfaceBlockComponent } from '@blocksuite/blocks';
export declare const getRootService: (host: EditorHost) => import("@blocksuite/blocks").PageRootService | EdgelessRootService;
export declare function getEdgelessRootFromEditor(editor: EditorHost): import("@blocksuite/blocks").EdgelessRootBlockComponent;
export declare function getEdgelessService(editor: EditorHost): EdgelessRootService;
export declare function selectedToCanvas(editor: EditorHost): Promise<HTMLCanvasElement | undefined>;
export declare function frameToCanvas(frame: FrameBlockModel, editor: EditorHost): Promise<HTMLCanvasElement | undefined>;
export declare function selectedToPng(editor: EditorHost): Promise<string | undefined>;
export declare function getSelectedTextContent(editorHost: EditorHost): Promise<string>;
export declare const stopPropagation: (e: Event) => void;
export declare function getSurfaceElementFromEditor(editor: EditorHost): SurfaceBlockComponent;
export declare const getFirstImageInFrame: (frame: FrameBlockModel, editor: EditorHost) => string | undefined;
//# sourceMappingURL=selection-utils.d.ts.map