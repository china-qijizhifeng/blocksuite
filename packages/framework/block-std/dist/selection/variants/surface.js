import z from 'zod';
import { BaseSelection } from '../base.js';
const SurfaceSelectionSchema = z.object({
    elements: z.array(z.string()),
    editing: z.boolean(),
    inoperable: z.boolean().optional(),
});
export class SurfaceSelection extends BaseSelection {
    static { this.type = 'surface'; }
    static { this.group = 'edgeless'; }
    constructor(blockId, elements, editing, inoperable = false) {
        super({ blockId });
        this.elements = elements;
        this.editing = editing;
        this.inoperable = inoperable;
    }
    isEmpty() {
        return this.elements.length === 0 && !this.editing;
    }
    equals(other) {
        if (other instanceof SurfaceSelection) {
            return (this.blockId === other.blockId &&
                this.elements.length === other.elements.length &&
                this.elements.every((id, idx) => id === other.elements[idx]) &&
                this.editing === other.editing &&
                this.inoperable === other.inoperable);
        }
        return false;
    }
    toJSON() {
        return {
            type: 'surface',
            blockId: this.blockId,
            elements: this.elements,
            editing: this.editing,
            inoperable: this.inoperable,
        };
    }
    static fromJSON(json) {
        SurfaceSelectionSchema.parse(json);
        return new SurfaceSelection(json.blockId, json.elements, json.editing, json.inoperable || false);
    }
}
//# sourceMappingURL=surface.js.map