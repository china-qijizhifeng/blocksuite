import { type NoteBlockModel, NoteDisplayMode } from '@blocksuite/blocks';
import type { Doc } from '@blocksuite/store';
import { LitElement, nothing, type PropertyValues } from 'lit';
export type ReorderEvent = CustomEvent<{
    currentNumber: number;
    targetNumber: number;
    realIndex: number;
}>;
export type SelectEvent = CustomEvent<{
    id: string;
    selected: boolean;
    number: number;
    multiselect: boolean;
}>;
export type FitViewEvent = CustomEvent<{
    block: NoteBlockModel;
}>;
export type ClickBlockEvent = CustomEvent<{
    blockPath: string[];
}>;
export type DisplayModeChangeEvent = CustomEvent<{
    note: NoteBlockModel;
    newMode: NoteDisplayMode;
}>;
declare const OutlineNoteCard_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlineNoteCard extends OutlineNoteCard_base {
    static styles: import("lit").CSSResult;
    private accessor _showPopper;
    private accessor _displayModeButtonGroup;
    private accessor _displayModePanel;
    private _displayModePopper;
    private _noteDisposables;
    accessor doc: Doc;
    accessor editorMode: 'page' | 'edgeless';
    accessor note: NoteBlockModel;
    accessor index: number;
    accessor number: number;
    accessor showPreviewIcon: boolean;
    accessor enableNotesSorting: boolean;
    accessor status: 'selected' | 'placeholder' | undefined;
    accessor invisible: boolean;
    private _clearNoteDisposables;
    private _setNoteDisposables;
    private _getCurrentModeLabel;
    private _dispatchSelectEvent;
    private _dispatchDragEvent;
    private _dispatchFitViewEvent;
    private _buildBlockPath;
    private _dispatchClickBlockEvent;
    private _dispatchDisplayModeChangeEvent;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(_changedProperties: PropertyValues): void;
    firstUpdated(): void;
    render(): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'outline-note-card': OutlineNoteCard;
    }
}
export {};
//# sourceMappingURL=outline-card.d.ts.map