import '../root-block/edgeless/components/block-portal/edgeless-block-portal.js';
import { BlockElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import { ThemeObserver } from '../_common/theme/theme-observer.js';
import { isShape } from '../root-block/edgeless/components/auto-complete/utils.js';
import type { EdgelessBlockPortalContainer } from '../root-block/edgeless/components/block-portal/edgeless-block-portal.js';
import type { EdgelessRootBlockComponent } from '../root-block/edgeless/edgeless-root-block.js';
import { FrameOverlay } from '../root-block/edgeless/frame-manager.js';
import { Renderer } from './canvas-renderer/renderer.js';
import { ConnectorElementModel } from './element-model/index.js';
import { ConnectionOverlay } from './managers/connector-manager.js';
import type { SurfaceBlockModel } from './surface-model.js';
import type { SurfaceBlockService } from './surface-service.js';
import { Bound } from './utils/bound.js';
export type IndexedCanvasUpdateEvent = CustomEvent<{
    content: HTMLCanvasElement[];
}>;
export declare class SurfaceBlockComponent extends BlockElement<SurfaceBlockModel, SurfaceBlockService> {
    get renderer(): Renderer;
    get edgeless(): EdgelessRootBlockComponent;
    private get _isEdgeless();
    static styles: import("lit").CSSResult;
    static isShape: typeof isShape;
    private _renderer;
    private _lastTime;
    private _cachedViewport;
    private accessor _surfaceContainer;
    readonly themeObserver: ThemeObserver;
    overlays: {
        connector: ConnectionOverlay;
        frame: FrameOverlay;
    };
    accessor portal: EdgelessBlockPortalContainer;
    private _initOverlay;
    private _initRenderer;
    private _initThemeObserver;
    private _emitStackingCanvasUpdate;
    connectedCallback(): void;
    firstUpdated(): void;
    refresh(): void;
    fitToViewport(bound: Bound): void;
    /** @internal Only for testing */
    initDefaultGestureHandler(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    static isConnector: (element: unknown) => element is ConnectorElementModel;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-surface': SurfaceBlockComponent;
    }
}
//# sourceMappingURL=surface-block.d.ts.map