import { Slot } from '@blocksuite/global/utils';
import type { SingleViewSource, ViewSource } from './data-view/common/index.js';
import type { InsertToPosition } from './data-view/types.js';
import type { DataViewTypes, ViewMeta } from './data-view/view/data-view.js';
import type { DatabaseBlockModel } from './database-model.js';
export declare class DatabaseBlockViewSource implements ViewSource {
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
    constructor(model: DatabaseBlockModel);
    checkViewDataUpdate(): void;
    selectView(id: string): void;
    viewAdd(viewType: DataViewTypes): string;
    viewGet(id: string): SingleViewSource;
    duplicate(id: string): void;
    moveTo(id: string, position: InsertToPosition): void;
    getViewMeta(type: string): ViewMeta;
}
//# sourceMappingURL=view-source.d.ts.map