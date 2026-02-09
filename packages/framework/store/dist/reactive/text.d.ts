import type { BaseTextAttributes, DeltaInsert } from '@blocksuite/inline';
import * as Y from 'yjs';
export interface OptionalAttributes {
    attributes?: Record<string, any>;
}
export type DeltaOperation = {
    insert?: string;
    delete?: number;
    retain?: number;
} & OptionalAttributes;
export declare class Text {
    get length(): number;
    get yText(): Y.Text;
    private readonly _yText;
    constructor(input?: Y.Text | string | DeltaInsert[]);
    private _transact;
    clone(): Text;
    /**
     * NOTE: The string included in [index, index + length) will be deleted.
     *
     * Here are three cases for point position(index + length):
     * [{insert: 'abc', ...}, {insert: 'def', ...}, {insert: 'ghi', ...}]
     * 1. abc|de|fghi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'f', ...}, {insert: 'ghi', ...}]
     * 2. abc|def|ghi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'ghi', ...}]
     * 3. abc|defg|hi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'hi', ...}]
     */
    split(index: number, length?: number): Text;
    insert(content: string, index: number, attributes?: Record<string, unknown>): void;
    join(other: Text): void;
    format(index: number, length: number, format: any): void;
    delete(index: number, length: number): void;
    replace(index: number, length: number, content: string, attributes?: BaseTextAttributes): void;
    clear(): void;
    applyDelta(delta: DeltaOperation[]): void;
    toDelta(): DeltaOperation[];
    sliceToDelta(begin: number, end?: number): DeltaOperation[];
    toString(): string;
    static fromDelta(delta: DeltaOperation[]): Text;
}
//# sourceMappingURL=text.d.ts.map