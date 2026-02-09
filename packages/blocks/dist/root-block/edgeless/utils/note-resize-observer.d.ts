import type { EditorHost } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/global/utils';
export declare class NoteResizeObserver {
    private _observer;
    /**
     * Observation will fire when observation starts if Element is being rendered, and Element’s size is not 0,0.
     * https://w3c.github.io/csswg-drafts/resize-observer/#resize-observer-interface
     *
     * So we need to cache observed element.
     */
    private _cachedElements;
    private _lastRects;
    slots: {
        resize: Slot<Map<string, [DOMRectReadOnly, (DOMRectReadOnly | undefined)?]>>;
    };
    constructor();
    private _onResize;
    resetListener(editorHost: EditorHost): void;
    dispose(): void;
}
//# sourceMappingURL=note-resize-observer.d.ts.map