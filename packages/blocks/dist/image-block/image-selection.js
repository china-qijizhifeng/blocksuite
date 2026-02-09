import { BaseSelection } from '@blocksuite/block-std';
import z from 'zod';
const ImageSelectionSchema = z.object({
    blockId: z.string(),
});
export class ImageSelection extends BaseSelection {
    static { this.type = 'image'; }
    static { this.group = 'note'; }
    equals(other) {
        if (other instanceof ImageSelection) {
            return this.blockId === other.blockId;
        }
        return false;
    }
    toJSON() {
        return {
            type: this.type,
            blockId: this.blockId,
        };
    }
    static fromJSON(json) {
        ImageSelectionSchema.parse(json);
        return new ImageSelection({
            blockId: json.blockId,
        });
    }
}
//# sourceMappingURL=image-selection.js.map