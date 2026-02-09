import { BaseSelection } from '../base.js';
export declare class SurfaceSelection extends BaseSelection {
    static type: string;
    static group: string;
    readonly elements: string[];
    readonly editing: boolean;
    readonly inoperable: boolean;
    constructor(blockId: string, elements: string[], editing: boolean, inoperable?: boolean);
    isEmpty(): boolean;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
    static fromJSON(json: Record<string, unknown> | {
        blockId: string[];
        elements: string[];
        editing: boolean;
        inoperable?: boolean;
    }): SurfaceSelection;
}
declare global {
    namespace BlockSuite {
        interface Selection {
            surface: typeof SurfaceSelection;
        }
    }
}
//# sourceMappingURL=surface.d.ts.map