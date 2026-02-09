import type { Doc } from '@blocksuite/store';
import { type BlockModel, BlockViewType } from '@blocksuite/store';
import { type PropertyValues, type TemplateResult } from 'lit';
import type { EventName, UIEventHandler } from '../../event/index.js';
import type { BaseSelection } from '../../selection/index.js';
import type { BlockService } from '../../service/index.js';
import type { EditorHost } from './lit-host.js';
import { ShadowlessElement } from './shadowless-element.js';
import type { WidgetElement } from './widget-element.js';
declare const BlockElement_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("../utils/with-disposable.js").DisposableClass>;
export declare class BlockElement<Model extends BlockModel = BlockModel, Service extends BlockService = BlockService, WidgetName extends string = string> extends BlockElement_base {
    get parentBlockElement(): BlockElement;
    get childBlockElements(): BlockElement<BlockModel<object>, BlockService<BlockModel<object>>, string>[];
    get rootElement(): BlockElement | null;
    get topContenteditableElement(): BlockElement | null;
    get flavour(): string;
    get widgetElements(): Partial<Record<WidgetName, WidgetElement>>;
    get selection(): import("../../selection/manager.js").SelectionManager;
    get std(): import("../../index.js").BlockStdScope;
    get blockId(): string;
    get isVersionMismatch(): boolean;
    protected accessor _renderers: Array<(content: unknown) => unknown>;
    accessor host: EditorHost;
    accessor model: Model;
    accessor content: TemplateResult | null;
    accessor viewType: BlockViewType;
    accessor widgets: Record<WidgetName, TemplateResult>;
    accessor doc: Doc;
    accessor dirty: boolean;
    accessor selected: BaseSelection | null;
    service: Service;
    path: string[];
    private _renderViewType;
    private _renderMismatchBlock;
    protected getUpdateComplete(): Promise<boolean>;
    protected update(changedProperties: PropertyValues): void;
    handleEvent: (name: EventName, handler: UIEventHandler, options?: {
        global?: boolean;
        flavour?: boolean;
    }) => void;
    bindHotKey(keymap: Record<string, UIEventHandler>, options?: {
        global?: boolean;
        flavour?: boolean;
    }): () => void;
    renderChildren: (model: BlockModel) => TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderBlock(): unknown;
    renderVersionMismatch(expectedVersion: number, actualVersion: number): TemplateResult;
    addRenderer(renderer: (content: unknown) => unknown): void;
    render(): unknown;
}
export {};
//# sourceMappingURL=block-element.d.ts.map