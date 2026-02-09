import type { BlockService } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import type { TemplateResult } from 'lit';
import { Bound } from '../../surface-block/index.js';
import { BlockComponent } from '../components/block-component.js';
import type { EdgelessSelectableProps } from '../edgeless/mixin/index.js';
import { type EmbedCardStyle } from '../utils/index.js';
export declare class EmbedBlockElement<Model extends BlockModel<EdgelessSelectableProps> = BlockModel<EdgelessSelectableProps>, Service extends BlockService = BlockService, WidgetName extends string = string> extends BlockComponent<Model, Service, WidgetName> {
    get isInSurface(): boolean;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent | null;
    get surface(): import("@blocksuite/blocks").SurfaceBlockComponent | null;
    get bound(): Bound;
    protected accessor embedBlock: HTMLDivElement;
    static styles: import("lit").CSSResult;
    private _isInSurface;
    private _fetchAbortController;
    get fetchAbortController(): AbortController;
    private _dragHandleOption;
    protected _cardStyle: EmbedCardStyle;
    protected _width: number;
    protected _height: number;
    accessor useCaptionEditor: boolean;
    accessor showBlockSelection: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderEmbed: (children: () => TemplateResult) => TemplateResult<1>;
}
//# sourceMappingURL=embed-block-element.d.ts.map