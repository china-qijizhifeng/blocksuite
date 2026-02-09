import { LitElement, nothing, type PropertyValues } from 'lit';
import type { EdgelessRootBlockComponent, NoteBlockComponent, NoteBlockModel } from '../../../../index.js';
declare const NoteSlicer_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class NoteSlicer extends NoteSlicer_base {
    get _editorHost(): import("@blocksuite/block-std").EditorHost;
    get _noteBlockElement(): NoteBlockComponent | null;
    get _notePortalElement(): Element | null | undefined;
    get _viewportOffset(): {
        left: number;
        top: number;
    };
    get _selection(): import("../../services/selection-manager.js").EdgelessSelectionManager;
    get _zoom(): number;
    static styles: import("lit").CSSResult;
    private accessor _activeSlicerIndex;
    private _hidden;
    private _divingLinePositions;
    private _noteBlockIds;
    private _noteDisposables;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor anchorNote: NoteBlockModel | null;
    private _updateDivingLineAndBlockIds;
    private _updateActiveSlicerIndex;
    private _sliceNote;
    protected updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'note-slicer': NoteSlicer;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map