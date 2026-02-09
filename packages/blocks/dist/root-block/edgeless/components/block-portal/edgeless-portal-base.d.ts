import { ShadowlessElement } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import type { SurfaceBlockComponent } from '../../../../surface-block/surface-block.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessBlockPortalContainer } from './edgeless-block-portal.js';
declare const EdgelessPortalBase_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessPortalBase<T extends BlockModel> extends EdgelessPortalBase_base {
    accessor index: number;
    accessor model: T;
    accessor surface: SurfaceBlockComponent;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor updatingSet: Set<string>;
    accessor concurrentUpdatingCount: number;
    accessor portalContainer: EdgelessBlockPortalContainer;
    protected renderModel(model: T): import("lit").TemplateResult;
    protected scheduleUpdate(): void | Promise<unknown>;
    connectedCallback(): void;
}
export {};
//# sourceMappingURL=edgeless-portal-base.d.ts.map