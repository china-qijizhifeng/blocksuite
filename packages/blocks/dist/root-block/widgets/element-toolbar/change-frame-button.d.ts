import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import { LitElement, nothing } from 'lit';
import type { FrameBlockModel } from '../../../frame-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeFrameButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeFrameButton extends EdgelessChangeFrameButton_base {
    accessor edgeless: EdgelessRootBlockComponent;
    accessor frames: FrameBlockModel[];
    get service(): import("@blocksuite/blocks").EdgelessRootService;
    private _setFrameBackground;
    private _insertIntoPage;
    protected render(): Iterable<symbol | import("lit").TemplateResult<1>>;
}
export declare function renderFrameButton(edgeless: EdgelessRootBlockComponent, frames?: FrameBlockModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-frame-button.d.ts.map