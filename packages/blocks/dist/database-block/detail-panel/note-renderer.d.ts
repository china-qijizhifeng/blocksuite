import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { DetailSlotProps } from '../data-view/common/data-source/base.js';
import type { DataViewManager } from '../data-view/view/data-view-manager.js';
import type { DatabaseBlockModel } from '../database-model.js';
declare const NoteRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class NoteRenderer extends NoteRenderer_base implements DetailSlotProps {
    get databaseBlock(): DatabaseBlockModel;
    static styles: import("lit").CSSResult;
    accessor view: DataViewManager;
    accessor rowId: string;
    accessor model: DatabaseBlockModel;
    accessor host: EditorHost;
    accessor subHost: EditorHost;
    protected render(): unknown;
    renderNote(): import("lit").TemplateResult<1> | undefined;
    connectedCallback(): void;
    addNote(): void;
}
export {};
//# sourceMappingURL=note-renderer.d.ts.map