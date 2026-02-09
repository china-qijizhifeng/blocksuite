import type { InlineEditor, KeyboardBindingContext } from '@blocksuite/inline';
import { type AttributeRenderer, type BaseTextAttributes, type DeltaInsert, type InlineRange, type KeyboardBindingHandler } from '@blocksuite/inline';
import type { Y } from '@blocksuite/store';
import { type ZodObject, type ZodTypeAny } from 'zod';
export type InlineSpecs<TextAttributes extends BaseTextAttributes = BaseTextAttributes> = {
    name: string;
    schema: ZodTypeAny;
    match: (delta: DeltaInsert<TextAttributes>) => boolean;
    renderer: AttributeRenderer<TextAttributes>;
    embed?: boolean;
};
export type InlineMarkdownMatchAction<in TextAttributes extends BaseTextAttributes = BaseTextAttributes> = (props: {
    inlineEditor: InlineEditor<TextAttributes>;
    prefixText: string;
    inlineRange: InlineRange;
    pattern: RegExp;
    undoManager: Y.UndoManager;
}) => ReturnType<KeyboardBindingHandler>;
export type InlineMarkdownMatch<TextAttributes extends BaseTextAttributes = BaseTextAttributes> = {
    name: string;
    pattern: RegExp;
    action: InlineMarkdownMatchAction<TextAttributes>;
};
export declare class InlineManager<in out TextAttributes extends BaseTextAttributes = BaseTextAttributes> {
    private _specs;
    get specs(): InlineSpecs<TextAttributes>[];
    private _markdownMatches;
    get markdownMatches(): InlineMarkdownMatch<TextAttributes>[];
    registerSpecs(specs: InlineSpecs<TextAttributes>[]): void;
    registerMarkdownMatches(markdownMatches: InlineMarkdownMatch<TextAttributes>[]): void;
    markdownShortcutHandler: (context: KeyboardBindingContext<TextAttributes>, undoManager: Y.UndoManager) => boolean;
    embedChecker: (delta: DeltaInsert<TextAttributes>) => boolean;
    getRenderer(): AttributeRenderer<TextAttributes>;
    getSchema(): ZodObject<Record<keyof TextAttributes, ZodTypeAny>>;
}
//# sourceMappingURL=inline-manager.d.ts.map