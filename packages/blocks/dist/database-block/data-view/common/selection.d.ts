import { BaseSelection } from '@blocksuite/block-std';
import type { DataViewSelection, GetDataViewSelection } from '../types.js';
export declare class DatabaseSelection extends BaseSelection {
    static type: string;
    static group: string;
    readonly viewSelection: DataViewSelection;
    constructor({ blockId, viewSelection, }: {
        blockId: string;
        viewSelection: DataViewSelection;
    });
    get viewId(): string;
    getSelection<T extends DataViewSelection['type']>(type: T): GetDataViewSelection<T> | undefined;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
    static fromJSON(json: Record<string, unknown>): DatabaseSelection;
}
declare global {
    namespace BlockSuite {
        interface Selection {
            database: typeof DatabaseSelection;
        }
    }
}
//# sourceMappingURL=selection.d.ts.map