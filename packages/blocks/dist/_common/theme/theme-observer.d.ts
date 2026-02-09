import { Slot } from '@blocksuite/global/utils';
import type { CssVariablesMap } from './css-variables.js';
export declare function extractCssVariables(element: Element): CssVariablesMap;
/**
 * Observer theme changing by `data-theme` property
 */
export declare class ThemeObserver extends Slot<CssVariablesMap> {
    private _observer?;
    private _mode;
    private _cssVariables;
    get cssVariables(): CssVariablesMap | null;
    observe(element: HTMLElement): void;
    getVariableValue(variable: string): string;
    dispose(): void;
}
//# sourceMappingURL=theme-observer.d.ts.map