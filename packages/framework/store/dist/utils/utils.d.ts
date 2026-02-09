import type { z } from 'zod';
import type { BlockModel } from '../schema/base.js';
import type { BlockSchema } from '../schema/base.js';
import type { YBlock } from '../store/doc/block.js';
import type { BlockProps, YBlocks } from '../store/doc/block-collection.js';
import type { DocCollection } from '../store/index.js';
export declare function assertValidChildren(yBlocks: YBlocks, props: Partial<BlockProps>): void;
export declare function syncBlockProps(schema: z.infer<typeof BlockSchema>, model: BlockModel, yBlock: YBlock, props: Partial<BlockProps>): void;
export declare function encodeCollectionAsYjsUpdateV2(collection: DocCollection): string;
export declare const hash: (str: string) => number;
//# sourceMappingURL=utils.d.ts.map