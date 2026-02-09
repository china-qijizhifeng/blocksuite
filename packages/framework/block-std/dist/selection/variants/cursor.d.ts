import { BaseSelection } from '../base.js';
export declare class CursorSelection extends BaseSelection {
    static type: string;
    static group: string;
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
    static fromJSON(json: Record<string, unknown>): CursorSelection;
}
declare global {
    namespace BlockSuite {
        interface Selection {
            cursor: typeof CursorSelection;
        }
    }
}
//# sourceMappingURL=cursor.d.ts.map