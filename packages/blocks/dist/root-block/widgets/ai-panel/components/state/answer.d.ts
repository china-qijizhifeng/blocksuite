import '../finish-tip.js';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AIPanelAnswerConfig, CopyConfig } from '../../type.js';
declare const AIPanelAnswer_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIPanelAnswer extends AIPanelAnswer_base {
    static styles: import("lit").CSSResult;
    accessor config: AIPanelAnswerConfig;
    accessor finish: boolean;
    accessor host: EditorHost;
    accessor copy: CopyConfig | undefined;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-panel-answer': AIPanelAnswer;
    }
}
export {};
//# sourceMappingURL=answer.d.ts.map