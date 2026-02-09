import { ShadowlessElement } from '@blocksuite/block-std';
import type { Filter, Variable, VariableOrProperty } from '../ast.js';
declare const VariableRefView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class VariableRefView extends VariableRefView_base {
    static styles: import("lit").CSSResult;
    accessor data: VariableOrProperty | undefined;
    accessor setData: (filter: VariableOrProperty) => void;
    accessor vars: Variable[];
    connectedCallback(): void;
    get field(): string | undefined;
    get fieldData(): Variable | undefined;
    get property(): string | undefined;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'variable-ref-view': VariableRefView;
    }
}
export declare const popCreateFilter: (target: HTMLElement, props: {
    vars: Variable[];
    onSelect: (filter: Filter) => void;
    onClose?: () => void;
}) => void;
export {};
//# sourceMappingURL=ref.d.ts.map