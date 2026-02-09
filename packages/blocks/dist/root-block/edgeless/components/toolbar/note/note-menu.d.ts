import '../../buttons/tool-icon-button.js';
import '../common/slide-menu.js';
import { LitElement } from 'lit';
import { type NoteChildrenFlavour } from '../../../../../_common/utils/index.js';
import type { NoteTool } from '../../../controllers/tools/note-tool.js';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessNoteMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessNoteMenu extends EdgelessNoteMenu_base {
    static styles: import("lit").CSSResult;
    private accessor _imageLoading;
    type: EdgelessTool['type'];
    accessor childFlavour: NoteChildrenFlavour;
    accessor childType: string | null;
    accessor tip: string;
    accessor onChange: (props: Partial<{
        childFlavour: NoteTool['childFlavour'];
        childType: string | null;
        tip: string;
    }>) => void;
    private _addImages;
    private _onHandleLinkButtonClick;
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-note-menu': EdgelessNoteMenu;
    }
}
export {};
//# sourceMappingURL=note-menu.d.ts.map