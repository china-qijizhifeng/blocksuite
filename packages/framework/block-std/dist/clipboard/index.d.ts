import type { BaseAdapter, BlockSnapshot, Doc, JobMiddleware, Slice } from '@blocksuite/store';
import { Job } from '@blocksuite/store';
type AdapterConstructor<T extends BaseAdapter> = new (job: Job) => T;
export declare class Clipboard {
    std: BlockSuite.Std;
    get configs(): Map<string, string>;
    private _jobMiddlewares;
    private _adapterMap;
    constructor(std: BlockSuite.Std);
    private _getJob;
    private _getDataByType;
    private _getClipboardItem;
    private _getSnapshotByPriority;
    use: (middleware: JobMiddleware) => void;
    unuse: (middleware: JobMiddleware) => void;
    registerAdapter: <T extends BaseAdapter<unknown>>(mimeType: string, adapter: AdapterConstructor<T>, priority?: number) => void;
    unregisterAdapter: (mimeType: string) => void;
    copy: (slice: Slice) => Promise<void>;
    paste: (event: ClipboardEvent, doc: Doc, parent?: string, index?: number) => Promise<Slice | null | undefined>;
    writeToClipboard(updateItems: (items: Record<string, unknown>) => Promise<Record<string, unknown>> | Record<string, unknown>): Promise<void>;
    readFromClipboard(clipboardData: DataTransfer): any;
    pasteBlockSnapshot: (snapshot: BlockSnapshot, doc: Doc, parent?: string, index?: number) => Promise<import("@blocksuite/store").BlockModel<object>>;
    copySlice: (slice: Slice) => Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map