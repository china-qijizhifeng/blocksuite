import './template-loading.js';
import './overlay-scrollbar.js';
import { LitElement } from 'lit';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
import { EdgelessDraggableElementController } from '../common/draggable/draggable-element.controller.js';
import type { Template } from './template-type.js';
declare const EdgelessTemplatePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessTemplatePanel extends EdgelessTemplatePanel_base {
    static templates: {
        list: (category: string) => Promise<Template[]>;
        categories: () => Promise<string[]>;
        search: (keyword: string, cateName?: string | undefined) => Promise<Template[]>;
        extend(manager: import("./template-type.js").TemplateManager): void;
    };
    static styles: import("lit").CSSResult;
    private accessor _currentCategory;
    private accessor _loadingTemplate;
    private accessor _searchKeyword;
    private accessor _loading;
    private accessor _categories;
    private accessor _templates;
    accessor isDragging: boolean;
    private _fetchJob;
    draggableController: EdgelessDraggableElementController<Template>;
    accessor edgeless: EdgelessRootBlockComponent;
    private _initCategory;
    private _fetch;
    private _updateTemplates;
    private _getLocalSelectedCategory;
    private _createTemplateJob;
    private _insertTemplate;
    private _closePanel;
    private _updateSearchKeyword;
    private _initDragController;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-templates-panel': EdgelessTemplatePanel;
    }
}
export {};
//# sourceMappingURL=template-panel.d.ts.map