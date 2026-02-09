import type { Y } from '@blocksuite/store';
import type { FontFamily, FontStyle, FontWeight } from '../../../consts.js';
import type { TextElementModel } from '../../../element-model/text.js';
import type { Bound } from '../../../utils/bound.js';
export type TextDelta = {
    insert: string;
    attributes?: Record<string, unknown>;
};
export declare function measureTextInDOM(fontFamily: string, fontSize: number, fontWeight: string): {
    lineHeight: number;
    lineGap: number;
};
export declare function getFontString({ fontStyle, fontWeight, fontSize, fontFamily, }: {
    fontStyle: string;
    fontWeight: string;
    fontSize: number;
    fontFamily: string;
}): string;
export declare function getLineHeight(fontFamily: string, fontSize: number, fontWeight: string): number;
export declare function getFontMetrics(fontFamily: string, fontSize: number, fontWeight: string): TextMetrics;
/**
 * convert a delta insert array to chunks, each chunk is a line
 */
export declare function deltaInsertsToChunks(delta: TextDelta[]): TextDelta[][];
export declare function isRTL(text: string): boolean;
export declare function normalizeText(text: string): string;
export declare function splitIntoLines(text: string): string[];
export declare function getLineWidth(text: string, font: string): number;
export declare function getTextWidth(text: string, font: string): number;
export declare function wrapTextDeltas(text: Y.Text, font: string, w: number): TextDelta[];
export declare const charWidth: {
    calculate: (char: string, font: string) => number;
    getCache: (font: string) => number[];
};
export declare function parseTokens(text: string): string[];
export declare function wrapText(text: string, font: string, maxWidth: number): string;
export declare const truncateTextByWidth: (text: string, font: string, width: number) => string;
export declare function getTextCursorPosition(model: TextElementModel, coord: {
    x: number;
    y: number;
}): number[];
export declare function getCursorByCoord(model: TextElementModel, coord: {
    x: number;
    y: number;
}): number;
export declare function normalizeTextBound({ yText, fontStyle, fontWeight, fontSize, fontFamily, hasMaxWidth, maxWidth, }: {
    yText: Y.Text;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    fontSize: number;
    fontFamily: FontFamily;
    hasMaxWidth?: boolean;
    maxWidth?: number;
}, bound: Bound, dragging?: boolean): Bound;
export declare function isFontWeightSupported(fontFamily: FontFamily | string, weight: FontWeight): boolean;
export declare function isFontStyleSupported(fontFamily: FontFamily | string, style: FontStyle): boolean;
//# sourceMappingURL=utils.d.ts.map