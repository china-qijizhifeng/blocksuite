import z from 'zod';
import { BaseSelection } from '../base.js';
const CursorSelectionSchema = z.object({
    x: z.number(),
    y: z.number(),
});
export class CursorSelection extends BaseSelection {
    static { this.type = 'cursor'; }
    static { this.group = 'edgeless'; }
    constructor(x, y) {
        super({ blockId: '[edgeless-cursor]' });
        this.x = x;
        this.y = y;
    }
    equals(other) {
        if (other instanceof CursorSelection) {
            return this.x === other.x && this.y === other.y;
        }
        return false;
    }
    toJSON() {
        return {
            type: 'cursor',
            x: this.x,
            y: this.y,
        };
    }
    static fromJSON(json) {
        CursorSelectionSchema.parse(json);
        return new CursorSelection(json.x, json.y);
    }
}
//# sourceMappingURL=cursor.js.map