import type { EditorHost } from '@blocksuite/block-std';
import type { TemplateResult } from 'lit';
import type { CtxRecord } from './types.js';
export declare function getContentFromSelected(host: EditorHost, selected: BlockSuite.EdgelessModelType[]): Promise<string>;
export declare function actionToHandler<T extends keyof BlockSuitePresets.AIActions>(id: T, generatingIcon: TemplateResult<1>, variants?: Omit<Parameters<BlockSuitePresets.AIActions[T]>[0], keyof BlockSuitePresets.AITextActionOptions>, customInput?: (host: EditorHost, ctx: CtxRecord) => Promise<{
    input?: string;
    content?: string;
    attachments?: (string | Blob)[];
    seed?: string;
} | void>, trackerOptions?: BlockSuitePresets.TrackerOptions): (host: EditorHost) => void;
export declare function noteBlockOrTextShowWhen(_: unknown, __: unknown, host: EditorHost): boolean;
/**
 * Checks if the selected element is a NoteBlockModel with a single child element of code block.
 */
export declare function noteWithCodeBlockShowWen(_: unknown, __: unknown, host: EditorHost): boolean;
export declare function mindmapChildShowWhen(_: unknown, __: unknown, host: EditorHost): boolean;
export declare function imageOnlyShowWhen(_: unknown, __: unknown, host: EditorHost): boolean;
export declare function mindmapRootShowWhen(_: unknown, __: unknown, host: EditorHost): boolean;
//# sourceMappingURL=edgeless-handler.d.ts.map