export class MemoryBlobSource {
    constructor() {
        this.name = 'memory';
        this.readonly = false;
        this.map = new Map();
    }
    get(key) {
        return Promise.resolve(this.map.get(key) ?? null);
    }
    set(key, value) {
        this.map.set(key, value);
        return Promise.resolve(key);
    }
    delete(key) {
        this.map.delete(key);
        return Promise.resolve();
    }
    list() {
        return Promise.resolve(Array.from(this.map.keys()));
    }
}
//# sourceMappingURL=memory.js.map