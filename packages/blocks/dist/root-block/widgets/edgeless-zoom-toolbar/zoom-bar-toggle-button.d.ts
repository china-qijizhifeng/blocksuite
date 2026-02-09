import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const ZoomBarToggleButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ZoomBarToggleButton extends ZoomBarToggleButton_base {
    static styles: import("lit").CSSResult;
    private accessor _toggleButton;
    private accessor _showPopper;
    private _abortController;
    accessor edgeless: EdgelessRootBlockComponent;
    private _closeZoomMenu;
    private _toggleZoomMenu;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'zoom-bar-toggle-button': ZoomBarToggleButton;
    }
}
export {};
//# sourceMappingURL=zoom-bar-toggle-button.d.ts.map