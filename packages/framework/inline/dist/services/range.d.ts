import * as Y from 'yjs';
import type { VLine } from '../components/v-line.js';
import type { InlineEditor } from '../inline-editor.js';
import type { InlineRange, InlineRangeUpdatedProp, TextPoint } from '../types.js';
import type { BaseTextAttributes } from '../utils/base-attributes.js';
export declare class RangeService<TextAttributes extends BaseTextAttributes> {
    readonly editor: InlineEditor<TextAttributes>;
    get yText(): Y.Text;
    get inlineRangeProvider(): import("../inline-editor.js").InlineRangeProvider | null;
    get rootElement(): import("../inline-editor.js").InlineRootElement<TextAttributes>;
    get lastStartRelativePosition(): Y.RelativePosition | null;
    get lastEndRelativePosition(): Y.RelativePosition | null;
    private _inlineRange;
    private _lastStartRelativePosition;
    private _lastEndRelativePosition;
    constructor(editor: InlineEditor<TextAttributes>);
    private _applyInlineRange;
    onInlineRangeUpdated: ([newInlineRange, sync,]: InlineRangeUpdatedProp) => Promise<void>;
    getNativeSelection(): Selection | null;
    getNativeRange(): Range | null;
    getInlineRange: () => InlineRange | null;
    getInlineRangeFromElement: (element: Element) => InlineRange | null;
    getTextPoint(rangeIndex: InlineRange['index']): TextPoint;
    getLine(rangeIndex: InlineRange['index']): {
        line: VLine;
        lineIndex: number;
        rangeIndexRelatedToLine: number;
    };
    isValidInlineRange: (inlineRange: InlineRange | null) => boolean;
    /**
     * There are two cases to have the second line:
     * 1. long text auto wrap in span element
     * 2. soft break
     */
    isFirstLine: (inlineRange: InlineRange | null) => boolean;
    /**
     * There are two cases to have the second line:
     * 1. long text auto wrap in span element
     * 2. soft break
     */
    isLastLine: (inlineRange: InlineRange | null) => boolean;
    /**
     * the inline range is synced to the native selection asynchronously
     * if sync is true, the native selection will be synced immediately
     */
    setInlineRange: (inlineRange: InlineRange | null, sync?: boolean) => void;
    focusEnd: () => void;
    focusStart: () => void;
    selectAll: () => void;
    focusIndex: (index: number) => void;
    /**
     * sync the dom selection from inline ranage for **this Editor**
     */
    syncInlineRange: () => void;
    /**
     * calculate the dom selection from inline ranage for **this Editor**
     */
    toDomRange: (inlineRange: InlineRange) => Range | null;
    /**
     * calculate the inline ranage from dom selection for **this Editor**
     * there are three cases when the inline ranage of this Editor is not null:
     * (In the following, "|" mean anchor and focus, each line is a separate Editor)
     * 1. anchor and focus are in this Editor
     *    ```
     *    aaaaaa
     *    b|bbbb|b
     *    cccccc
     *    ```
     *    the inline ranage of second Editor is `{index: 1, length: 4}`, the others are null
     * 2. anchor and focus one in this Editor, one in another Editor
     *    ```
     *    aaa|aaa    aaaaaa
     *    bbbbb|b or bbbbb|b
     *    cccccc     cc|cccc
     *    ```
     *    2.1
     *        the inline ranage of first Editor is `{index: 3, length: 3}`, the second is `{index: 0, length: 5}`,
     *        the third is null
     *    2.2
     *        the inline ranage of first Editor is null, the second is `{index: 5, length: 1}`,
     *        the third is `{index: 0, length: 2}`
     * 3. anchor and focus are in another Editor
     *    ```
     *    aa|aaaa
     *    bbbbbb
     *    cccc|cc
     *    ```
     *    the inline range of first Editor is `{index: 2, length: 4}`,
     *    the second is `{index: 0, length: 6}`, the third is `{index: 0, length: 4}`
     */
    toInlineRange: (range: Range) => InlineRange | null;
}
//# sourceMappingURL=range.d.ts.map