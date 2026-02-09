import './common/group-by/define.js';
import type { BlockStdScope } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/global/utils';
import type { ReferenceElement } from '@floating-ui/dom';
import { type TemplateResult } from 'lit';
import type { DataSource } from './common/data-source/base.js';
import type { ViewSource } from './common/index.js';
import type { DataViewSelection } from './types.js';
import type { DataViewExpose, DataViewProps } from './view/data-view.js';
import type { DataViewManager } from './view/data-view-manager.js';
export type DataViewRendererConfig = {
    bindHotkey: DataViewProps['bindHotkey'];
    handleEvent: DataViewProps['handleEvent'];
    getFlag?: DataViewProps['getFlag'];
    selectionUpdated: Slot<DataViewSelection | undefined>;
    setSelection: (selection: DataViewSelection | undefined) => void;
    dataSource: DataSource;
    viewSource: ViewSource;
    detailPanelConfig?: {
        openDetailPanel?: (target: HTMLElement, template: TemplateResult) => Promise<void>;
        target?: () => ReferenceElement;
    };
    headerWidget: DataViewProps['headerWidget'];
    onDrag?: DataViewProps['onDrag'];
    std: BlockStdScope;
};
declare const DataViewRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DataViewRenderer extends DataViewRenderer_base {
    get expose(): DataViewExpose | undefined;
    static styles: import("lit").CSSResult;
    private _view;
    private viewMap;
    accessor config: DataViewRendererConfig;
    accessor currentView: string | undefined;
    private getView;
    private renderView;
    connectedCallback(): void;
    focusFirstCell: () => void;
    openDetailPanel: (ops: {
        view: DataViewManager;
        rowId: string;
        onClose?: () => void;
    }) => void;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-renderer': DataViewRenderer;
    }
}
export declare class DataView {
    private _ref;
    get expose(): DataViewExpose | undefined;
    render(props: DataViewRendererConfig): TemplateResult;
}
export {};
//# sourceMappingURL=data-view.d.ts.map