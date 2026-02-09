export class ReferenceNodeConfig {
    constructor() {
        this._customIcon = null;
        this._customTitle = null;
        this._customContent = null;
        this._Doc = null;
        this._interactable = true;
    }
    get customIcon() {
        return this._customIcon;
    }
    get customTitle() {
        return this._customTitle;
    }
    get doc() {
        return this._Doc;
    }
    get customContent() {
        return this._customContent;
    }
    get interactable() {
        return this._interactable;
    }
    setInteractable(interactable) {
        this._interactable = interactable;
    }
    setCustomContent(content) {
        this._customContent = content;
    }
    setCustomIcon(icon) {
        this._customIcon = icon;
    }
    setCustomTitle(title) {
        this._customTitle = title;
    }
    setDoc(doc) {
        this._Doc = doc;
    }
}
//# sourceMappingURL=reference-config.js.map