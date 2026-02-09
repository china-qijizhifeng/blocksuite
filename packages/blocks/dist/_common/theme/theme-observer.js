import { Slot } from '@blocksuite/global/utils';
import { isCssVariable, StyleVariables } from './css-variables.js';
export function extractCssVariables(element) {
    const styles = window.getComputedStyle(element);
    const variables = StyleVariables.reduce((acc, cssName) => {
        const value = styles.getPropertyValue(cssName).trim();
        acc[cssName] = value;
        // --affine-palette-transparent: special values added for the sake of logical consistency.
        if (cssName === '--affine-palette-transparent' && !value) {
            acc[cssName] = '#00000000';
        }
        return acc;
    }, {});
    return variables;
}
/**
 * Observer theme changing by `data-theme` property
 */
export class ThemeObserver extends Slot {
    constructor() {
        super(...arguments);
        this._mode = '';
        this._cssVariables = null;
    }
    get cssVariables() {
        return this._cssVariables;
    }
    observe(element) {
        this._observer?.disconnect();
        this._cssVariables = extractCssVariables(element);
        this._observer = new MutationObserver(() => {
            const mode = element.dataset.theme;
            if (this._mode !== mode) {
                this._cssVariables = extractCssVariables(element);
                this.emit(this._cssVariables);
            }
        });
        this._observer.observe(element, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
    }
    getVariableValue(variable) {
        if (isCssVariable(variable)) {
            const value = this._cssVariables?.[variable];
            if (value === undefined) {
                console.error(new Error(`Cannot find css variable: ${variable}`));
            }
            else {
                return value;
            }
        }
        return variable;
    }
    dispose() {
        super.dispose();
        this._observer?.disconnect();
    }
}
//# sourceMappingURL=theme-observer.js.map