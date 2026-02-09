// https://stackoverflow.com/questions/31538010/test-if-a-variable-is-a-primitive-rather-than-an-object
import { ErrorCode } from '../exceptions/code.js';
import { BlockSuiteError } from '../exceptions/index.js';
export function isPrimitive(a) {
    return a !== Object(a);
}
export function assertType(_) { }
export function assertExists(val, message = 'val does not exist') {
    if (val === null || val === undefined) {
        if (message instanceof Error) {
            throw message;
        }
        throw new BlockSuiteError(ErrorCode.ValueNotExists, message);
    }
}
export function assertNotExists(val, message = 'val exists') {
    if (val !== null && val !== undefined) {
        throw new BlockSuiteError(ErrorCode.ValueNotExists, message);
    }
}
export function isEqual(val, expected) {
    const a = isPrimitive(val);
    const b = isPrimitive(expected);
    if (a && b) {
        if (!Object.is(val, expected)) {
            return false;
        }
    }
    else if (a !== b) {
        return false;
    }
    else {
        if (Array.isArray(val) && Array.isArray(expected)) {
            if (val.length !== expected.length) {
                return false;
            }
            return val.every((x, i) => isEqual(x, expected[i]));
        }
        else if (typeof val === 'object' && typeof expected === 'object') {
            const obj1 = Object.entries(val);
            const obj2 = Object.entries(expected);
            if (obj1.length !== obj2.length) {
                return false;
            }
            return obj1.every((x, i) => isEqual(x, obj2[i]));
        }
    }
    return true;
}
export function assertEquals(val, expected, message = 'val is not same as expected') {
    if (!isEqual(val, expected)) {
        throw new BlockSuiteError(ErrorCode.ValueNotEqual, message);
    }
}
export function assertInstanceOf(val, expected, message = 'val is not instance of expected') {
    if (!(val instanceof expected)) {
        throw new BlockSuiteError(ErrorCode.ValueNotInstanceOf, message);
    }
}
//# sourceMappingURL=assert.js.map