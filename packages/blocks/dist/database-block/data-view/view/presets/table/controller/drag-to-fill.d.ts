import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewTable } from '../table-view.js';
import type { TableViewSelection } from '../types.js';
export declare class DragToFillElement extends ShadowlessElement {
    static styles: import("lit").CSSResult;
    accessor dragging: boolean;
    dragToFillRef: import("lit/directives/ref.js").Ref<HTMLDivElement>;
    render(): import("lit").TemplateResult<1>;
}
export declare function fillSelectionWithFocusCellData(host: DataViewTable, selection: TableViewSelection): void;
//# sourceMappingURL=drag-to-fill.d.ts.map