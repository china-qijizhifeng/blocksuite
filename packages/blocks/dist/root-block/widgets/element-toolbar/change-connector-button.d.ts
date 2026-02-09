import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/stroke-style-panel.js';
import '../../edgeless/components/panel/color-panel.js';
import './change-text-menu.js';
import { LitElement, nothing, type TemplateResult } from 'lit';
import { type ConnectorElementModel, type StrokeStyle } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
export declare function getMostCommonLineStyle(elements: ConnectorElementModel[]): StrokeStyle | null;
declare const EdgelessChangeConnectorButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeConnectorButton extends EdgelessChangeConnectorButton_base {
    accessor edgeless: EdgelessRootBlockComponent;
    accessor elements: ConnectorElementModel[];
    get doc(): import("@blocksuite/store").Doc;
    get service(): import("@blocksuite/blocks").EdgelessRootService;
    private _setConnectorProp;
    private _setConnectorMode;
    private _setConnectorRough;
    private _setConnectorColor;
    private _setConnectorStrokeWidth;
    private _setConnectorStrokeStyle;
    private _setConnectorStorke;
    private _setConnectorPointStyle;
    private _flipEndpointStyle;
    private _getEndpointIcon;
    private _addLabel;
    private _showAddButtonOrTextMenu;
    render(): Iterable<symbol | TemplateResult<1> | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-connector-button': EdgelessChangeConnectorButton;
    }
}
export declare function renderConnectorButton(edgeless: EdgelessRootBlockComponent, elements?: ConnectorElementModel[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-connector-button.d.ts.map