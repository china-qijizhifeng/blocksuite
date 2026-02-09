import './components/code-toolbar.js';
import { WidgetElement } from '@blocksuite/block-std';
import type { CodeBlockComponent } from '../../../code-block/code-block.js';
import type { CodeBlockModel } from '../../../code-block/code-model.js';
import type { CodeToolbarItem, CodeToolbarMoreItem } from './types.js';
export declare const AFFINE_CODE_TOOLBAR_WIDGET = "affine-code-toolbar-widget";
export declare class AffineCodeToolbarWidget extends WidgetElement<CodeBlockModel, CodeBlockComponent> {
    private _hoverController;
    private _isActivated;
    items: CodeToolbarItem[];
    moreItems: CodeToolbarMoreItem[];
    private _setHoverController;
    clearConfig(): this;
    addItems(items: CodeToolbarItem[], index?: number): this;
    addMoreItems(menuItemsBuilder: CodeToolbarMoreItem[], index?: number): this;
    setupDefaultConfig(): this;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_CODE_TOOLBAR_WIDGET]: AffineCodeToolbarWidget;
    }
}
//# sourceMappingURL=index.d.ts.map