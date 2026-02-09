import type { BlockSpec } from '@blocksuite/block-std';
import { SpecBuilder } from './spec-builder.js';
export declare class SpecProvider {
    static instance: SpecProvider;
    private specMap;
    private constructor();
    addSpec(id: string, spec: BlockSpec[]): void;
    hasSpec(id: string): boolean;
    getSpec(id: string): SpecBuilder;
    clearSpec(id: string): void;
    static getInstance(): SpecProvider;
}
//# sourceMappingURL=spec-provider.d.ts.map