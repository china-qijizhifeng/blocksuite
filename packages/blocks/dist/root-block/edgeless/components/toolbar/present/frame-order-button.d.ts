import './frame-order-menu.js';
import '../../buttons/tool-icon-button.js';
import { LitElement } from 'lit';
import type { FrameBlockModel } from '../../../../../frame-block/index.js';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
declare const EdgelessFrameOrderButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFrameOrderButton extends EdgelessFrameOrderButton_base {
    static styles: import("lit").CSSResult;
    private accessor _edgelessFrameOrderButton;
    private accessor _edgelessFrameOrderMenu;
    private _edgelessFrameOrderPopper;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor frames: FrameBlockModel[];
    accessor popperShow: boolean;
    protected render(): import("lit").TemplateResult<1>;
    accessor setPopperShow: (show: boolean) => void;
    firstUpdated(): void;
}
export {};
//# sourceMappingURL=frame-order-button.d.ts.map