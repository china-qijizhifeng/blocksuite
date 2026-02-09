import type { BlockElement } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import { nothing } from 'lit';
export interface BlockCaptionProps {
    caption: string | null | undefined;
}
declare const BlockCaptionEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BlockCaptionEditor<Model extends BlockModel<BlockCaptionProps> = BlockModel<BlockCaptionProps>> extends BlockCaptionEditor_base {
    static styles: import("lit").CSSResult;
    private _focus;
    accessor block: BlockElement<Model> & {
        isInSurface?: boolean;
    };
    accessor display: boolean;
    accessor caption: string | null | undefined;
    accessor input: HTMLInputElement;
    private _onInputChange;
    private _onInputFocus;
    private _onInputBlur;
    private _onCaptionKeydown;
    show: () => void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'block-caption-editor': BlockCaptionEditor;
    }
}
export {};
//# sourceMappingURL=block-caption.d.ts.map