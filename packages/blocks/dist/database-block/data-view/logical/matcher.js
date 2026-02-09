import { typesystem } from './typesystem.js';
export class Matcher {
    constructor(_match = typesystem.isSubtype.bind(typesystem)) {
        this._match = _match;
        this.list = [];
    }
    register(type, data) {
        this.list.push({ type, data });
    }
    match(type) {
        for (const t of this.list) {
            if (this._match(t.type, type)) {
                return t.data;
            }
        }
        return;
    }
    allMatched(type) {
        const result = [];
        for (const t of this.list) {
            if (this._match(t.type, type)) {
                result.push(t);
            }
        }
        return result;
    }
    allMatchedData(type) {
        const result = [];
        for (const t of this.list) {
            if (this._match(t.type, type)) {
                result.push(t.data);
            }
        }
        return result;
    }
    findData(f) {
        return this.list.find(data => f(data.data))?.data;
    }
    find(f) {
        return this.list.find(f);
    }
    all() {
        return this.list;
    }
    isMatched(type, target) {
        return this._match(type, target);
    }
}
//# sourceMappingURL=matcher.js.map