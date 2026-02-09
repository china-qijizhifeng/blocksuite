import * as Y from 'yjs';
import { BlockModel } from '../../schema/base.js';
import type { Schema } from '../../schema/index.js';
import { BlockViewType, type Doc } from './doc.js';
export type YBlock = Y.Map<unknown> & {
    get(prop: 'sys:id'): string;
    get(prop: 'sys:flavour'): string;
    get(prop: 'sys:children'): Y.Array<string>;
    get<T = unknown>(prop: string): T;
};
export type BlockOptions = {
    onChange?: (block: Block, key: string, value: unknown) => void;
};
export declare class Block {
    readonly schema: Schema;
    readonly yBlock: YBlock;
    readonly doc?: Doc | undefined;
    readonly options: BlockOptions;
    private _byPassProxy;
    private readonly _stashed;
    blockViewType: BlockViewType;
    readonly model: BlockModel;
    readonly id: string;
    readonly flavour: string;
    readonly version: number;
    readonly yChildren: Y.Array<string[]>;
    constructor(schema: Schema, yBlock: YBlock, doc?: Doc | undefined, options?: BlockOptions);
    private _stashProp;
    private _popProp;
    private _byPassUpdate;
    private _getPropsProxy;
    private _parseYBlock;
    private _createModel;
    stash: (prop: string) => void;
    pop: (prop: string) => void;
}
//# sourceMappingURL=block.d.ts.map