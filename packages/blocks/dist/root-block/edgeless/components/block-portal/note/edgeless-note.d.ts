import '../../note-slicer/index.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { NoteBlockModel } from '../../../../../note-block/note-model.js';
import type { SurfaceBlockComponent } from '../../../../../surface-block/surface-block.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
declare const EdgelessNoteMask_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessNoteMask extends EdgelessNoteMask_base {
    static styles: import("lit").CSSResult;
    accessor surface: SurfaceBlockComponent;
    accessor model: NoteBlockModel;
    accessor display: boolean;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent;
    protected firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare class EdgelessBlockPortalNote extends EdgelessPortalBase<NoteBlockModel> {
    static styles: import("lit").CSSResult;
    private accessor _isSelected;
    private accessor _editing;
    private accessor _isResizing;
    private accessor _isHover;
    private accessor _noteFullHeight;
    private accessor _affineNote;
    get _zoom(): number;
    private get _isShowCollapsedContent();
    private _hovered;
    private _leaved;
    private _handleClickAtBackground;
    private _tryAddParagraph;
    private _setCollapse;
    private _collapsedContent;
    firstUpdated(): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-block-portal-note': EdgelessBlockPortalNote;
        'edgeless-note-mask': EdgelessNoteMask;
    }
}
export {};
//# sourceMappingURL=edgeless-note.d.ts.map