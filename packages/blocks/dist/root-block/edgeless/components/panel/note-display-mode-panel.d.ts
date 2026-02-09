import { LitElement } from 'lit';
import { NoteDisplayMode } from '../../../../_common/types.js';
declare const NoteDisplayModePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class NoteDisplayModePanel extends NoteDisplayModePanel_base {
    static styles: import("lit").CSSResult;
    accessor displayMode: NoteDisplayMode;
    accessor onSelect: (displayMode: NoteDisplayMode) => void;
    accessor panelWidth: number;
    private _DisplayModeIcon;
    private _DisplayModeLabel;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'note-display-mode-panel': NoteDisplayModePanel;
    }
}
export {};
//# sourceMappingURL=note-display-mode-panel.d.ts.map