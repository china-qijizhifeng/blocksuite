import { Vec } from './vec.js';
export class PointLocation extends Array {
    get tangent() {
        return this._tangent;
    }
    set tangent(value) {
        this._tangent = value;
    }
    get in() {
        return this._in;
    }
    get absIn() {
        return Vec.add(this, this._in);
    }
    set in(value) {
        this._in = value;
    }
    get out() {
        return this._out;
    }
    get absOut() {
        return Vec.add(this, this._out);
    }
    set out(value) {
        this._out = value;
    }
    constructor(point = [0, 0], tangent = [0, 0], inVec = [0, 0], outVec = [0, 0]) {
        super(2);
        // the tangent belongs to the point on the element outline
        this._tangent = [0, 0];
        this._in = [0, 0];
        this._out = [0, 0];
        this[0] = point[0];
        this[1] = point[1];
        this._tangent = tangent;
        this._in = inVec;
        this._out = outVec;
    }
    toVec() {
        return [this[0], this[1]];
    }
    setVec(vec) {
        this[0] = vec[0];
        this[1] = vec[1];
        return this;
    }
    clone() {
        return new PointLocation(this, this._tangent, this._in, this._out);
    }
    static fromVec(vec) {
        const point = new PointLocation();
        point[0] = vec[0];
        point[1] = vec[1];
        return point;
    }
}
//# sourceMappingURL=point-location.js.map