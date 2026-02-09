import type { TextSelection } from '@blocksuite/block-std';
import type { BlockElement } from '../element/block-element.js';
import type { EditorHost } from '../element/lit-host.js';
import { RangeBinding } from './range-binding.js';
/**
 * CRUD for Range and TextSelection
 */
export declare class RangeManager {
    host: EditorHost;
    get value(): Range | null;
    /**
     * Used to mark certain elements so that they are excluded when synchronizing the native range and text selection (such as database block).
     */
    static rangeSyncExcludeAttr: string;
    /**
     * Used to exclude certain elements when using `getSelectedBlockElementsByRange`.
     */
    static rangeQueryExcludeAttr: string;
    readonly binding: RangeBinding;
    constructor(host: EditorHost);
    private _isRangeSyncExcluded;
    clear(): void;
    set(range: Range): void;
    syncTextSelectionToRange(selection: TextSelection): void;
    syncRangeToTextSelection(range: Range, isRangeReversed: boolean): void;
    /**
     * @example
     * aaa
     *   b[bb
     *     ccc
     * ddd
     *   ee]e
     *
     * all mode: [aaa, bbb, ccc, ddd, eee]
     * flat mode: [bbb, ccc, ddd, eee]
     * highest mode: [bbb, ddd]
     *
     * match function will be evaluated before filtering using mode
     */
    getSelectedBlockElementsByRange(range: Range, options?: {
        match?: (el: BlockElement) => boolean;
        mode?: 'all' | 'flat' | 'highest';
    }): BlockElement[];
    textSelectionToRange(selection: TextSelection): Range | null;
    rangeToTextSelection(range: Range, reverse?: boolean): TextSelection | null;
    getClosestBlock(node: Node): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null;
    getClosestInlineEditor(node: Node): import("@blocksuite/inline").InlineEditor<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }> | null;
    queryInlineEditorByPath(path: string): import("@blocksuite/inline").InlineEditor<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }> | null;
}
//# sourceMappingURL=range-manager.d.ts.map