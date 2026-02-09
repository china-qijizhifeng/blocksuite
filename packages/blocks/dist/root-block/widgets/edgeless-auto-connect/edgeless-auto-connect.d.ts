import { WidgetElement } from '@blocksuite/block-std';
import { nothing, type TemplateResult } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { EdgelessRootService } from '../../edgeless/edgeless-root-service.js';
import type { RootBlockModel } from '../../root-model.js';
export declare const AFFINE_EDGELESS_AUTO_CONNECT_WIDGET = "affine-edgeless-auto-connect-widget";
export declare class EdgelessAutoConnectWidget extends WidgetElement<RootBlockModel, EdgelessRootBlockComponent, EdgelessRootService> {
    static styles: import("lit").CSSResult;
    private accessor _show;
    private accessor _pageVisibleElementsMap;
    private accessor _edgelessOnlyNotesSet;
    private accessor _index;
    private _setHostStyle;
    private _initLabels;
    private _getElementsAndCounts;
    private _navigateToNext;
    private _navigateToPrev;
    private _NavigatorComponent;
    private _PageVisibleIndexLabels;
    private _EdgelessOnlyLabels;
    firstUpdated(): void;
    connectedCallback(): void;
    render(): TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-auto-connect-widget': EdgelessAutoConnectWidget;
    }
}
//# sourceMappingURL=edgeless-auto-connect.d.ts.map