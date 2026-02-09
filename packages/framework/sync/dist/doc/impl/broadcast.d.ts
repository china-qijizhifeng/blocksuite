import type { DocSource } from '../source.js';
export declare class BroadcastChannelDocSource implements DocSource {
    readonly channelName: string;
    name: string;
    channel: BroadcastChannel;
    docMap: Map<string, Uint8Array>;
    constructor(channelName?: string);
    private _onMessage;
    pull(docId: string, state: Uint8Array): {
        data: Uint8Array;
        state: Uint8Array;
    } | null;
    push(docId: string, data: Uint8Array): void;
    subscribe(cb: (docId: string, data: Uint8Array) => void): () => void;
}
//# sourceMappingURL=broadcast.d.ts.map