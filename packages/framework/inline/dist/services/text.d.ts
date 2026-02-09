import type { InlineEditor } from '../inline-editor.js';
import type { DeltaInsert, InlineRange } from '../types.js';
import type { BaseTextAttributes } from '../utils/base-attributes.js';
export declare class InlineTextService<TextAttributes extends BaseTextAttributes> {
    readonly editor: InlineEditor<TextAttributes>;
    get yText(): import("yjs").Text;
    readonly transact: (fn: () => void) => void;
    constructor(editor: InlineEditor<TextAttributes>);
    deleteText: (inlineRange: InlineRange) => void;
    insertText: (inlineRange: InlineRange, text: string, attributes?: TextAttributes) => void;
    insertLineBreak: (inlineRange: InlineRange) => void;
    formatText: (inlineRange: InlineRange, attributes: TextAttributes, options?: {
        match?: (delta: DeltaInsert, deltaInlineRange: InlineRange) => boolean;
        mode?: 'replace' | 'merge';
    }) => void;
    resetText: (inlineRange: InlineRange) => void;
    setText: (text: string, attributes?: TextAttributes) => void;
}
//# sourceMappingURL=text.d.ts.map