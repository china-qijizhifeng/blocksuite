import * as Y from 'yjs';
import { NATIVE_UNIQ_IDENTIFIER } from '../consts.js';
export class Boxed {
    get yMap() {
        return this._map;
    }
    constructor(value) {
        if (value instanceof Y.Map &&
            value.get('type') === NATIVE_UNIQ_IDENTIFIER) {
            this._map = value;
        }
        else {
            this._map = new Y.Map();
            this._map.set('type', NATIVE_UNIQ_IDENTIFIER);
            this._map.set('value', value);
        }
    }
    setValue(value) {
        return this._map.set('value', value);
    }
    getValue() {
        return this._map.get('value');
    }
    static { this.is = (value) => {
        return (value instanceof Y.Map && value.get('type') === NATIVE_UNIQ_IDENTIFIER);
    }; }
    static { this.from = (map) => {
        return new Boxed(map.get('value'));
    }; }
}
//# sourceMappingURL=boxed.js.map