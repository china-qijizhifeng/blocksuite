import { CSSResult, LitElement } from 'lit';
export class ShadowlessElement extends LitElement {
    static { this.disableShadowRoot = true; }
    createRenderRoot() {
        return this.constructor.disableShadowRoot
            ? this
            : super.createRenderRoot();
    }
    static finalizeStyles(styles) {
        let elementStyles = super.finalizeStyles(styles);
        if (this.disableShadowRoot) {
            // XXX: This breaks component encapsulation and applies styles to the document.
            // These styles should be manually scoped.
            elementStyles.forEach((s) => {
                if (s instanceof CSSResult && typeof document !== 'undefined') {
                    const styleRoot = document.head;
                    const style = document.createElement('style');
                    style.textContent = s.cssText;
                    styleRoot.append(style);
                }
                else {
                    console.error('unreachable');
                }
            });
            elementStyles = [];
        }
        return elementStyles;
    }
}
//# sourceMappingURL=shadowless-element.js.map