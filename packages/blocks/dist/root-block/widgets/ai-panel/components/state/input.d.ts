import { LitElement } from 'lit';
declare const AIPanelInput_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIPanelInput extends AIPanelInput_base {
    static styles: import("lit").CSSResult;
    private accessor _arrow;
    private accessor _textarea;
    private accessor _hasContent;
    accessor onFinish: ((input: string) => void) | undefined;
    accessor onInput: ((input: string) => void) | undefined;
    private _sendToAI;
    private _onKeyDown;
    private _onInput;
    updated(_changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-panel-input': AIPanelInput;
    }
}
export {};
//# sourceMappingURL=input.d.ts.map