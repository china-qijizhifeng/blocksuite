import { BaseSelection } from '../base.js';
export type TextRangePoint = {
    blockId: string;
    index: number;
    length: number;
};
export type TextSelectionProps = {
    from: TextRangePoint;
    to: TextRangePoint | null;
    reverse?: boolean;
};
export declare class TextSelection extends BaseSelection {
    get start(): TextRangePoint;
    get end(): TextRangePoint;
    static type: string;
    static group: string;
    from: TextRangePoint;
    to: TextRangePoint | null;
    reverse: boolean;
    constructor({ from, to, reverse }: TextSelectionProps);
    private _equalPoint;
    empty(): boolean;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
    isCollapsed(): boolean;
    isInSameBlock(): boolean;
    static fromJSON(json: Record<string, unknown>): TextSelection;
}
declare global {
    namespace BlockSuite {
        interface Selection {
            text: typeof TextSelection;
        }
    }
}
//# sourceMappingURL=text.d.ts.map