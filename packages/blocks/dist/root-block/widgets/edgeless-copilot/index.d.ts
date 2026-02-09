import { WidgetElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { AIItemGroupConfig } from '../../../_common/components/ai-item/types.js';
import { Bound } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { RootBlockModel } from '../../root-model.js';
export declare const AFFINE_EDGELESS_COPILOT_WIDGET = "affine-edgeless-copilot-widget";
export declare class EdgelessCopilotWidget extends WidgetElement<RootBlockModel, EdgelessRootBlockComponent> {
    get visible(): boolean;
    get selectionRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    get selectionModelRect(): DOMRect;
    get edgeless(): EdgelessRootBlockComponent;
    set visible(visible: boolean);
    static styles: import("lit").CSSResult;
    private accessor _selectionRect;
    private accessor _visible;
    private _selectionModelRect;
    private _clickOutsideOff;
    private _listenClickOutsideId;
    private _copilotPanel;
    accessor selectionElem: HTMLDivElement;
    groups: AIItemGroupConfig[];
    private _updateSelection;
    private _watchClickOutside;
    private _showCopilotPanel;
    determineInsertionBounds(width?: number, height?: number): Bound;
    hideCopilotPanel(): void;
    lockToolbar(disabled: boolean): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_EDGELESS_COPILOT_WIDGET]: EdgelessCopilotWidget;
    }
}
//# sourceMappingURL=index.d.ts.map