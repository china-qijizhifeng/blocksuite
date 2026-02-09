import type { Doc, DocCollection } from '@blocksuite/store';
import { Clipboard } from '../clipboard/index.js';
import { CommandManager } from '../command/index.js';
import { UIEventDispatcher } from '../event/index.js';
import { SelectionManager } from '../selection/index.js';
import { SpecStore } from '../spec/index.js';
import { ViewStore } from '../view/index.js';
export interface BlockStdOptions {
    host: HTMLElement;
    doc: Doc;
}
export declare class BlockStdScope {
    readonly doc: Doc;
    readonly collection: DocCollection;
    readonly event: UIEventDispatcher;
    readonly selection: SelectionManager;
    readonly command: CommandManager;
    readonly host: HTMLElement;
    readonly spec: SpecStore;
    readonly view: ViewStore;
    readonly clipboard: Clipboard;
    constructor(options: BlockStdOptions);
    mount(): void;
    unmount(): void;
}
type Values<T> = T[keyof T] extends never ? unknown : T[keyof T];
declare global {
    namespace BlockSuite {
        interface ComponentType {
        }
        interface NodeViewType {
        }
        type Component = Values<ComponentType>;
        type Std = BlockStdScope;
    }
}
export {};
//# sourceMappingURL=block-std-scope.d.ts.map