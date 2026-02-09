import { type ReferenceElement } from '@floating-ui/dom';
import type { DataViewManager } from '../../view/data-view-manager.js';
export declare const popSideDetail: (ops: {
    target: ReferenceElement;
    view: DataViewManager;
    rowId: string;
    onClose?: () => void;
}) => void;
export declare const createRecordDetail: (ops: {
    view: DataViewManager;
    rowId: string;
}) => import("lit").TemplateResult<1>;
//# sourceMappingURL=layout.d.ts.map