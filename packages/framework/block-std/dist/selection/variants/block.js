import z from 'zod';
import { BaseSelection } from '../base.js';
const BlockSelectionSchema = z.object({
    blockId: z.string(),
});
export class BlockSelection extends BaseSelection {
    static { this.type = 'block'; }
    static { this.group = 'note'; }
    equals(other) {
        if (other instanceof BlockSelection) {
            return this.blockId === other.blockId;
        }
        return false;
    }
    toJSON() {
        return {
            type: 'block',
            blockId: this.blockId,
        };
    }
    static fromJSON(json) {
        BlockSelectionSchema.parse(json);
        return new BlockSelection({
            blockId: json.blockId,
        });
    }
}
//# sourceMappingURL=block.js.map