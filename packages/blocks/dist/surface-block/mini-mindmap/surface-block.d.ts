import { BlockElement } from '@blocksuite/block-std';
import type { SurfaceBlockModel } from '../surface-model.js';
import type { MindmapService } from './service.js';
export declare class MindmapSurfaceBlock extends BlockElement<SurfaceBlockModel> {
    private _theme;
    private _layer;
    private _renderer;
    accessor editorContainer: HTMLDivElement;
    get mindmapService(): MindmapService;
    private _adjustNodeWidth;
    private _resizeEffect;
    private _setupCenterEffect;
    private _setupRenderer;
    connectedCallback(): void;
    firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=surface-block.d.ts.map