import * as Y from 'yjs';
import type { AwarenessStore } from '../yjs/awareness.js';
import type { BlockSuiteDoc } from '../yjs/index.js';
export interface StackItem {
    meta: Map<'cursor-location' | 'selection-state', unknown>;
}
export declare class Space<State extends Record<string, unknown> = Record<string, any>> {
    get yBlocks(): Y.Map<State[keyof State]>;
    get loaded(): boolean;
    get spaceDoc(): Y.Doc;
    private _loaded;
    private _onLoadSlot;
    /**
     * @internal Used for convenient access to the underlying Yjs map,
     * can be used interchangeably with ySpace
     */
    protected readonly _ySpaceDoc: Y.Doc;
    protected readonly _yBlocks: Y.Map<State[keyof State]>;
    readonly id: string;
    readonly rootDoc: BlockSuiteDoc;
    readonly awarenessStore: AwarenessStore;
    constructor(id: string, rootDoc: BlockSuiteDoc, awarenessStore: AwarenessStore);
    private _initSubDoc;
    private _onSubdocEvent;
    load(): this;
    remove(): void;
    destroy(): void;
    clear(): void;
    /**
     * If `shouldTransact` is `false`, the transaction will not be push to the history stack.
     */
    transact(fn: () => void, shouldTransact?: boolean): void;
}
//# sourceMappingURL=space.d.ts.map