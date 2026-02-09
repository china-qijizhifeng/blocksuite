import { DisposableGroup } from '@blocksuite/global/utils';
import type { BlockModel } from '@blocksuite/store';
import type { EventName, UIEventHandler } from '../event/index.js';
import type { BlockStdScope } from '../scope/index.js';
import type { BlockSpecSlots } from '../spec/slots.js';
export interface BlockServiceOptions {
    flavour: string;
    std: BlockStdScope;
    slots: BlockSpecSlots;
}
export declare class BlockService<_Model extends BlockModel = BlockModel> {
    readonly std: BlockStdScope;
    readonly flavour: string;
    readonly disposables: DisposableGroup;
    readonly specSlots: BlockSpecSlots;
    constructor(options: BlockServiceOptions);
    get collection(): import("@blocksuite/store").DocCollection;
    get doc(): import("@blocksuite/store").Doc;
    get host(): HTMLElement;
    get selectionManager(): import("../index.js").SelectionManager;
    get uiEventDispatcher(): import("../event/dispatcher.js").UIEventDispatcher;
    dispose(): void;
    mounted(): void;
    unmounted(): void;
    handleEvent(name: EventName, fn: UIEventHandler, options?: {
        global: boolean;
    }): void;
    bindHotKey(keymap: Record<string, UIEventHandler>, options?: {
        global: boolean;
    }): void;
}
export type BlockServiceConstructor<T extends BlockService = BlockService> = new (options: BlockServiceOptions) => T;
//# sourceMappingURL=index.d.ts.map