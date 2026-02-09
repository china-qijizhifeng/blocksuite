import { literal } from 'lit/static-html.js';
import { NoteBlockSchema } from './note-model.js';
import { NoteBlockService } from './note-service.js';
export const NoteBlockSpec = {
    schema: NoteBlockSchema,
    service: NoteBlockService,
    view: {
        component: literal `affine-note`,
    },
};
//# sourceMappingURL=note-spec.js.map