import { LitElement, type TemplateResult } from 'lit';
import type { DeltaInsert } from '../types.js';
export declare class VLine extends LitElement {
    get inlineEditor(): import("../inline-editor.js").InlineEditor<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }>;
    get vElements(): import("./v-element.js").VElement<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }>[];
    get vTexts(): import("./v-text.js").VText[];
    get vTextLength(): number;
    get vTextContent(): string;
    accessor elements: [TemplateResult<1>, DeltaInsert][];
    protected firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): TemplateResult<1> | undefined;
    createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'v-line': VLine;
    }
}
//# sourceMappingURL=v-line.d.ts.map