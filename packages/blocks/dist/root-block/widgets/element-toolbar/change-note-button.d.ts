import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/note-shadow-panel.js';
import '../../edgeless/components/panel/note-display-mode-panel.js';
import '../../edgeless/components/panel/scale-panel.js';
import '../../edgeless/components/panel/size-panel.js';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { NoteBlockModel } from '../../../note-block/note-model.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeNoteButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeNoteButton extends EdgelessChangeNoteButton_base {
    private get doc();
    private accessor _scalePanelRef;
    private accessor _cornersPanelRef;
    accessor notes: NoteBlockModel[];
    accessor enableNoteSlicer: boolean;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor quickConnectButton: TemplateResult<1>;
    private _setBackground;
    private _setShadowType;
    private _setDisplayMode;
    private _setStrokeWidth;
    private _setStrokeStyle;
    private _setStyles;
    private _setBorderRadius;
    private _setNoteScale;
    private _setCollapse;
    private _handleNoteSlicerButtonClick;
    private _getScaleLabel;
    render(): Iterable<symbol | TemplateResult<1>>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-note-button': EdgelessChangeNoteButton;
    }
}
export declare function renderNoteButton(edgeless: EdgelessRootBlockComponent, notes?: NoteBlockModel[], quickConnectButton?: TemplateResult<1>[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-note-button.d.ts.map