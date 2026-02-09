import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/font-family-panel.js';
import '../../edgeless/components/panel/size-panel.js';
import '../../edgeless/components/panel/font-weight-and-style-panel.js';
import '../../edgeless/components/panel/align-panel.js';
import { LitElement, type TemplateResult } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeTextMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeTextMenu extends EdgelessChangeTextMenu_base {
    static styles: import("lit").CSSResult;
    accessor elements: BlockSuite.EdgelessTextModelType[];
    accessor elementType: BlockSuite.EdgelessTextModelKeyType;
    accessor edgeless: EdgelessRootBlockComponent;
    get service(): import("@blocksuite/blocks").EdgelessRootService;
    private _updateElementBound;
    private _setTextColor;
    private _setTextAlign;
    private _setFontFamily;
    private _setFontSize;
    private _setFontWeightAndStyle;
    render(): Iterable<symbol | TemplateResult<1>>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-text-menu': EdgelessChangeTextMenu;
    }
}
export {};
//# sourceMappingURL=change-text-menu.d.ts.map