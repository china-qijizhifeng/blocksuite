import { DeleteIcon, EDGELESS_ELEMENT_TOOLBAR_WIDGET, EmbedHtmlBlockSpec, fitContent, ImageBlockModel, InsertBelowIcon, NoteDisplayMode, ResetIcon, } from '@blocksuite/blocks';
import { AIPenIcon, ChatWithAIIcon } from '../_common/icons.js';
import { insertFromMarkdown } from '../_common/markdown-utils.js';
import { getSurfaceElementFromEditor } from '../_common/selection-utils.js';
import { getAIPanel } from '../ai-panel.js';
import { AIProvider } from '../provider.js';
import { reportResponse } from '../utils/action-reporter.js';
import { getEdgelessCopilotWidget, getService, isMindMapRoot, } from '../utils/edgeless.js';
import { preprocessHtml } from '../utils/html.js';
import { fetchImageToFile } from '../utils/image.js';
import { getCopilotSelectedElems, getEdgelessRootFromEditor, getEdgelessService, } from '../utils/selection-utils.js';
import { EXCLUDING_INSERT_ACTIONS, generatingStages } from './consts.js';
export function getElementToolbar(host) {
    const rootBlockId = host.doc.root?.id;
    const elementToolbar = host.view.getWidget(EDGELESS_ELEMENT_TOOLBAR_WIDGET, rootBlockId);
    return elementToolbar;
}
export function getTriggerEntry(host) {
    const copilotWidget = getEdgelessCopilotWidget(host);
    return copilotWidget.visible ? 'selection' : 'toolbar';
}
export function discard(panel, _) {
    return {
        name: 'Discard',
        icon: DeleteIcon,
        showWhen: () => !!panel.answer,
        handler: () => {
            panel.discard();
        },
    };
}
export function retry(panel) {
    return {
        name: 'Retry',
        icon: ResetIcon,
        handler: () => {
            reportResponse('result:retry');
            panel.generate();
        },
    };
}
export function createInsertResp(id, handler, host, ctx, buttonText = 'Insert below') {
    return {
        name: buttonText,
        icon: InsertBelowIcon,
        showWhen: () => {
            const panel = getAIPanel(host);
            return !EXCLUDING_INSERT_ACTIONS.includes(id) && !!panel.answer;
        },
        handler: () => {
            reportResponse('result:insert');
            handler(host, ctx);
            const panel = getAIPanel(host);
            panel.hide();
        },
    };
}
export function useAsCaption(id, host) {
    return {
        name: 'Use as caption',
        icon: AIPenIcon,
        showWhen: () => {
            const panel = getAIPanel(host);
            return id === 'generateCaption' && !!panel.answer;
        },
        handler: () => {
            reportResponse('result:use-as-caption');
            const panel = getAIPanel(host);
            const caption = panel.answer;
            if (!caption)
                return;
            const selectedElements = getCopilotSelectedElems(host);
            if (selectedElements.length !== 1)
                return;
            const imageBlock = selectedElements[0];
            if (!(imageBlock instanceof ImageBlockModel))
                return;
            host.doc.updateBlock(imageBlock, { caption });
            panel.hide();
        },
    };
}
const defaultHandler = (host) => {
    const doc = host.doc;
    const panel = getAIPanel(host);
    const edgelessCopilot = getEdgelessCopilotWidget(host);
    const bounds = edgelessCopilot.determineInsertionBounds(800, 95);
    doc.transact(() => {
        const noteBlockId = doc.addBlock('affine:note', {
            xywh: bounds.serialize(),
            displayMode: NoteDisplayMode.EdgelessOnly,
        }, doc.root.id);
        insertFromMarkdown(host, panel.answer, noteBlockId)
            .then(() => {
            const service = getService(host);
            service.selection.set({
                elements: [noteBlockId],
                editing: false,
            });
        })
            .catch(err => {
            console.error(err);
        });
    });
};
const imageHandler = (host) => {
    const aiPanel = getAIPanel(host);
    // `DataURL` or `URL`
    const data = aiPanel.answer;
    if (!data)
        return;
    const edgelessCopilot = getEdgelessCopilotWidget(host);
    const bounds = edgelessCopilot.determineInsertionBounds();
    edgelessCopilot.hideCopilotPanel();
    aiPanel.hide();
    const filename = 'image';
    const imageProxy = host.std.clipboard.configs.get('imageProxy');
    fetchImageToFile(data, filename, imageProxy)
        .then(img => {
        if (!img)
            return;
        const edgelessRoot = getEdgelessRootFromEditor(host);
        const { minX, minY } = bounds;
        const [x, y] = edgelessRoot.service.viewport.toViewCoord(minX, minY);
        host.doc.transact(() => {
            edgelessRoot.addImages([img], [x, y], true).catch(console.error);
        });
    })
        .catch(console.error);
};
export const responses = {
    expandMindmap: (host, ctx) => {
        const [surface] = host.doc.getBlockByFlavour('affine:surface');
        const elements = ctx.get()['selectedElements'];
        const data = ctx.get();
        queueMicrotask(() => {
            getAIPanel(host).hide();
        });
        const mindmap = elements[0].group;
        if (!data?.node)
            return;
        if (data.node.children) {
            data.node.children.forEach(childTree => {
                mindmap.addTree(elements[0].id, childTree);
            });
            const subtree = mindmap.getNode(elements[0].id);
            if (!subtree)
                return;
            surface.doc.transact(() => {
                const updateNodeSize = (node) => {
                    fitContent(node.element);
                    node.children.forEach(child => {
                        updateNodeSize(child);
                    });
                };
                updateNodeSize(subtree);
            });
            setTimeout(() => {
                const edgelessService = getEdgelessService(host);
                edgelessService.selection.set({
                    elements: [subtree.element.id],
                    editing: false,
                });
            });
        }
    },
    brainstormMindmap: (host, ctx) => {
        const aiPanel = getAIPanel(host);
        const edgelessService = getEdgelessService(host);
        const edgelessCopilot = getEdgelessCopilotWidget(host);
        const selectionRect = edgelessCopilot.selectionModelRect;
        const [surface] = host.doc.getBlockByFlavour('affine:surface');
        const elements = ctx.get()['selectedElements'];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = ctx.get();
        let newGenerated = true;
        // This means regenerate
        if (isMindMapRoot(elements[0])) {
            const mindmap = elements[0].group;
            const xywh = mindmap.tree.element.xywh;
            surface.removeElement(mindmap.id);
            if (data.node) {
                data.node.xywh = xywh;
                newGenerated = false;
            }
        }
        edgelessCopilot.hideCopilotPanel();
        aiPanel.hide();
        const mindmapId = surface.addElement({
            type: 'mindmap',
            children: data.node,
            style: data.style,
        });
        edgelessService.telemetryService?.track('CanvasElementAdded', {
            control: 'ai',
            page: 'whiteboard editor',
            module: 'toolbar',
            segment: 'toolbar',
            type: 'mindmap',
        });
        const mindmap = surface.getElementById(mindmapId);
        host.doc.transact(() => {
            mindmap.childElements.forEach(shape => {
                fitContent(shape);
            });
        });
        queueMicrotask(() => {
            if (newGenerated && selectionRect) {
                mindmap.moveTo([
                    selectionRect.x,
                    selectionRect.y,
                    selectionRect.width,
                    selectionRect.height,
                ]);
            }
        });
        // This is a workaround to make sure mindmap and other microtask are done
        setTimeout(() => {
            edgelessService.viewport.setViewportByBound(mindmap.elementBound, [20, 20, 20, 20], true);
            edgelessService.selection.set({
                elements: [mindmap.tree.element.id],
                editing: false,
            });
        });
    },
    makeItReal: (host, ctx) => {
        const aiPanel = getAIPanel(host);
        let html = aiPanel.answer;
        if (!html)
            return;
        html = preprocessHtml(html);
        const edgelessCopilot = getEdgelessCopilotWidget(host);
        const [surface] = host.doc.getBlockByFlavour('affine:surface');
        const data = ctx.get();
        const bounds = edgelessCopilot.determineInsertionBounds(data['width'] || 800, data['height'] || 600);
        edgelessCopilot.hideCopilotPanel();
        aiPanel.hide();
        const edgelessRoot = getEdgelessRootFromEditor(host);
        host.doc.transact(() => {
            edgelessRoot.doc.addBlock(EmbedHtmlBlockSpec.schema.model.flavour, {
                html,
                design: 'ai:makeItReal', // as tag
                xywh: bounds.serialize(),
            }, surface.id);
        });
    },
    createSlides: (host, ctx) => {
        const data = ctx.get();
        const contents = data.contents;
        if (!contents)
            return;
        const images = data.images;
        const service = host.spec.getService('affine:page');
        (async function () {
            for (let i = 0; i < contents.length - 1; i++) {
                const image = images[i];
                const content = contents[i];
                const job = service.createTemplateJob('template');
                await Promise.all(image.map(({ id, url }) => fetch(url)
                    .then(res => res.blob())
                    .then(blob => job.job.assets.set(id, blob))));
                await job.insertTemplate(content);
                getSurfaceElementFromEditor(host).refresh();
            }
        })().catch(console.error);
    },
    createImage: imageHandler,
    processImage: imageHandler,
    filterImage: imageHandler,
};
const getButtonText = {
    brainstormMindmap: variants => {
        return variants?.regenerate ? 'Replace' : undefined;
    },
};
export function getInsertAndReplaceHandler(id, host, ctx, variants) {
    const handler = responses[id] ?? defaultHandler;
    const buttonText = getButtonText[id]?.(variants) ?? undefined;
    return createInsertResp(id, handler, host, ctx, buttonText);
}
export function actionToResponse(id, host, ctx, variants) {
    return {
        responses: [
            {
                name: 'Response',
                items: [
                    {
                        name: 'Continue in chat',
                        icon: ChatWithAIIcon,
                        handler: () => {
                            reportResponse('result:continue-in-chat');
                            const panel = getAIPanel(host);
                            AIProvider.slots.requestContinueInChat.emit({
                                host: host,
                                show: true,
                            });
                            panel.hide();
                        },
                    },
                    getInsertAndReplaceHandler(id, host, ctx, variants),
                    useAsCaption(id, host),
                    retry(getAIPanel(host)),
                    discard(getAIPanel(host), getEdgelessCopilotWidget(host)),
                ],
            },
        ],
        actions: [],
    };
}
export function actionToGenerating(id, generatingIcon) {
    return {
        generatingIcon,
        stages: generatingStages[id],
    };
}
export function actionToErrorResponse(panel, id, host, ctx, variants) {
    return {
        upgrade: () => {
            AIProvider.slots.requestUpgradePlan.emit({ host: panel.host });
            panel.hide();
        },
        login: () => {
            AIProvider.slots.requestLogin.emit({ host: panel.host });
            panel.hide();
        },
        cancel: () => {
            panel.hide();
        },
        responses: [
            {
                name: 'Response',
                items: [getInsertAndReplaceHandler(id, host, ctx, variants)],
            },
            {
                name: '',
                items: [
                    retry(getAIPanel(host)),
                    discard(getAIPanel(host), getEdgelessCopilotWidget(host)),
                ],
            },
        ],
    };
}
//# sourceMappingURL=edgeless-response.js.map