import { type Placement } from '@floating-ui/dom';
import { LitElement } from 'lit';
import { type AdvancedPortalOptions } from '../portal.js';
import type { FilterableListItem, FilterableListOptions } from './types.js';
export * from './types.js';
declare const FilterableListComponent_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FilterableListComponent<Props = unknown> extends FilterableListComponent_base {
    static styles: import("lit").CSSResult;
    private accessor _filterInput;
    private accessor _focussedItem;
    private accessor _filterText;
    private accessor _curFocusIndex;
    accessor placement: Placement | undefined;
    accessor abortController: AbortController | null;
    accessor listFilter: ((a: FilterableListItem<Props>, b: FilterableListItem<Props>) => number) | undefined;
    accessor options: FilterableListOptions<Props>;
    private _filterItems;
    private _select;
    private _scrollFocusedItemIntoView;
    private _buildContent;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare function showPopFilterableList({ options, filter, abortController, referenceElement, container, maxHeight, portalStyles, }: {
    options: FilterableListComponent['options'];
    referenceElement: Element;
    container?: Element;
    abortController?: AbortController;
    filter?: FilterableListComponent['listFilter'];
    maxHeight?: number;
    portalStyles?: AdvancedPortalOptions['portalStyles'];
}): void;
declare global {
    interface HTMLElementTagNameMap {
        'affine-filterable-list': FilterableListComponent;
    }
}
//# sourceMappingURL=index.d.ts.map