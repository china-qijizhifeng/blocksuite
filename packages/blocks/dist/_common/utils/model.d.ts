import type { BlockModel, Doc } from '@blocksuite/store';
export declare function assertFlavours(model: {
    flavour: string;
}, allowed: string[]): void;
export declare function matchFlavours<Key extends (keyof BlockSuite.BlockModels)[]>(model: BlockModel | null, expected: Key): model is BlockSuite.BlockModels[Key[number]];
export declare function isInsideBlockByFlavour(doc: Doc, block: BlockModel | string, flavour: string): boolean;
//# sourceMappingURL=model.d.ts.map