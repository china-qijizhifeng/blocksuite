import type { InlineEditor } from '../inline-editor.js';
import { type BaseTextAttributes } from '../utils/index.js';
export declare class EventService<TextAttributes extends BaseTextAttributes> {
    readonly editor: InlineEditor<TextAttributes>;
    get isComposing(): boolean;
    get inlineRangeProvider(): import("../inline-editor.js").InlineRangeProvider | null;
    private _isComposing;
    private _previousAnchor;
    private _previousFocus;
    private _compositionInlineRange;
    constructor(editor: InlineEditor<TextAttributes>);
    private _isRangeCompletelyInRoot;
    private _onSelectionChange;
    private _onCompositionStart;
    private _onCompositionUpdate;
    private _onCompositionEnd;
    private _onBeforeInput;
    private _onKeyDown;
    private _onClick;
    mount: () => void;
}
//# sourceMappingURL=event.d.ts.map