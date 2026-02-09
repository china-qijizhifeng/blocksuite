import { AFFINE_EDGELESS_COPILOT_WIDGET, matchFlavours, MindmapElementModel, } from '@blocksuite/blocks';
export function mindMapToMarkdown(mindmap) {
    let markdownStr = '';
    const traverse = (node, indent = 0) => {
        const text = node.element.text?.toString() ?? '';
        markdownStr += `${'  '.repeat(indent)}- ${text}\n`;
        if (node.children) {
            node.children.forEach(node => traverse(node, indent + 2));
        }
    };
    traverse(mindmap.tree, 0);
    return markdownStr;
}
export function isMindMapRoot(ele) {
    const group = ele?.group;
    return group instanceof MindmapElementModel && group.tree.element === ele;
}
export function isMindmapChild(ele) {
    return ele?.group instanceof MindmapElementModel && !isMindMapRoot(ele);
}
export function getService(host) {
    const edgelessService = host.spec.getService('affine:page');
    return edgelessService;
}
export function getEdgelessCopilotWidget(host) {
    const rootBlockId = host.doc.root?.id;
    const copilotWidget = host.view.getWidget(AFFINE_EDGELESS_COPILOT_WIDGET, rootBlockId);
    return copilotWidget;
}
export function findNoteBlockModel(blockElement) {
    let curBlock = blockElement;
    while (curBlock) {
        if (matchFlavours(curBlock.model, ['affine:note'])) {
            return curBlock.model;
        }
        if (matchFlavours(curBlock.model, ['affine:page', 'affine:surface'])) {
            return null;
        }
        curBlock = curBlock.parentBlockElement;
    }
    return null;
}
//# sourceMappingURL=edgeless.js.map