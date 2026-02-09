import './field.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewManager } from '../../view/data-view-manager.js';
import type { DetailSlots } from '../data-source/base.js';
import { DetailSelection } from './selection.js';
declare const RecordDetail_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class RecordDetail extends RecordDetail_base {
    private get readonly();
    private get columns();
    static styles: import("lit").CSSResult;
    accessor view: DataViewManager;
    accessor rowId: string;
    selection: DetailSelection;
    accessor addPropertyButton: HTMLElement;
    detailSlots?: DetailSlots;
    private renderHeader;
    private renderNote;
    connectedCallback(): void;
    _clickAddProperty: () => void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-record-detail': RecordDetail;
    }
}
export {};
//# sourceMappingURL=detail.d.ts.map