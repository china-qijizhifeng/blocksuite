import { ShadowlessElement } from '@blocksuite/block-std';
export declare class LinkNode extends ShadowlessElement {
    static styles: import("lit").CSSResult;
    accessor link: string;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-link-node': LinkNode;
    }
}
//# sourceMappingURL=link-node.d.ts.map