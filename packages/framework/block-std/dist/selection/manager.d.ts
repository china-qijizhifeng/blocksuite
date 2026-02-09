import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import type { BaseSelection } from './base.js';
interface SelectionConstructor {
    type: string;
    new (...args: any[]): BaseSelection;
    fromJSON(json: Record<string, unknown>): BaseSelection;
}
export declare class SelectionManager {
    std: BlockSuite.Std;
    private get _store();
    get value(): BaseSelection[];
    get remoteSelections(): Map<number, BaseSelection[]>;
    private _selectionConstructors;
    disposables: DisposableGroup;
    slots: {
        changed: Slot<BaseSelection[]>;
        remoteChanged: Slot<Map<number, BaseSelection[]>>;
    };
    constructor(std: BlockSuite.Std);
    private _setupDefaultSelections;
    private _jsonToSelection;
    private _itemAdded;
    private _itemPopped;
    register(ctor: SelectionConstructor | SelectionConstructor[]): this;
    create<T extends BlockSuite.SelectionType>(type: T, ...args: ConstructorParameters<BlockSuite.Selection[T]>): BlockSuite.SelectionInstance[T];
    fromJSON(json: Record<string, unknown>[]): void;
    set(selections: BaseSelection[]): void;
    setGroup(group: string, selections: BaseSelection[]): void;
    getGroup(group: string): BaseSelection[];
    update(fn: (currentSelections: BaseSelection[]) => BaseSelection[]): void;
    clear(types?: string[]): void;
    find<T extends BlockSuite.SelectionType>(type: T): BlockSuite.SelectionInstance[T] | undefined;
    filter<T extends BlockSuite.SelectionType>(type: T): BlockSuite.SelectionInstance[T][];
    mount(): void;
    unmount(): void;
    dispose(): void;
}
export {};
//# sourceMappingURL=manager.d.ts.map