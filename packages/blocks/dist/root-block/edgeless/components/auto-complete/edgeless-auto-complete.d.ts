import './auto-complete-panel.js';
import { LitElement, nothing } from 'lit';
import type { NoteBlockModel } from '../../../../note-block/index.js';
import { ShapeElementModel } from '../../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { SelectedRect } from '../rects/edgeless-selected-rect.js';
declare const EdgelessAutoComplete_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessAutoComplete extends EdgelessAutoComplete_base {
    private get _surface();
    get canShowAutoComplete(): boolean;
    static styles: import("lit").CSSResult;
    private accessor _isHover;
    private accessor _isMoving;
    private _timer;
    private _autoCompleteOverlay;
    private _pathGenerator;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor selectedRect: SelectedRect;
    accessor current: ShapeElementModel | NoteBlockModel;
    private _createAutoCompletePanel;
    private _onPointerDown;
    private _addConnector;
    private _generateElementOnClick;
    private _addMindmapNode;
    private _showNextShape;
    private _getConnectedElements;
    private _computeNextBound;
    private _computeLine;
    private _getMindmapButtons;
    private _renderMindMapButtons;
    private _renderArrow;
    connectedCallback(): void;
    firstUpdated(): void;
    removeOverlay(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-auto-complete': EdgelessAutoComplete;
    }
}
export {};
//# sourceMappingURL=edgeless-auto-complete.d.ts.map