import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewColumnManager, DataViewManager } from '../view/data-view-manager.js';
declare const DataViewPropertiesSettingView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DataViewPropertiesSettingView extends DataViewPropertiesSettingView_base {
    static styles: import("lit").CSSResult;
    accessor view: DataViewManager;
    accessor onBack: (() => void) | undefined;
    accessor groupContainer: HTMLElement;
    private itemsGroup;
    connectedCallback(): void;
    firstUpdated(): void;
    renderColumn: (column: DataViewColumnManager) => import("lit").TemplateResult<1>;
    clickChangeAll: (allShow: boolean) => void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-properties-setting': DataViewPropertiesSettingView;
    }
}
export declare const popPropertiesSetting: (target: HTMLElement, props: {
    view: DataViewManager;
    onClose?: () => void;
    onBack?: () => void;
}) => void;
export {};
//# sourceMappingURL=properties.d.ts.map