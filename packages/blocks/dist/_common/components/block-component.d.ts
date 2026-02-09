import { BlockElement, type BlockService } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import { type StyleInfo } from 'lit/directives/style-map.js';
import type { BlockCaptionEditor } from './block-caption.js';
export declare class BlockComponent<Model extends BlockModel = BlockModel, Service extends BlockService = BlockService, WidgetName extends string = string> extends BlockElement<Model, Service, WidgetName> {
    get captionEditor(): BlockCaptionEditor<BlockModel<import("./block-caption.js").BlockCaptionProps>>;
    private accessor _captionEditor;
    protected accessor useCaptionEditor: boolean;
    protected accessor showBlockSelection: boolean;
    protected accessor blockContainerStyles: StyleInfo | undefined;
    constructor();
    private _renderWithWidget;
}
//# sourceMappingURL=block-component.d.ts.map