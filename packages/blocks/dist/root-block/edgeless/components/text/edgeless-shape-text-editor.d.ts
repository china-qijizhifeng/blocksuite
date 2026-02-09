import { ShadowlessElement } from '@blocksuite/block-std';
import type { RichText } from '../../../../_common/components/rich-text/rich-text.js';
import { type ShapeElementModel } from '../../../../surface-block/element-model/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessShapeTextEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessShapeTextEditor extends EdgelessShapeTextEditor_base {
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline/inline-editor").InlineRootElement<import("@blocksuite/blocks").AffineTextAttributes>;
    private _lastXYWH;
    private _keeping;
    private _resizeObserver;
    accessor richText: RichText;
    accessor element: ShapeElementModel;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor mountEditor: ((element: ShapeElementModel, edgeless: EdgelessRootBlockComponent) => void) | undefined;
    private _updateElementWH;
    private _unmount;
    private _initMindmapKeyBindings;
    setKeeping(keeping: boolean): void;
    connectedCallback(): void;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-text-editor': EdgelessShapeTextEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-shape-text-editor.d.ts.map