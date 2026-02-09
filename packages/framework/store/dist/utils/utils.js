import { toBase64 } from 'lib0/buffer.js';
import * as Y from 'yjs';
import { SYS_KEYS } from '../consts.js';
import { native2Y } from '../reactive/index.js';
import { internalPrimitives } from '../schema/base.js';
export function assertValidChildren(yBlocks, props) {
    if (!Array.isArray(props.children))
        return;
    props.children.forEach(child => {
        if (!yBlocks.has(child.id)) {
            throw new Error('Invalid child id: ' + child.id);
        }
    });
}
export function syncBlockProps(schema, model, yBlock, props) {
    const defaultProps = schema.model.props?.(internalPrimitives) ?? {};
    Object.entries(props).forEach(([key, value]) => {
        if (SYS_KEYS.has(key))
            return;
        if (value === undefined)
            return;
        // @ts-ignore
        model[key] = value;
    });
    // set default value
    Object.entries(defaultProps).forEach(([key, value]) => {
        const notExists = !yBlock.has(`prop:${key}`) || yBlock.get(`prop:${key}`) === undefined;
        if (!notExists) {
            return;
        }
        // @ts-ignore
        model[key] = native2Y(value);
    });
}
export function encodeCollectionAsYjsUpdateV2(collection) {
    return toBase64(Y.encodeStateAsUpdateV2(collection.doc));
}
export const hash = (str) => {
    return str
        .split('')
        .reduce((prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0, 0);
};
//# sourceMappingURL=utils.js.map