import '../../edgeless/components/buttons/tool-icon-button.js';
import { LitElement } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessReleaseFromGroupButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessReleaseFromGroupButton extends EdgelessReleaseFromGroupButton_base {
    accessor edgeless: EdgelessRootBlockComponent;
    private _releaseFromGroup;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-release-from-group-button': EdgelessReleaseFromGroupButton;
    }
}
export declare function renderReleaseFromGroupButton(edgeless: EdgelessRootBlockComponent): import("lit").TemplateResult<1>;
export {};
//# sourceMappingURL=release-from-group-button.d.ts.map