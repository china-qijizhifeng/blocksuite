import './surface-ref-portal.js';
import { BlockElement } from '@blocksuite/block-std';
import { type PropertyDeclaration, type TemplateResult } from 'lit';
import type { BlockCaptionEditor } from '../_common/components/block-caption.js';
import type { FrameBlockModel } from '../frame-block/index.js';
import type { Renderer } from '../surface-block/canvas-renderer/renderer.js';
import type { SurfaceRefBlockModel } from './surface-ref-model.js';
import { SurfaceRefPortal } from './surface-ref-portal.js';
import type { SurfaceRefBlockService } from './surface-ref-service.js';
type RefElementModel = BlockSuite.SurfaceElementModelType | FrameBlockModel;
export declare class SurfaceRefBlockComponent extends BlockElement<SurfaceRefBlockModel, SurfaceRefBlockService> {
    get isInSurface(): boolean;
    private get _shouldRender();
    get surfaceRenderer(): Renderer;
    get referenceModel(): RefElementModel | null;
    static styles: import("lit").CSSResult;
    private accessor _surfaceModel;
    private accessor _focused;
    private _surfaceRefRenderer;
    private _referencedModel;
    private _isInSurface;
    accessor container: HTMLDivElement;
    accessor portal: SurfaceRefPortal;
    accessor captionElement: BlockCaptionEditor;
    private _attachRenderer;
    private _initHotkey;
    private _initReferencedModel;
    private _initSelection;
    private _refreshViewport;
    private _deleteThis;
    private _focusBlock;
    private _renderMask;
    private _renderRefPlaceholder;
    private _renderRefContent;
    requestUpdate(name?: PropertyKey | undefined, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown> | undefined): void;
    connectedCallback(): void;
    updated(): void;
    viewInEdgeless(): void;
    render(): TemplateResult<1> | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-surface-ref': SurfaceRefBlockComponent;
    }
}
export {};
//# sourceMappingURL=surface-ref-block.d.ts.map