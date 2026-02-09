import './note/edgeless-note.js';
import './image/edgeless-image.js';
import './bookmark/edgeless-bookmark.js';
import './attachment/edgeless-attachment.js';
import './frame/edgeless-frame.js';
import './embed/edgeless-embed.js';
import './edgeless-text/edgeless-edgeless-text.js';
import '../rects/edgeless-selected-rect.js';
import '../rects/edgeless-dragging-area-rect.js';
import '../presentation/edgeless-navigator-black-background.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { FrameBlockModel } from '../../../../frame-block/frame-model.js';
import type { NoteBlockModel } from '../../../../note-block/index.js';
import type { GroupElementModel } from '../../../../surface-block/index.js';
import type { SurfaceBlockComponent } from '../../../../surface-block/surface-block.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessSelectedRect } from '../rects/edgeless-selected-rect.js';
import type { EdgelessPortalBase } from './edgeless-portal-base.js';
export type AutoConnectElement = NoteBlockModel | FrameBlockModel | GroupElementModel;
declare const EdgelessBlockPortalContainer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessBlockPortalContainer extends EdgelessBlockPortalContainer_base {
    get isDragging(): boolean;
    static styles: import("lit").CSSResult;
    private accessor _isResizing;
    private accessor _enableNoteSlicer;
    private accessor _slicerAnchorNote;
    private _visibleElements;
    private _updateOnVisibleBlocksChange;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor container: HTMLDivElement;
    accessor selectedRect: EdgelessSelectedRect;
    accessor layer: HTMLDivElement;
    accessor canvasSlot: HTMLDivElement;
    concurrentRendering: number;
    renderingSet: Set<string>;
    refreshLayerViewport: () => void;
    /**
     * @returns true if the visible elements have changed
     */
    private _updateVisibleBlocks;
    private _updateNoteSlicer;
    private _getLayerViewport;
    setSlotContent(children: HTMLElement[]): void;
    getPortalElement(id: string): EdgelessPortalBase<BlockSuite.EdgelessBlockModelType> | null;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): typeof nothing | import("lit").TemplateResult;
    static renderPortal(block: BlockSuite.EdgelessBlockModelType, zIndex: number, surface: SurfaceBlockComponent, edgeless: EdgelessRootBlockComponent): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-block-portal-container': EdgelessBlockPortalContainer;
    }
}
export {};
//# sourceMappingURL=edgeless-block-portal.d.ts.map