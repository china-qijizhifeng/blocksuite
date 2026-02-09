import { BaseSelection } from '@blocksuite/block-std';
export declare class ImageSelection extends BaseSelection {
    static type: string;
    static group: string;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
    static fromJSON(json: Record<string, unknown>): ImageSelection;
}
declare global {
    namespace BlockSuite {
        interface Selection {
            image: typeof ImageSelection;
        }
    }
}
//# sourceMappingURL=image-selection.d.ts.map