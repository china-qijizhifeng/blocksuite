import '../buttons/tool-icon-button.js';
import { LitElement, nothing } from 'lit';
import type { NoteBlockModel } from '../../../../note-block/note-model.js';
import { type ConnectorElementModel, type ShapeElementModel } from '../../../../surface-block/element-model/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessAutoCompletePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessAutoCompletePanel extends EdgelessAutoCompletePanel_base {
    static styles: import("lit").CSSResult;
    private _overlay;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor position: [number, number];
    accessor currentSource: ShapeElementModel | NoteBlockModel;
    accessor connector: ConnectorElementModel;
    constructor(position: [number, number], edgeless: EdgelessRootBlockComponent, currentSource: ShapeElementModel | NoteBlockModel, connector: ConnectorElementModel);
    private _generateTarget;
    private _getTargetXYWH;
    private _connectorExist;
    private _showTextOverlay;
    private _showNoteOverlay;
    private _showFrameOverlay;
    private _showShapeOverlay;
    private _showOverlay;
    private _removeOverlay;
    private _addShape;
    private _addNote;
    private _addFrame;
    private _addText;
    private _autoComplete;
    private _getPanelPosition;
    private _getCurrentSourceInfo;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-auto-complete-panel': EdgelessAutoCompletePanel;
    }
}
export {};
//# sourceMappingURL=auto-complete-panel.d.ts.map