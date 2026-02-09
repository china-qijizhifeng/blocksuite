import '../finish-tip.js';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AIPanelErrorConfig, CopyConfig } from '../../type.js';
declare const AIPanelError_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIPanelError extends AIPanelError_base {
    static styles: import("lit").CSSResult;
    accessor config: AIPanelErrorConfig;
    accessor copy: CopyConfig | undefined;
    accessor host: EditorHost;
    accessor withAnswer: boolean;
    private _getResponseGroup;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-panel-error': AIPanelError;
    }
}
export {};
//# sourceMappingURL=error.d.ts.map