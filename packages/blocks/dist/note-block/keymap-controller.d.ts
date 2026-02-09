import type { BlockElement } from '@blocksuite/block-std';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
export declare class KeymapController implements ReactiveController {
    private get _std();
    private _anchorSel;
    private _focusBlock;
    host: ReactiveControllerHost & BlockElement;
    constructor(host: ReactiveControllerHost & BlockElement);
    private _reset;
    private _onArrowDown;
    private _onArrowUp;
    private _onShiftArrowDown;
    private _onBlockShiftDown;
    private _onShiftArrowUp;
    private _onBlockShiftUp;
    private _onEsc;
    private _onEnter;
    private _onSelectAll;
    private _bindQuickActionHotKey;
    private _bindTextConversionHotKey;
    private _bindMoveBlockHotKey;
    hostConnected(): void;
    hostDisconnected(): void;
    bind: () => void;
}
//# sourceMappingURL=keymap-controller.d.ts.map