import type { EditorHost } from '@blocksuite/block-std';
import type { AIError } from '@blocksuite/blocks';
import type { TemplateResult } from 'lit';
export declare function bindTextStream(stream: BlockSuitePresets.TextStream, { update, finish, signal, }: {
    update: (text: string) => void;
    finish: (state: 'success' | 'error' | 'aborted', err?: AIError) => void;
    signal?: AbortSignal;
}): void;
export declare function actionToStream<T extends keyof BlockSuitePresets.AIActions>(id: T, signal?: AbortSignal, variants?: Omit<Parameters<BlockSuitePresets.AIActions[T]>[0], keyof BlockSuitePresets.AITextActionOptions>, trackerOptions?: BlockSuitePresets.TrackerOptions): ((host: EditorHost) => BlockSuitePresets.TextStream) | undefined;
export declare function actionToGenerateAnswer<T extends keyof BlockSuitePresets.AIActions>(id: T, variants?: Omit<Parameters<BlockSuitePresets.AIActions[T]>[0], keyof BlockSuitePresets.AITextActionOptions>, trackerOptions?: BlockSuitePresets.TrackerOptions): (host: EditorHost) => ({ signal, update, finish, }: {
    input: string;
    signal?: AbortSignal;
    update: (text: string) => void;
    finish: (state: 'success' | 'error' | 'aborted', err?: AIError) => void;
}) => void;
export declare function actionToHandler<T extends keyof BlockSuitePresets.AIActions>(id: T, generatingIcon: TemplateResult<1>, variants?: Omit<Parameters<BlockSuitePresets.AIActions[T]>[0], keyof BlockSuitePresets.AITextActionOptions>, trackerOptions?: BlockSuitePresets.TrackerOptions): (host: EditorHost) => void;
export declare function handleInlineAskAIAction(host: EditorHost): void;
//# sourceMappingURL=doc-handler.d.ts.map