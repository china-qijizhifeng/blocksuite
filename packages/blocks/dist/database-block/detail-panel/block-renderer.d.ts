import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { DetailSlotProps } from '../data-view/common/data-source/base.js';
import type { DataViewKanbanManager } from '../data-view/view/presets/kanban/kanban-view-manager.js';
import type { DataViewTableManager } from '../data-view/view/presets/table/table-view-manager.js';
declare const BlockRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BlockRenderer extends BlockRenderer_base implements DetailSlotProps {
    get model(): import("@blocksuite/store").BlockModel<object> | undefined;
    get service(): import("@blocksuite/blocks").DatabaseBlockService<import("@blocksuite/blocks").AffineTextAttributes>;
    get inlineManager(): import("@blocksuite/blocks").InlineManager<import("@blocksuite/blocks").AffineTextAttributes>;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@blocksuite/blocks").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        code?: any;
        link?: any;
        bold?: any;
        italic?: any;
        background?: any;
        reference?: any;
        strike?: any;
        color?: any;
        comment?: any;
        underline?: any;
        aiPlaceholder?: any;
        aiDiff?: any;
    }, {
        code?: any;
        link?: any;
        bold?: any;
        italic?: any;
        background?: any;
        reference?: any;
        strike?: any;
        color?: any;
        comment?: any;
        underline?: any;
        aiPlaceholder?: any;
        aiDiff?: any;
    }>;
    get attributeRenderer(): import("@blocksuite/inline/types").AttributeRenderer<import("@blocksuite/blocks").AffineTextAttributes>;
    static styles: import("lit").CSSResult;
    accessor view: DataViewTableManager | DataViewKanbanManager;
    accessor rowId: string;
    accessor host: EditorHost;
    protected render(): unknown;
    connectedCallback(): void;
    renderIcon(): import("lit").TemplateResult<1> | undefined;
}
export {};
//# sourceMappingURL=block-renderer.d.ts.map