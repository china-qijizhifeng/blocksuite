import { ShadowlessElement } from '@blocksuite/block-std';
import type { GroupRenderProps } from '../matcher.js';
declare const BaseGroup_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BaseGroup<Data extends NonNullable<unknown>, Value> extends BaseGroup_base implements GroupRenderProps<Data, Value> {
    accessor data: Data;
    accessor updateData: ((data: Data) => void) | undefined;
    accessor value: Value;
    accessor updateValue: ((value: Value) => void) | undefined;
    accessor readonly: boolean;
}
export {};
//# sourceMappingURL=base.d.ts.map