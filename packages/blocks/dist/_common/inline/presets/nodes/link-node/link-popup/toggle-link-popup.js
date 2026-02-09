import './link-popup.js';
import { LinkPopup } from './link-popup.js';
export function toggleLinkPopup(inlineEditor, type, targetInlineRange, abortController) {
    const popup = new LinkPopup();
    popup.inlineEditor = inlineEditor;
    popup.type = type;
    popup.targetInlineRange = targetInlineRange;
    popup.abortController = abortController;
    document.body.append(popup);
    return popup;
}
//# sourceMappingURL=toggle-link-popup.js.map