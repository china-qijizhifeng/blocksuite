import { Slot } from '@blocksuite/global/utils';
import { BlockService } from '../service/index.js';
import type { BlockSpec } from './index.js';
export declare class SpecStore {
    std: BlockSuite.Std;
    private _specs;
    private _services;
    private _disposables;
    readonly slots: {
        beforeApply: Slot<void>;
        beforeMount: Slot<void>;
        beforeUnmount: Slot<void>;
        afterApply: Slot<void>;
        afterMount: Slot<void>;
        afterUnmount: Slot<void>;
    };
    constructor(std: BlockSuite.Std);
    private _diffServices;
    private _buildSpecMap;
    mount(): void;
    unmount(): void;
    applySpecs(specs: BlockSpec[]): void;
    getView(flavour: string): import("./type.js").BlockView<string> | null;
    getService<Key extends BlockSuite.ServiceKeys>(flavour: Key): BlockSuite.BlockServices[Key];
    getService<Service extends BlockService>(flavour: string): Service;
}
declare global {
    namespace BlockSuite {
        interface BlockServices {
        }
        type ServiceKeys = string & keyof BlockServices;
    }
}
//# sourceMappingURL=spec-store.d.ts.map