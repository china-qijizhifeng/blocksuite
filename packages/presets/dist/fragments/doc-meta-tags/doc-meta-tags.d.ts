import { type SelectTag } from '@blocksuite/blocks';
import type { Doc } from '@blocksuite/store';
import { LitElement } from 'lit';
import { type BacklinkData } from './utils.js';
declare const DocMetaTags_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DocMetaTags extends DocMetaTags_base {
    get pageRoot(): import("@blocksuite/blocks").PageRootBlockComponent;
    get meta(): import("@blocksuite/store").DocCollectionMeta;
    get options(): SelectTag[];
    set options(tags: SelectTag[]);
    get tags(): string[];
    set tags(tags: string[]);
    static styles: import("lit").CSSResult;
    accessor doc: Doc;
    accessor backlinkList: BacklinkData[];
    accessor showSelect: boolean;
    accessor expanded: boolean;
    private _listenBacklinkList;
    private _toggle;
    private _selectTags;
    private _renderTagsInline;
    private _renderBacklinkInline;
    private _renderBacklinkExpanded;
    private _renderTagsExpanded;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'doc-meta-tags': DocMetaTags;
    }
}
export {};
//# sourceMappingURL=doc-meta-tags.d.ts.map