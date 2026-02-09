import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/line-width-panel.js';
import { LitElement, nothing } from 'lit';
import { LineWidth } from '../../../_common/types.js';
import type { BrushElementModel } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeBrushButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeBrushButton extends EdgelessChangeBrushButton_base {
    get surface(): import("@blocksuite/blocks").SurfaceBlockComponent;
    get doc(): import("@blocksuite/store").Doc;
    get service(): import("@blocksuite/blocks").EdgelessRootService;
    get selectedColor(): string | null;
    get selectedSize(): LineWidth;
    private accessor _selectedColor;
    private accessor _selectedSize;
    accessor elements: BrushElementModel[];
    accessor edgeless: EdgelessRootBlockComponent;
    private _setBrushProp;
    private _setLineWidth;
    private _setBrushColor;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-brush-button': EdgelessChangeBrushButton;
    }
}
export declare function renderChangeBrushButton(edgeless: EdgelessRootBlockComponent, elements?: BrushElementModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-brush-button.d.ts.map