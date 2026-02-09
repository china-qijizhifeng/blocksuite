import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { type UIEventHandler, UIEventStateContext } from './base.js';
declare const eventNames: readonly ["click", "doubleClick", "tripleClick", "pointerDown", "pointerMove", "pointerUp", "pointerOut", "dragStart", "dragMove", "dragEnd", "keyDown", "keyUp", "selectionChange", "compositionStart", "compositionUpdate", "compositionEnd", "cut", "copy", "paste", "beforeInput", "blur", "focus", "drop", "contextMenu", "wheel"];
export type EventName = (typeof eventNames)[number];
export type EventOptions = {
    flavour?: string;
    path?: string[];
};
export type EventHandlerRunner = {
    fn: UIEventHandler;
    flavour?: string;
    path?: string[];
};
export type EventScope = {
    runners: EventHandlerRunner[];
    flavours: string[];
    paths: string[][];
};
export declare class UIEventDispatcher {
    std: BlockSuite.Std;
    get active(): boolean;
    get host(): HTMLElement;
    private get _currentSelections();
    private _handlersMap;
    private _pointerControl;
    private _keyboardControl;
    private _rangeControl;
    private _clipboardControl;
    private _active;
    disposables: DisposableGroup;
    /**
     * @deprecated
     *
     * This property is deprecated and will be removed in the future.
     */
    slots: {
        parentScaleChanged: Slot<number>;
        editorHostPanned: Slot<void>;
    };
    constructor(std: BlockSuite.Std);
    private _getEventScope;
    private _buildEventScopeByTarget;
    private _calculatePath;
    private _buildEventScopeBySelection;
    private _bindEvents;
    mount(): void;
    unmount(): void;
    run(name: EventName, context: UIEventStateContext, scope?: EventScope): void;
    add(name: EventName, handler: UIEventHandler, options?: EventOptions): () => void;
    bindHotkey: (keymap: Record<string, UIEventHandler>, options?: EventOptions | undefined) => () => void;
    buildEventScope(name: EventName, flavours: string[], paths: string[][]): EventScope | undefined;
}
export {};
//# sourceMappingURL=dispatcher.d.ts.map