import type { BlockElement } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { Slot } from '@blocksuite/global/utils';
import { type DeltaInsert } from '@blocksuite/inline';
import type { Doc, DocMeta } from '@blocksuite/store';
import type { AffineTextAttributes } from '../../affine-inline-specs.js';
import type { ReferenceNodeConfig } from './reference-config.js';
export type RefNodeSlots = {
    docLinkClicked: Slot<{
        docId: string;
        blockId?: string;
    }>;
    tagClicked: Slot<{
        tagId: string;
    }>;
};
declare module '@blocksuite/blocks' {
    interface PeekViewService {
        peek(target: AffineReference): void;
    }
}
declare const AffineReference_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AffineReference extends AffineReference_base {
    get inlineEditor(): import("@blocksuite/inline").InlineEditor<AffineTextAttributes>;
    get selfInlineRange(): import("@blocksuite/inline").InlineRange;
    get blockElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    get doc(): Doc;
    get customIcon(): ((reference: AffineReference) => import("lit").TemplateResult) | null;
    get customTitle(): ((reference: AffineReference) => string) | null;
    get customContent(): ((reference: AffineReference) => import("lit").TemplateResult) | null;
    static styles: import("lit").CSSResult;
    private _refAttribute;
    private _whenHover;
    accessor delta: DeltaInsert<AffineTextAttributes>;
    accessor selected: boolean;
    accessor config: ReferenceNodeConfig;
    accessor refMeta: DocMeta | undefined;
    private _updateRefMeta;
    private _onClick;
    connectedCallback(): void;
    willUpdate(_changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-reference': AffineReference;
    }
}
export {};
//# sourceMappingURL=reference-node.d.ts.map