export type XYWH = [number, number, number, number];
export type SerializedXYWH = `[${number},${number},${number},${number}]`;
export declare function serializeXYWH(x: number, y: number, w: number, h: number): SerializedXYWH;
export declare function deserializeXYWH(xywh: string): XYWH;
//# sourceMappingURL=xywh.d.ts.map