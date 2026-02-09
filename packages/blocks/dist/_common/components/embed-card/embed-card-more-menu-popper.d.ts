import './../button.js';
import { LitElement } from 'lit';
import type { EmbedToolbarBlockElement } from './type.js';
declare const EmbedCardMoreMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EmbedCardMoreMenu extends EmbedCardMoreMenu_base {
    static styles: import("lit").CSSResult;
    accessor block: EmbedToolbarBlockElement;
    accessor abortController: AbortController;
    private get _model();
    private get _std();
    private get _doc();
    get _openButtonDisabled(): boolean;
    private _open;
    private _copyBlock;
    private _duplicateBlock;
    private _refreshData;
    private _peekable;
    private _peek;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'embed-card-more-menu': EmbedCardMoreMenu;
    }
}
export {};
//# sourceMappingURL=embed-card-more-menu-popper.d.ts.map