import { ShadowlessElement } from '@blocksuite/block-std';
import { type AttributeRenderer, type DeltaInsert, type InlineRangeProvider, type KeyboardBindingContext } from '@blocksuite/inline';
import type { Y } from '@blocksuite/store';
import { Text } from '@blocksuite/store';
import { z } from 'zod';
import type { AffineInlineEditor, AffineTextAttributes } from '../../inline/presets/affine-inline-specs.js';
declare const RichText_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class RichText extends RichText_base {
    #private;
    get inlineEditorContainer(): HTMLDivElement;
    get inlineEditor(): AffineInlineEditor | null;
    private get _yText();
    static styles: import("lit").CSSResult;
    private accessor _inlineEditorContainer;
    private _inlineEditor;
    accessor yText: Y.Text | Text;
    accessor attributesSchema: z.ZodSchema | undefined;
    accessor attributeRenderer: AttributeRenderer | undefined;
    accessor inlineEventSource: HTMLElement | undefined;
    accessor markdownShortcutHandler: (<TextAttributes extends AffineTextAttributes = AffineTextAttributes>(context: KeyboardBindingContext<TextAttributes>, undoManager: Y.UndoManager) => boolean) | undefined;
    accessor readonly: boolean;
    accessor inlineRangeProvider: InlineRangeProvider | undefined;
    accessor undoManager: Y.UndoManager;
    accessor enableClipboard: boolean;
    accessor enableUndoRedo: boolean;
    accessor enableAutoScrollHorizontally: boolean;
    accessor wrapText: boolean;
    accessor enableFormat: boolean;
    accessor verticalScrollContainerGetter: (() => HTMLElement | null) | undefined;
    private _init;
    private _onStackItemAdded;
    private _onStackItemPopped;
    private _onCopy;
    private _onCut;
    private _onPaste;
    private _unmount;
    accessor embedChecker: <TextAttributes extends AffineTextAttributes = AffineTextAttributes>(delta: DeltaInsert<TextAttributes>) => boolean;
    getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rich-text': RichText;
    }
}
export {};
//# sourceMappingURL=rich-text.d.ts.map