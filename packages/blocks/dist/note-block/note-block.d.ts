import { BlockElement } from '@blocksuite/block-std';
import { KeymapController } from './keymap-controller.js';
import type { NoteBlockModel } from './note-model.js';
import type { NoteBlockService } from './note-service.js';
export declare class NoteBlockComponent extends BlockElement<NoteBlockModel, NoteBlockService> {
    static styles: import("lit").CSSResult;
    keymapController: KeymapController;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-note': NoteBlockComponent;
    }
}
//# sourceMappingURL=note-block.d.ts.map