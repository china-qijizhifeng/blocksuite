import '../buttons/tool-icon-button.js';
import { LitElement } from 'lit';
declare const EdgelessNoteShadowPanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessNoteShadowPanel extends EdgelessNoteShadowPanel_base {
    static styles: import("lit").CSSResult;
    accessor value: string;
    accessor background: string;
    accessor onSelect: (value: string) => void;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-note-shadow-panel': EdgelessNoteShadowPanel;
    }
}
export {};
//# sourceMappingURL=note-shadow-panel.d.ts.map