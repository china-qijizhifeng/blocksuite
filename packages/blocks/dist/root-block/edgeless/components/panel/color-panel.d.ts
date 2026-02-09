import { LitElement } from 'lit';
import type { CssVariableName } from '../../../../_common/theme/css-variables.js';
export declare class ColorEvent extends Event {
    detail: CssVariableName;
    constructor(type: string, { detail, composed, bubbles, }: {
        detail: CssVariableName;
        composed: boolean;
        bubbles: boolean;
    });
}
export declare const LINE_COLORS: readonly ["--affine-palette-transparent", "--affine-palette-line-yellow", "--affine-palette-line-orange", "--affine-palette-line-red", "--affine-palette-line-magenta", "--affine-palette-line-purple", "--affine-palette-line-blue", "--affine-palette-line-teal", "--affine-palette-line-green", "--affine-palette-line-black", "--affine-palette-line-grey", "--affine-palette-line-white"];
export declare const LineColorsSchema: import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"--affine-palette-transparent">, import("zod").ZodLiteral<"--affine-palette-line-yellow">, import("zod").ZodLiteral<"--affine-palette-line-orange">, import("zod").ZodLiteral<"--affine-palette-line-red">, import("zod").ZodLiteral<"--affine-palette-line-magenta">, import("zod").ZodLiteral<"--affine-palette-line-purple">, import("zod").ZodLiteral<"--affine-palette-line-blue">, import("zod").ZodLiteral<"--affine-palette-line-teal">, import("zod").ZodLiteral<"--affine-palette-line-green">, import("zod").ZodLiteral<"--affine-palette-line-black">, import("zod").ZodLiteral<"--affine-palette-line-grey">, import("zod").ZodLiteral<"--affine-palette-line-white">]>;
export declare const GET_DEFAULT_LINE_COLOR: () => "--affine-palette-line-black" | "--affine-palette-line-white";
export declare const GET_DEFAULT_TEXT_COLOR: () => "--affine-palette-line-blue";
export declare const DEFAULT_BRUSH_COLOR = "--affine-palette-line-blue";
export declare const DEFAULT_CONNECTOR_COLOR: "--affine-palette-line-grey";
export declare function isTransparent(color: CssVariableName): boolean;
export declare function ColorUnit(color: CssVariableName, { hollowCircle, letter, }?: {
    hollowCircle?: boolean;
    letter?: boolean;
}): import("lit").TemplateResult<1>;
export declare class EdgelessColorButton extends LitElement {
    static styles: import("lit").CSSResult;
    accessor color: CssVariableName;
    accessor hollowCircle: boolean | undefined;
    accessor letter: boolean | undefined;
    render(): import("lit").TemplateResult<1>;
}
export declare const colorContainerStyles: import("lit").CSSResult;
export declare class EdgelessColorPanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor value: CssVariableName | null;
    accessor options: readonly ["--affine-palette-transparent", "--affine-palette-line-yellow", "--affine-palette-line-orange", "--affine-palette-line-red", "--affine-palette-line-magenta", "--affine-palette-line-purple", "--affine-palette-line-blue", "--affine-palette-line-teal", "--affine-palette-line-green", "--affine-palette-line-black", "--affine-palette-line-grey", "--affine-palette-line-white"];
    accessor showLetterMark: boolean;
    accessor hollowCircle: boolean;
    onSelect(value: CssVariableName): void;
    render(): unknown;
}
export declare class EdgelessTextColorIcon extends LitElement {
    static styles: import("lit").CSSResult;
    accessor color: CssVariableName;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-color-panel': EdgelessColorPanel;
        'edgeless-color-button': EdgelessColorButton;
        'edgeless-text-color-icon': EdgelessTextColorIcon;
    }
}
//# sourceMappingURL=color-panel.d.ts.map