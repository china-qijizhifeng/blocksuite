import { Slot } from '@blocksuite/global/utils';
import { type BlockModel, type Doc } from '@blocksuite/store';
import { nothing, type PropertyValues, type TemplateResult } from 'lit';
import type { StaticValue } from 'lit/static-html.js';
import type { CommandManager } from '../../command/index.js';
import type { UIEventDispatcher } from '../../event/index.js';
import type { SelectionManager } from '../../selection/index.js';
import type { BlockSpec, SpecStore } from '../../spec/index.js';
import { RangeManager } from '../utils/range-manager.js';
import type { ViewStore } from '../view-store.js';
import { ShadowlessElement } from './shadowless-element.js';
declare const EditorHost_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("../utils/with-disposable.js").DisposableClass>;
export declare class EditorHost extends EditorHost_base {
    get command(): CommandManager;
    get event(): UIEventDispatcher;
    get selection(): SelectionManager;
    get view(): ViewStore;
    get spec(): SpecStore;
    static styles: import("lit").CSSResult;
    accessor specs: BlockSpec[];
    accessor doc: Doc;
    accessor blockIdAttr: string;
    accessor widgetIdAttr: string;
    std: BlockSuite.Std;
    rangeManager: RangeManager | null;
    readonly slots: {
        unmounted: Slot<void>;
    };
    private _renderModel;
    willUpdate(changedProperties: PropertyValues): void;
    getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): TemplateResult | typeof nothing;
    /**
     * @deprecated
     *
     * This method is deprecated. Use `renderSpecPortal` instead.
     */
    renderModel: (model: BlockModel) => TemplateResult;
    renderSpecPortal: (doc: Doc, specs: BlockSpec[]) => TemplateResult;
    renderChildren: (model: BlockModel) => TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'editor-host': EditorHost;
    }
    namespace BlockSuite {
        interface ComponentType {
            lit: StaticValue;
        }
    }
}
export {};
//# sourceMappingURL=lit-host.d.ts.map