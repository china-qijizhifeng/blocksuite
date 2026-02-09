import type { EditorHost } from '@blocksuite/block-std';
import type { AffineAIPanelWidgetConfig, MindmapStyle } from '@blocksuite/blocks';
export declare const createMindmapRenderer: (host: EditorHost, 
/**
 * Used to store data for later use during rendering.
 */
ctx: {
    get: () => Record<string, unknown>;
    set: (data: Record<string, unknown>) => void;
}, style?: MindmapStyle) => AffineAIPanelWidgetConfig['answerRenderer'];
/**
 * Creates a renderer for executing a handler.
 * The ai panel will not display anything after the answer is generated.
 */
export declare const createMindmapExecuteRenderer: (host: EditorHost, 
/**
 * Used to store data for later use during rendering.
 */
ctx: {
    get: () => Record<string, unknown>;
    set: (data: Record<string, unknown>) => void;
}, handler: (ctx: {
    get: () => Record<string, unknown>;
    set: (data: Record<string, unknown>) => void;
}) => void) => AffineAIPanelWidgetConfig['answerRenderer'];
//# sourceMappingURL=mindmap.d.ts.map