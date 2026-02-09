/// <reference path="../../shim.d.ts" />
/// <reference types="@blocksuite/global" />
import { Slot } from '@blocksuite/global/utils';
import type { Awareness as YAwareness } from 'y-protocols/awareness.js';
import type { Space } from '../store/space.js';
import type { Store } from '../store/store.js';
export interface UserInfo {
    name: string;
}
type UserSelection = Array<Record<string, unknown>>;
export type RawAwarenessState<Flags extends Record<string, unknown> = BlockSuiteFlags> = {
    user?: UserInfo;
    color?: string;
    flags: Flags;
    selectionV2: Record<string, UserSelection>;
};
export interface AwarenessEvent<Flags extends Record<string, unknown> = BlockSuiteFlags> {
    id: number;
    type: 'add' | 'update' | 'remove';
    state?: RawAwarenessState<Flags>;
}
export declare class AwarenessStore<Flags extends Record<string, unknown> = BlockSuiteFlags> {
    readonly awareness: YAwareness<RawAwarenessState<Flags>>;
    readonly store: Store;
    readonly slots: {
        update: Slot<AwarenessEvent<Flags>>;
    };
    constructor(store: Store, awareness: YAwareness<RawAwarenessState<Flags>>, defaultFlags: Flags);
    private _initFlags;
    private _onAwarenessChange;
    setFlag<Key extends keyof Flags>(field: Key, value: Flags[Key]): void;
    getFlag<Key extends keyof Flags>(field: Key): Flags[Key] | undefined;
    setReadonly(space: Space, value: boolean): void;
    isReadonly(space: Space): boolean;
    setLocalSelection(space: Space, selection: UserSelection): void;
    getLocalSelection(space: Space): ReadonlyArray<Record<string, unknown>>;
    getStates(): Map<number, RawAwarenessState<Flags>>;
    destroy(): void;
}
export {};
//# sourceMappingURL=awareness.d.ts.map