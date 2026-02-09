import type { FontFamily } from '../../consts.js';
export declare const isRTL: (text: string) => boolean;
export declare function getLineHeight(fontFamily: FontFamily, fontSize: number): number;
export declare function getFontString({ fontStyle, fontWeight, fontSize, fontFamily, }: {
    fontFamily: FontFamily;
    fontSize: number;
    fontStyle: string;
    fontWeight: string;
}): string;
export declare function normalizeText(text: string): string;
export declare function splitIntoLines(text: string): string[];
export declare function getLineWidth(text: string, font: string): number;
export declare function getTextRect(text: string, fontFamily: string, fontSize: number): {
    w: number;
    h: number;
};
export declare function getTextWidth(text: string, font: string): number;
export declare const getTextHeight: (text: string, lineHeight: number) => number;
export declare function parseTokens(text: string): string[];
export declare const charWidth: {
    calculate: (char: string, font: string) => number;
    getCache: (font: string) => number[];
};
export declare function wrapText(text: string, font: string, maxWidth: number): string;
//# sourceMappingURL=utils.d.ts.map