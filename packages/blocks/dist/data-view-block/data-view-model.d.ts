import { BlockModel } from '@blocksuite/store';
import type { DataViewDataType, InsertToPosition } from '../database-block/data-view/index.js';
import type { Column } from '../database-block/data-view/view/presets/table/types.js';
type Props = {
    title: string;
    views: DataViewDataType[];
    columns: Column[];
    cells: Record<string, Record<string, unknown>>;
};
export declare class DataViewBlockModel extends BlockModel<Props> {
    constructor();
    deleteView(id: string): void;
    updateView(id: string, update: (data: DataViewDataType) => Partial<DataViewDataType>): void;
    applyViewsUpdate(): void;
    duplicateView(id: string): string;
    moveViewTo(id: string, position: InsertToPosition): void;
}
export declare const DataViewBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<Props>;
        flavour: "affine:data-view";
    } & {
        role: "hub";
        version: number;
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: Props, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<Props>) | undefined;
};
export {};
//# sourceMappingURL=data-view-model.d.ts.map