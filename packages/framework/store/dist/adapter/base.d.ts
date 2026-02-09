import type { Doc } from '../store/index.js';
import type { AssetsManager } from '../transformer/assets.js';
import type { Slice } from '../transformer/index.js';
import type { DraftModel, Job } from '../transformer/index.js';
import type { BlockSnapshot, DocSnapshot, SliceSnapshot } from '../transformer/type.js';
import { ASTWalkerContext } from './context.js';
export type FromDocSnapshotPayload = {
    snapshot: DocSnapshot;
    assets?: AssetsManager;
};
export type FromBlockSnapshotPayload = {
    snapshot: BlockSnapshot;
    assets?: AssetsManager;
};
export type FromSliceSnapshotPayload = {
    snapshot: SliceSnapshot;
    assets?: AssetsManager;
};
export type FromDocSnapshotResult<Target> = {
    file: Target;
    assetsIds: string[];
};
export type FromBlockSnapshotResult<Target> = {
    file: Target;
    assetsIds: string[];
};
export type FromSliceSnapshotResult<Target> = {
    file: Target;
    assetsIds: string[];
};
export type ToDocSnapshotPayload<Target> = {
    file: Target;
    assets?: AssetsManager;
};
export type ToBlockSnapshotPayload<Target> = {
    file: Target;
    assets?: AssetsManager;
};
export type ToSliceSnapshotPayload<Target> = {
    file: Target;
    assets?: AssetsManager;
};
export declare abstract class BaseAdapter<AdapterTarget = unknown> {
    protected configs: Map<string, unknown>;
    job: Job;
    constructor(job: Job);
    abstract fromDocSnapshot(payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<AdapterTarget>> | FromDocSnapshotResult<AdapterTarget>;
    abstract fromBlockSnapshot(payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<AdapterTarget>> | FromBlockSnapshotResult<AdapterTarget>;
    abstract fromSliceSnapshot(payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<AdapterTarget>> | FromSliceSnapshotResult<AdapterTarget>;
    abstract toDocSnapshot(payload: ToDocSnapshotPayload<AdapterTarget>): Promise<DocSnapshot> | DocSnapshot;
    abstract toBlockSnapshot(payload: ToBlockSnapshotPayload<AdapterTarget>): Promise<BlockSnapshot> | BlockSnapshot;
    abstract toSliceSnapshot(payload: ToSliceSnapshotPayload<AdapterTarget>): Promise<SliceSnapshot | null> | SliceSnapshot | null;
    fromDoc(doc: Doc): Promise<FromDocSnapshotResult<AdapterTarget>>;
    toDoc(payload: ToDocSnapshotPayload<AdapterTarget>): Promise<Doc>;
    fromBlock(mode: DraftModel): Promise<FromBlockSnapshotResult<AdapterTarget>>;
    toBlock(payload: ToBlockSnapshotPayload<AdapterTarget>, doc: Doc, parent?: string, index?: number): Promise<import("../index.js").BlockModel<object>>;
    fromSlice(slice: Slice): Promise<FromSliceSnapshotResult<AdapterTarget>>;
    toSlice(payload: ToSliceSnapshotPayload<AdapterTarget>, doc: Doc, parent?: string, index?: number): Promise<Slice | undefined>;
    applyConfigs(configs: Map<string, unknown>): void;
}
type Keyof<T> = T extends unknown ? keyof T : never;
type WalkerFn<ONode extends object, TNode extends object> = (o: NodeProps<ONode>, context: ASTWalkerContext<TNode>) => Promise<void> | void;
type NodeProps<Node extends object> = {
    node: Node;
    next?: Node | null;
    parent: NodeProps<Node> | null;
    prop: Keyof<Node> | null;
    index: number | null;
};
export declare class ASTWalker<ONode extends object, TNode extends object | never> {
    private _enter;
    private _leave;
    private _isONode;
    private context;
    constructor();
    private _visit;
    setEnter: (fn: WalkerFn<ONode, TNode>) => void;
    setLeave: (fn: WalkerFn<ONode, TNode>) => void;
    setONodeTypeGuard: (fn: (node: unknown) => node is ONode) => void;
    walk: (oNode: ONode, tNode: TNode) => Promise<TNode>;
    walkONode: (oNode: ONode) => Promise<void>;
}
export {};
//# sourceMappingURL=base.d.ts.map