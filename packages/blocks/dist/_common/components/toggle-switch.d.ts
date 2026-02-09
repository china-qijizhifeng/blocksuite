import { LitElement } from 'lit';
export declare class ToggleSwitch extends LitElement {
    static styles: import("lit").CSSResult;
    accessor on: boolean;
    accessor onChange: ((on: boolean) => void) | undefined;
    private _toggleSwitch;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'toggle-switch': ToggleSwitch;
    }
}
//# sourceMappingURL=toggle-switch.d.ts.map