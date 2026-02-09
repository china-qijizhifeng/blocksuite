import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import { LitElement, nothing } from 'lit';
import type { GroupElementModel } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeGroupButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeGroupButton extends EdgelessChangeGroupButton_base {
    accessor edgeless: EdgelessRootBlockComponent;
    accessor groups: GroupElementModel[];
    private _insertIntoPage;
    protected render(): Iterable<symbol | import("lit").TemplateResult<1>>;
    protected createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-group-button': EdgelessChangeGroupButton;
    }
}
export declare function renderGroupButton(edgeless: EdgelessRootBlockComponent, groups?: GroupElementModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-group-button.d.ts.map