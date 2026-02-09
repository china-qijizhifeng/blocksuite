import './components/lang-button.js';
import { WidgetElement } from '@blocksuite/block-std';
import type { CodeBlockModel } from '../../../code-block/code-model.js';
import type { CodeBlockComponent } from '../../../code-block/index.js';
export declare const AFFINE_CODE_LANGUAGE_LIST_WIDGET = "affine-code-language-list-widget";
export declare class AffineCodeLanguageListWidget extends WidgetElement<CodeBlockModel, CodeBlockComponent> {
    private _isActivated;
    private _hoverController;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_CODE_LANGUAGE_LIST_WIDGET]: AffineCodeLanguageListWidget;
    }
}
//# sourceMappingURL=index.d.ts.map