export class ASTWalkerContext {
    constructor() {
        this._stack = [];
        this._globalContext = Object.create(null);
        this._defaultProp = 'children';
        this._skip = false;
        this._skipChildrenNum = 0;
        this.setDefaultProp = (parentProp) => {
            this._defaultProp = parentProp;
        };
    }
    get stack() {
        return this._stack;
    }
    current() {
        return this._stack[this._stack.length - 1];
    }
    previousNode() {
        return this._stack[this._stack.length - 2]?.node;
    }
    currentNode() {
        return this.current()?.node;
    }
    openNode(node, parentProp) {
        this._stack.push({
            node,
            prop: parentProp ?? this._defaultProp,
            context: Object.create(null),
        });
        return this;
    }
    setNodeContext(key, value) {
        this._stack[this._stack.length - 1].context[key] = value;
        return this;
    }
    getPreviousNodeContext(key) {
        return this._stack[this._stack.length - 2]?.context[key];
    }
    getNodeContext(key) {
        return this.current().context[key];
    }
    getGlobalContext(key) {
        return this._globalContext[key];
    }
    pushGlobalContextStack(key, value) {
        const stack = this._globalContext[key];
        if (stack instanceof Array) {
            stack.push(value);
        }
        else {
            this._globalContext[key] = [value];
        }
    }
    getGlobalContextStack(key) {
        const stack = this._globalContext[key];
        if (stack instanceof Array) {
            return stack;
        }
        else {
            return [];
        }
    }
    setGlobalContextStack(key, value) {
        this._globalContext[key] = value;
    }
    setGlobalContext(key, value) {
        this._globalContext[key] = value;
        return this;
    }
    closeNode() {
        const ele = this._stack.pop();
        if (!ele)
            return this;
        const parent = this._stack.pop();
        if (!parent) {
            this._stack.push(ele);
            return this;
        }
        if (parent.node[ele.prop] instanceof Array) {
            parent.node[ele.prop].push(ele.node);
        }
        this._stack.push(parent);
        return this;
    }
    skipAllChildren() {
        this._skip = true;
    }
    skipChildren(num = 1) {
        this._skipChildrenNum = num;
    }
}
//# sourceMappingURL=context.js.map