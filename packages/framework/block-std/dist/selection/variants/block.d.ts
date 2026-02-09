import { BaseSelection } from '../base.js';
export declare class BlockSelection extends BaseSelection {
    static type: string;
    static group: string;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
    static fromJSON(json: Record<string, unknown>): BlockSelection;
}
declare global {
    namespace BlockSuite {
        interface Selection {
            block: typeof BlockSelection;
        }
    }
}
//# sourceMappingURL=block.d.ts.map