import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessAlignButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessAlignButton extends EdgelessAlignButton_base {
    private get elements();
    accessor edgeless: EdgelessRootBlockComponent;
    private _updateXYWH;
    private _alignLeft;
    private _alignRight;
    private _alignHorizontally;
    private _alignDistributeHorizontally;
    private _alignTop;
    private _alignBottom;
    private _alignVertically;
    private _alignDistributeVertically;
    private _align;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-align-button': EdgelessAlignButton;
    }
}
export declare function renderAlignButton(edgeless: EdgelessRootBlockComponent, elements: BlockSuite.EdgelessModelType[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=align-button.d.ts.map