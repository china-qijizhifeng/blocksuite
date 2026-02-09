export declare const ColorVariables: string[];
export declare const SizeVariables: string[];
export declare const FontFamilyVariables: string[];
export declare const StyleVariables: readonly ["--affine-editor-width", "--affine-theme-mode", "--affine-editor-mode", "--affine-palette-transparent", "--affine-popover-shadow", "--affine-menu-shadow", "--affine-float-button-shadow", "--affine-shadow-1", "--affine-shadow-2", "--affine-shadow-3", "--affine-paragraph-space", "--affine-popover-radius", "--affine-scale", ...string[]];
type VariablesType = typeof StyleVariables;
export type CssVariableName = Extract<VariablesType[keyof VariablesType], string>;
export type CssVariablesMap = Record<CssVariableName, string>;
export declare function isCssVariable(name: string): name is CssVariableName;
export declare function isTransparent(color: CssVariableName): boolean;
export {};
//# sourceMappingURL=css-variables.d.ts.map