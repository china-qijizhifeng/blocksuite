import '../generating-placeholder.js';
import { LitElement } from 'lit';
import type { AIPanelGeneratingConfig } from '../../type.js';
declare const AIPanelGenerating_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIPanelGenerating extends AIPanelGenerating_base {
    static styles: import("lit").CSSResult;
    accessor config: AIPanelGeneratingConfig;
    accessor loadingProgress: number;
    accessor withAnswer: boolean;
    accessor stopGenerating: () => void;
    updateLoadingProgress(progress: number): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-panel-generating': AIPanelGenerating;
    }
}
export {};
//# sourceMappingURL=generating.d.ts.map