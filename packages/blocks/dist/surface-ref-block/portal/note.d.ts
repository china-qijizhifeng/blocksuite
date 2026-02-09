import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type BlockSelector } from '@blocksuite/store';
import { nothing } from 'lit';
import type { NoteBlockModel } from '../../note-block/index.js';
declare const SurfaceRefNotePortal_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class SurfaceRefNotePortal extends SurfaceRefNotePortal_base {
    static styles: import("lit").CSSResult;
    accessor index: number;
    accessor model: NoteBlockModel;
    accessor host: EditorHost;
    ancestors: Set<string>;
    selector: BlockSelector;
    renderPreview(): import("lit").TemplateResult;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(): void;
    render(): typeof nothing | import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'surface-ref-note-portal': SurfaceRefNotePortal;
    }
}
export {};
//# sourceMappingURL=note.d.ts.map