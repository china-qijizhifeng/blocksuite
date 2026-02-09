import './note-menu.js';
import { LitElement } from 'lit';
import type { NoteTool } from '../../../controllers/tools/note-tool.js';
declare const EdgelessNoteSeniorButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessNoteSeniorButton extends EdgelessNoteSeniorButton_base {
    static styles: import("lit").CSSResult;
    private _states;
    private accessor _noteBg;
    type: "affine:note";
    enableActiveBackground: boolean;
    accessor childFlavour: NoteTool['childFlavour'];
    accessor childType: string;
    accessor tip: string;
    private _toggleNoteMenu;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=note-senior-button.d.ts.map