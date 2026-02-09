export function serializeXYWH(x, y, w, h) {
    return `[${x},${y},${w},${h}]`;
}
export function deserializeXYWH(xywh) {
    return JSON.parse(xywh);
}
//# sourceMappingURL=xywh.js.map