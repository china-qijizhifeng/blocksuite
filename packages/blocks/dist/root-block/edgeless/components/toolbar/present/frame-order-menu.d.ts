import { LitElement } from 'lit';
import type { FrameBlockModel } from '../../../../../frame-block/index.js';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
declare const EdgelessFrameOrderMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFrameOrderMenu extends EdgelessFrameOrderMenu_base {
    static styles: import("lit").CSSResult;
    private accessor _curIndex;
    accessor embed: boolean;
    private accessor _container;
    private accessor _indicatorLine;
    private accessor _clone;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor frames: FrameBlockModel[];
    private _bindEvent;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-frame-order-menu': EdgelessFrameOrderMenu;
    }
}
export {};
//# sourceMappingURL=frame-order-menu.d.ts.map