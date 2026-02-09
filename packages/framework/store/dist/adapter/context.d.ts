type Keyof<T> = T extends unknown ? keyof T : never;
export declare class ASTWalkerContext<TNode extends object> {
    get stack(): {
        node: TNode;
        prop: Keyof<TNode>;
        context: Record<string, unknown>;
    }[];
    private _stack;
    private _globalContext;
    private _defaultProp;
    _skip: boolean;
    _skipChildrenNum: number;
    private current;
    setDefaultProp: (parentProp: Keyof<TNode>) => void;
    previousNode(): TNode;
    currentNode(): TNode;
    openNode(node: TNode, parentProp?: Keyof<TNode>): this;
    setNodeContext(key: string, value: unknown): this;
    getPreviousNodeContext(key: string): unknown;
    getNodeContext(key: string): unknown;
    getGlobalContext(key: string): unknown;
    pushGlobalContextStack<StackElement>(key: string, value: StackElement): void;
    getGlobalContextStack<StackElement>(key: string): StackElement[];
    setGlobalContextStack<StackElement>(key: string, value: StackElement[]): void;
    setGlobalContext(key: string, value: unknown): this;
    closeNode(): this;
    skipAllChildren(): void;
    skipChildren(num?: number): void;
}
export {};
//# sourceMappingURL=context.d.ts.map