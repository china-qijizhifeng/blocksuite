import type { BlockModel, Doc } from '@blocksuite/store';
import { LitElement } from 'lit';
import type { EventName, UIEventHandler } from '../../event/index.js';
import type { BlockService } from '../../service/index.js';
import type { BlockElement } from './block-element.js';
import type { EditorHost } from './lit-host.js';
declare const WidgetElement_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../utils/with-disposable.js").DisposableClass>;
export declare class WidgetElement<Model extends BlockModel = BlockModel, B extends BlockElement = BlockElement, S extends BlockService = BlockService> extends WidgetElement_base {
    accessor host: EditorHost;
    accessor doc: Doc;
    accessor model: Model;
    path: string[];
    service: S;
    blockElement: B;
    get flavour(): string;
    get std(): import("../../index.js").BlockStdScope;
    handleEvent: (name: EventName, handler: UIEventHandler, options?: {
        global?: boolean;
    }) => void;
    bindHotKey(keymap: Record<string, UIEventHandler>, options?: {
        global: boolean;
    }): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): unknown;
}
export {};
//# sourceMappingURL=widget-element.d.ts.map