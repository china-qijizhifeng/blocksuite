import '../../../../_common/components/rich-text/rich-text.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { RichText } from '../../../../_common/components/rich-text/rich-text.js';
import type { TextElementModel } from '../../../../surface-block/element-model/text.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessTextEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessTextEditor extends EdgelessTextEditor_base {
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline/inline-editor").InlineRootElement<import("@blocksuite/blocks").AffineTextAttributes>;
    static PLACEHOLDER_TEXT: string;
    static HORIZONTAL_PADDING: number;
    static VERTICAL_PADDING: number;
    static BORDER_WIDTH: number;
    static styles: import("lit").CSSResult;
    private _keeping;
    private _isComposition;
    accessor richText: RichText;
    accessor element: TextElementModel;
    accessor edgeless: EdgelessRootBlockComponent;
    private _updateRect;
    setKeeping(keeping: boolean): void;
    getCoordsOnRightAlign(rect: {
        w: number;
        h: number;
        r: number;
        x: number;
        y: number;
    }, w1: number, h1: number): {
        x: number;
        y: number;
    };
    getCoordsOnCenterAlign(rect: {
        w: number;
        h: number;
        r: number;
        x: number;
        y: number;
    }, w1: number, h1: number): {
        x: number;
        y: number;
    };
    getCoordsOnLeftAlign(rect: {
        w: number;
        h: number;
        r: number;
        x: number;
        y: number;
    }, w1: number, h1: number): {
        x: number;
        y: number;
    };
    getVisualPosition(element: TextElementModel): number[];
    getContainerOffset(): string;
    connectedCallback(): void;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-text-editor': EdgelessTextEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-text-editor.d.ts.map