import { assertExists } from '@blocksuite/global/utils';
import { buildCopyConfig, buildErrorConfig, buildFinishConfig, buildGeneratingConfig, getAIPanel, } from '../ai-panel.js';
import { createTextRenderer } from '../messages/text.js';
import { AIProvider } from '../provider.js';
import { reportResponse } from '../utils/action-reporter.js';
import { getSelectedImagesAsBlobs, getSelectedTextContent, getSelections, selectAboveBlocks, } from '../utils/selection-utils.js';
export function bindTextStream(stream, { update, finish, signal, }) {
    (async () => {
        let answer = '';
        signal?.addEventListener('abort', () => {
            finish('aborted');
            reportResponse('aborted:stop');
        });
        for await (const data of stream) {
            if (signal?.aborted) {
                return;
            }
            answer += data;
            update(answer);
        }
        finish('success');
    })().catch(err => {
        if (signal?.aborted)
            return;
        if (err.name === 'AbortError') {
            finish('aborted');
        }
        else {
            finish('error', err);
        }
    });
}
export function actionToStream(id, signal, variants, trackerOptions) {
    const action = AIProvider.actions[id];
    if (!action || typeof action !== 'function')
        return;
    return (host) => {
        let stream;
        return {
            async *[Symbol.asyncIterator]() {
                const { currentTextSelection, selectedBlocks } = getSelections(host);
                let markdown;
                let attachments = [];
                if (currentTextSelection?.isCollapsed()) {
                    markdown = await selectAboveBlocks(host);
                }
                else {
                    [markdown, attachments] = await Promise.all([
                        getSelectedTextContent(host),
                        getSelectedImagesAsBlobs(host),
                    ]);
                }
                // for now if there are more than one selected blocks, we will not omit the attachments
                const sendAttachments = selectedBlocks?.length === 1 && attachments.length > 0;
                const models = selectedBlocks?.map(block => block.model);
                const control = trackerOptions?.control ?? 'format-bar';
                const where = trackerOptions?.where ?? 'ai-panel';
                const options = {
                    ...variants,
                    attachments: sendAttachments ? attachments : undefined,
                    input: sendAttachments ? '' : markdown,
                    stream: true,
                    host,
                    models,
                    signal,
                    control,
                    where,
                    docId: host.doc.id,
                    workspaceId: host.doc.collection.id,
                };
                // @ts-expect-error todo: maybe fix this
                stream = action(options);
                if (!stream)
                    return;
                yield* stream;
            },
        };
    };
}
export function actionToGenerateAnswer(id, variants, trackerOptions) {
    return (host) => {
        return ({ signal, update, finish, }) => {
            const { selectedBlocks: blocks } = getSelections(host);
            if (!blocks || blocks.length === 0)
                return;
            const stream = actionToStream(id, signal, variants, trackerOptions)?.(host);
            if (!stream)
                return;
            bindTextStream(stream, { update, finish, signal });
        };
    };
}
/**
 * TODO: Should update config according to the action type
 * When support mind-map. generate image, generate slides on doc mode or in edgeless note block
 * Currently, only support text action
 */
function updateAIPanelConfig(aiPanel, id, generatingIcon, variants, trackerOptions) {
    const { config, host } = aiPanel;
    assertExists(config);
    config.generateAnswer = actionToGenerateAnswer(id, variants, trackerOptions)(host);
    config.answerRenderer = createTextRenderer(host, { maxHeight: 320 });
    config.finishStateConfig = buildFinishConfig(aiPanel, id);
    config.generatingStateConfig = buildGeneratingConfig(generatingIcon);
    config.errorStateConfig = buildErrorConfig(aiPanel);
    config.copy = buildCopyConfig(aiPanel);
    config.discardCallback = () => {
        reportResponse('result:discard');
    };
}
export function actionToHandler(id, generatingIcon, variants, trackerOptions) {
    return (host) => {
        const aiPanel = getAIPanel(host);
        updateAIPanelConfig(aiPanel, id, generatingIcon, variants, trackerOptions);
        const { selectedBlocks: blocks } = getSelections(aiPanel.host);
        if (!blocks || blocks.length === 0)
            return;
        aiPanel.toggle(blocks.at(-1), 'placeholder');
    };
}
export function handleInlineAskAIAction(host) {
    const panel = getAIPanel(host);
    const selection = host.selection.find('text');
    const lastBlockPath = selection
        ? selection.to?.blockId ?? selection.blockId
        : null;
    if (!lastBlockPath)
        return;
    const block = host.view.getBlock(lastBlockPath);
    if (!block)
        return;
    const generateAnswer = ({ finish, input, signal, update, }) => {
        if (!AIProvider.actions.chat)
            return;
        // recover selection to get content from above blocks
        assertExists(selection);
        host.selection.set([selection]);
        selectAboveBlocks(host)
            .then(context => {
            assertExists(AIProvider.actions.chat);
            const stream = AIProvider.actions.chat({
                input: `${context}\n${input}`,
                stream: true,
                host,
                where: 'inline-chat-panel',
                control: 'chat-send',
                docId: host.doc.id,
                workspaceId: host.doc.collection.id,
            });
            bindTextStream(stream, { update, finish, signal });
        })
            .catch(console.error);
    };
    assertExists(panel.config);
    panel.config.generateAnswer = generateAnswer;
    panel.toggle(block);
}
//# sourceMappingURL=doc-handler.js.map