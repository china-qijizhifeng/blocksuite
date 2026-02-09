export class BaseSelection {
    constructor({ blockId }) {
        this.blockId = blockId;
    }
    is(type) {
        return this.type === type;
    }
    get type() {
        return this.constructor
            .type;
    }
    get group() {
        return this.constructor.group;
    }
    static fromJSON(_) {
        throw new Error('You must override this method');
    }
}
//# sourceMappingURL=base.js.map