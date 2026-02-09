import { LitElement } from 'lit';
import type { CopyConfig } from '../type.js';
declare const AIFinishTip_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIFinishTip extends AIFinishTip_base {
    static styles: import("lit").CSSResult;
    accessor copy: CopyConfig | undefined;
    accessor copied: boolean;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-finish-tip': AIFinishTip;
    }
}
export {};
//# sourceMappingURL=finish-tip.d.ts.map