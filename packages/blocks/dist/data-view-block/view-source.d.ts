import { Slot } from '@blocksuite/global/utils';
import type { SingleViewSource } from '../database-block/data-view/common/index.js';
import type { DataViewDataType, InsertToPosition, ViewMeta, ViewSource } from '../database-block/data-view/index.js';
import type { DataViewTypes } from '../database-block/data-view/view/data-view.js';
import type { DataViewBlockModel } from './data-view-model.js';
import { blockQueryViews } from './views/index.js';
export declare class BlockQueryViewSource implements ViewSource {
    private model;
    get currentViewId(): string;
    get views(): SingleViewSource[];
    get currentView(): SingleViewSource;
    get readonly(): boolean;
    get allViewMeta(): ViewMeta[];
    private viewMap;
    private currentId?;
    updateSlot: Slot<{
        viewId?: string | undefined;
    }>;
    viewInit: Record<(typeof blockQueryViews)[number]['type'], () => DataViewDataType>;
    constructor(model: DataViewBlockModel);
    checkViewDataUpdate(): void;
    selectView(id: string): void;
    viewAdd(viewType: DataViewTypes): string;
    viewGet(id: string): SingleViewSource;
    duplicate(id: string): void;
    moveTo(id: string, position: InsertToPosition): void;
    getViewMeta(type: string): ViewMeta;
}
//# sourceMappingURL=view-source.d.ts.map