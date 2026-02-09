import { BlocksUtils, EmbedHtmlBlockSpec, EmbedHtmlModel, FrameBlockModel, } from '@blocksuite/blocks';
import { copilotConfig } from '../copilot-service/copilot-config.js';
import { FastImage2ImageServiceKind, Text2ImageServiceKind, } from '../copilot-service/service-base.js';
import { demoScript } from '../demo-script.js';
import { frameToCanvas, getEdgelessRootFromEditor, getEdgelessService, getFirstImageInFrame, getRootService, getSurfaceElementFromEditor, selectedToCanvas, selectedToPng, } from '../utils/selection-utils.js';
import { editImage, jpegBase64ToFile } from './edit-image.js';
import { genHtml } from './gen-html.js';
export class AIEdgelessLogic {
    get autoGen() {
        return this.unsub !== undefined;
    }
    get collection() {
        return this.host.doc.collection;
    }
    get host() {
        return this.getHost();
    }
    constructor(getHost) {
        this.getHost = getHost;
        this.targets = {};
        this.fromFrame = '';
        this.toggleAutoGen = () => {
            if (this.unsub) {
                this.unsub();
                this.unsub = undefined;
                return;
            }
            const edgeless = getEdgelessRootFromEditor(this.host);
            this.unsub = edgeless.surfaceBlockModel.elementUpdated.on(() => {
                this.createImageFromFrame().catch(console.error);
            }).dispose;
        };
        this.makeItReal = async () => {
            const png = await selectedToPng(this.host);
            if (!png) {
                alert('Please select some shapes first');
                return;
            }
            const edgelessRoot = getEdgelessRootFromEditor(this.host);
            const { notes } = BlocksUtils.splitElements(edgelessRoot.service.selection.selectedElements);
            // @ts-ignore
            const htmlBlock = notes.flatMap(v => v.children.filter(v => {
                if (v instanceof EmbedHtmlModel) {
                    return v.html && v.design;
                }
                else {
                    return false;
                }
            }))[0];
            const html = await genHtml(png, htmlBlock);
            if (!html) {
                return;
            }
            edgelessRoot.doc.addBlock(EmbedHtmlBlockSpec.schema.model.flavour, { html, design: png, xywh: '[0, 400, 400, 200]' }, edgelessRoot.surface.model.id);
        };
        this.htmlBlockDemo = () => {
            const edgelessRoot = getEdgelessRootFromEditor(this.host);
            edgelessRoot.doc.addBlock(EmbedHtmlBlockSpec.schema.model.flavour, { html: demoScript, xywh: '[0, 400, 400, 200]' }, edgelessRoot.surface.model.id);
        };
        this.editImage = async () => {
            const canvas = await selectedToCanvas(this.host);
            if (!canvas) {
                alert('Please select some shapes first');
                return;
            }
            canvas.toBlob(blob => {
                if (blob) {
                    const prompt = document.getElementById('copilot-panel-edit-image-prompt')?.value ?? '';
                    editImage(prompt, canvas)
                        ?.then(b64 => {
                        if (!b64) {
                            return;
                        }
                        const imgFile = jpegBase64ToFile(b64, 'img');
                        const edgelessRoot = getEdgelessRootFromEditor(this.host);
                        edgelessRoot.addImages([imgFile]).catch(console.error);
                    })
                        .catch(console.error);
                }
            });
        };
        this.createImage = async () => {
            const edgelessRoot = getEdgelessRootFromEditor(this.host);
            const prompt = document.getElementById('copilot-panel-create-image-prompt')?.value ?? '';
            if (!prompt) {
                alert('Please enter some prompt first');
                return;
            }
            const file = await copilotConfig
                .getService('text to image', Text2ImageServiceKind)
                .generateImage(prompt);
            if (file) {
                await edgelessRoot.addImages([file]);
            }
        };
        this.createImageFromFrame = async () => {
            const from = this.host.doc.getBlockById(this.fromFrame ?? '');
            if (!from) {
                return;
            }
            const surface = getSurfaceElementFromEditor(this.host);
            const targets = surface.model.elementModels.filter(el => el.type === 'connector')
                .filter(v => v.source.id === from.id)
                .flatMap(v => {
                const block = this.host.doc.getBlockById(v.target.id ?? '');
                if (block instanceof FrameBlockModel) {
                    return [block];
                }
                return [];
            });
            const canvas = await frameToCanvas(from, this.host);
            if (!canvas) {
                return;
            }
            const callback = (blob) => {
                const run = () => {
                    if (blob) {
                        const dataURL = canvas.toDataURL();
                        const genImage = async (model) => {
                            const prompt = model.title.toString();
                            if (!prompt) {
                                return;
                            }
                            const hash = prompt + dataURL;
                            let target = this.targets[model.id];
                            if (!target) {
                                this.targets[model.id] = target = {
                                    lastHash: '',
                                    request: copilotConfig
                                        .getService('real time image to image', FastImage2ImageServiceKind)
                                        .createFastRequest(),
                                };
                            }
                            if (target.lastHash === hash) {
                                return;
                            }
                            target.lastHash = hash;
                            // const b64 = dataURL;
                            const b64 = await target.request(prompt, dataURL);
                            if (!b64) {
                                return;
                            }
                            const surface = getSurfaceElementFromEditor(this.host);
                            let image = getFirstImageInFrame(model, this.host);
                            const imgFile = jpegBase64ToFile(b64, 'img');
                            const sourceId = await this.host.doc.blobSync.set(imgFile);
                            if (!image) {
                                image = surface.edgeless.service.addBlock('affine:image', {
                                    size: imgFile.size,
                                    xywh: model.xywh,
                                }, surface.model);
                            }
                            surface.edgeless.service.updateElement(image, {
                                sourceId,
                            });
                        };
                        targets.forEach(v => {
                            genImage(v).catch(console.error);
                        });
                    }
                };
                run();
            };
            canvas.toBlob(callback);
        };
    }
    convertToMindMap() {
        const blocks = getRootService(this.host).selectedBlocks;
        const toTreeNode = (block) => {
            return {
                text: block.text?.toString() ?? '',
                children: block.children.map(toTreeNode),
            };
        };
        const texts = [];
        const others = [];
        blocks.forEach(v => {
            if (v.model.flavour === 'affine:paragraph') {
                texts.push(v.model);
            }
            else {
                others.push(v.model);
            }
        });
        let node;
        if (texts.length === 1) {
            node = {
                text: texts[0].text?.toString() ?? '',
                children: others.map(v => toTreeNode(v)),
            };
        }
        else if (blocks.length === 1) {
            node = toTreeNode(blocks[0].model);
        }
        else {
            node = {
                text: 'Root',
                children: blocks.map(v => toTreeNode(v.model)),
            };
        }
        this.drawMindMap(node);
    }
    drawMindMap(treeNode, options) {
        BlocksUtils.mindMap.drawInEdgeless(getEdgelessService(this.host), treeNode, options);
    }
}
//# sourceMappingURL=logic.js.map