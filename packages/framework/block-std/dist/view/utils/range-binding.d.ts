import { RangeManager } from './range-manager.js';
/**
 * Two-way binding between native range and text selection
 */
export declare class RangeBinding {
    manager: RangeManager;
    get selectionManager(): import("../../selection/manager.js").SelectionManager;
    get rangeManager(): RangeManager;
    get host(): import("../index.js").EditorHost;
    private _prevTextSelection;
    private _compositionStartCallback;
    isComposing: boolean;
    constructor(manager: RangeManager);
    private _onStdSelectionChanged;
    private _onNativeSelectionChanged;
    private _onBeforeInput;
    private _onCompositionStart;
    private _onCompositionEnd;
}
//# sourceMappingURL=range-binding.d.ts.map