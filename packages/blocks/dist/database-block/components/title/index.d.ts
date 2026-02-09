import { ShadowlessElement } from '@blocksuite/block-std';
import type { Text } from '@blocksuite/store';
declare const DatabaseTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseTitle extends DatabaseTitle_base {
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline").InlineRootElement<import("@blocksuite/blocks").AffineTextAttributes>;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null | undefined;
    static styles: import("lit").CSSResult;
    private accessor richText;
    private accessor isActive;
    accessor titleText: Text;
    accessor readonly: boolean;
    accessor onPressEnterKey: (() => void) | undefined;
    accessor isComposing: boolean;
    private _onKeyDown;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-title': DatabaseTitle;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map