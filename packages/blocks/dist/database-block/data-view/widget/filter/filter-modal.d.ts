import './filter-group.js';
import './filter-root.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { FilterGroup, Variable } from '../../common/ast.js';
declare const AdvancedFilterModal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AdvancedFilterModal extends AdvancedFilterModal_base {
    static styles: import("lit").CSSResult;
    accessor isRoot: boolean;
    accessor data: FilterGroup;
    accessor vars: Variable[];
    accessor setData: (filter: FilterGroup) => void;
    accessor onDelete: () => void;
    accessor onBack: () => void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'advanced-filter-modal': AdvancedFilterModal;
    }
}
export declare const popFilterModal: (target: HTMLElement, props: {
    isRoot: boolean;
    vars: Variable[];
    value: FilterGroup;
    onChange: (value: FilterGroup) => void;
    onDelete: () => void;
    onBack: () => void;
}) => void;
export {};
//# sourceMappingURL=filter-modal.d.ts.map