export type BaseSelectionOptions = {
    blockId: string;
};
export declare abstract class BaseSelection {
    static readonly type: string;
    static readonly group: string;
    readonly blockId: string;
    constructor({ blockId }: BaseSelectionOptions);
    is<T extends BlockSuite.SelectionType>(type: T): this is BlockSuite.SelectionInstance[T];
    get type(): BlockSuite.SelectionType;
    get group(): string;
    abstract equals(other: BaseSelection): boolean;
    abstract toJSON(): Record<string, unknown>;
    static fromJSON(_: Record<string, unknown>): BaseSelection;
}
//# sourceMappingURL=base.d.ts.map