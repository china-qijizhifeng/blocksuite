import '../../buttons/tool-icon-button.js';
import './note-menu.js';
import { LitElement } from 'lit';
import type { NoteTool } from '../../../controllers/tools/note-tool.js';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessNoteToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessNoteToolButton extends EdgelessNoteToolButton_base {
    static styles: import("lit").CSSResult;
    private _noteMenu;
    private _states;
    type: EdgelessTool['type'];
    accessor childFlavour: NoteTool['childFlavour'];
    accessor childType: string;
    accessor tip: string;
    private _toggleNoteMenu;
    private _disposeMenu;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-note-tool-button': EdgelessNoteToolButton;
    }
}
export {};
//# sourceMappingURL=note-tool-button.d.ts.map