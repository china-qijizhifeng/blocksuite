import type { BlockSpec, BlockSpecSlots } from '@blocksuite/block-std';
import { type DisposableGroup } from '@blocksuite/global/utils';
export declare class SpecBuilder {
    private readonly _value;
    constructor(spec: BlockSpec[]);
    get value(): BlockSpec<string, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>>[];
    setup<Flavour extends BlockSuite.ServiceKeys>(flavour: Flavour, setup: (slots: BlockSpecSlots<BlockSuite.BlockServices[Flavour]>, disposableGroup: DisposableGroup) => void): void;
}
//# sourceMappingURL=spec-builder.d.ts.map