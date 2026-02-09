import { LitElement, nothing } from 'lit';
export declare class PieCenterRotator extends LitElement {
    static styles: import("lit").CSSResult;
    accessor isActive: boolean;
    accessor angle: number | null;
    protected render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'pie-center-rotator': PieCenterRotator;
    }
}
//# sourceMappingURL=rotator.d.ts.map