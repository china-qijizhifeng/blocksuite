import { LitElement } from 'lit';
import type { EmbedHtmlBlockComponent } from '../embed-html-block.js';
export declare class EmbedHtmlFullscreenToolbar extends LitElement {
    private get autoHideToolbar();
    private set autoHideToolbar(value);
    static styles: import("lit").CSSResult;
    private accessor _fullScreenToolbarContainer;
    private accessor _copied;
    private accessor _popperVisible;
    accessor embedHtml: EmbedHtmlBlockComponent;
    private _popSettings;
    copyCode: () => void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'embed-html-fullscreen-toolbar': EmbedHtmlFullscreenToolbar;
    }
}
//# sourceMappingURL=fullscreen-toolbar.d.ts.map