import './page-editor.js';
import './edgeless-editor.js';
import '../fragments/doc-title/doc-title.js';
import '../fragments/doc-meta-tags/doc-meta-tags.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { AbstractEditor, DocMode } from '@blocksuite/blocks';
import { ThemeObserver } from '@blocksuite/blocks';
import type { BlockModel, Doc } from '@blocksuite/store';
import { nothing } from 'lit';
import type { EdgelessEditor } from './edgeless-editor.js';
import type { PageEditor } from './page-editor.js';
declare const AffineEditorContainer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AffineEditorContainer extends AffineEditorContainer_base implements AbstractEditor {
    private get _pageSpecs();
    private get _edgelessSpecs();
    get editor(): EdgelessEditor | PageEditor;
    get host(): import("@blocksuite/block-std").EditorHost;
    get rootModel(): BlockModel<object>;
    static styles: import("lit").CSSResult;
    private accessor _pageEditor;
    private accessor _edgelessEditor;
    /** @deprecated unreliable since pageSpecs can be overridden */
    private accessor _pageRoot;
    /** @deprecated unreliable since edgelessSpecs can be overridden */
    private accessor _edgelessRoot;
    accessor doc: Doc;
    accessor mode: DocMode;
    accessor pageSpecs: import("@blocksuite/block-std").BlockSpec<string, import("@blocksuite/block-std").BlockService<BlockModel<object>>>[];
    accessor edgelessSpecs: import("@blocksuite/block-std").BlockSpec<string, import("@blocksuite/block-std").BlockService<BlockModel<object>>>[];
    accessor autofocus: boolean;
    /**
     * @deprecated need to refactor
     */
    readonly themeObserver: ThemeObserver;
    /**
     * @deprecated need to refactor
     */
    slots: AbstractEditor['slots'];
    switchEditor(mode: DocMode): void;
    getUpdateComplete(): Promise<boolean>;
    firstUpdated(): void;
    /**
     * @deprecated need to refactor
     */
    connectedCallback(): void;
    /**
     * @deprecated need to refactor
     */
    updated(changedProperties: Map<string, unknown>): void;
    render(): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-editor-container': AffineEditorContainer;
    }
}
export {};
//# sourceMappingURL=editor-container.d.ts.map