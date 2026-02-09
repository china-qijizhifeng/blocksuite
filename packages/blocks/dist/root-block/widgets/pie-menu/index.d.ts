/// <reference types="node" resolution-mode="require"/>
import { WidgetElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { IVec } from '../../../surface-block/index.js';
import { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { PieMenuSchema } from './base.js';
import { PieMenu } from './menu.js';
export declare const AFFINE_PIE_MENU_WIDGET = "affine-pie-menu-widget";
export declare class AffinePieMenuWidget extends WidgetElement {
    get isOpen(): boolean;
    get isEnabled(): boolean | undefined;
    get rootElement(): EdgelessRootBlockComponent;
    accessor currentMenu: PieMenu | null;
    mouse: IVec;
    selectOnTrigRelease: {
        allow: boolean;
        timeout?: NodeJS.Timeout;
    };
    private _initPie;
    private _attachMenu;
    private _onMenuClose;
    private _handleKeyUp;
    private _handleCursorPos;
    connectedCallback(): void;
    disconnectedCallback(): void;
    _createMenu(schema: PieMenuSchema, { x, y, widgetElement, }: {
        x: number;
        y: number;
        widgetElement: AffinePieMenuWidget;
    }): PieMenu;
    render(): typeof nothing | PieMenu;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_PIE_MENU_WIDGET]: AffinePieMenuWidget;
    }
}
//# sourceMappingURL=index.d.ts.map