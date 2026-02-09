import type { BlockModel } from '../schema/index.js';
import type { DocCollection } from '../store/index.js';
import type { Doc } from '../store/index.js';
import { AssetsManager } from './assets.js';
import { type DraftModel } from './draft.js';
import type { JobMiddleware } from './middleware.js';
import { Slice } from './slice.js';
import type { BlockSnapshot, CollectionInfoSnapshot, DocSnapshot, SliceSnapshot } from './type.js';
export type JobConfig = {
    collection: DocCollection;
    middlewares?: JobMiddleware[];
};
export declare class Job {
    get collection(): DocCollection;
    get assetsManager(): AssetsManager;
    get assets(): Map<string, Blob>;
    get adapterConfigs(): Map<string, string>;
    private readonly _collection;
    private readonly _assetsManager;
    private readonly _adapterConfigs;
    private readonly _slots;
    constructor({ collection, middlewares }: JobConfig);
    private _getSchema;
    private _getTransformer;
    private _getCollectionMeta;
    private _exportDocMeta;
    private _blockToSnapshot;
    private _snapshotToBlock;
    reset(): void;
    blockToSnapshot: (model: DraftModel) => Promise<BlockSnapshot>;
    snapshotToModelData: (snapshot: BlockSnapshot) => Promise<import("./base.js").SnapshotReturn<object>>;
    walk: (snapshot: DocSnapshot, callback: (block: BlockSnapshot) => void) => void;
    snapshotToBlock: (snapshot: BlockSnapshot, doc: Doc, parent?: string, index?: number) => Promise<BlockModel>;
    docToSnapshot: (doc: Doc) => Promise<DocSnapshot>;
    snapshotToDoc: (snapshot: DocSnapshot) => Promise<Doc>;
    collectionInfoToSnapshot: () => CollectionInfoSnapshot;
    sliceToSnapshot: (slice: Slice) => Promise<SliceSnapshot>;
    snapshotToSlice: (snapshot: SliceSnapshot, doc: Doc, parent?: string, index?: number) => Promise<Slice>;
}
//# sourceMappingURL=job.d.ts.map