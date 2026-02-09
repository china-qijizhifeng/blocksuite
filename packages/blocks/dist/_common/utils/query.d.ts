import type { BlockElement, EditorHost, ViewStore } from '@blocksuite/block-std';
import type { InlineEditor } from '@blocksuite/inline';
import type { BlockModel } from '@blocksuite/store';
import type { RichText } from '../../_common/components/rich-text/rich-text.js';
import type { RootBlockComponent } from '../../index.js';
import type { EdgelessRootBlockComponent } from '../../root-block/edgeless/edgeless-root-block.js';
import type { PageRootBlockComponent } from '../../root-block/page/page-root-block.js';
import type { AbstractEditor } from '../types.js';
import type { Point, Rect } from './rect.js';
export type BlockComponent = BlockElement<any>;
/**
 *
 * @example
 * ```md
 * page
 * - note
 *  - paragraph <- when invoked here, the traverse order will be following
 *    - child <- 1
 *  - sibling <- 2
 * - note <- 3 (will be skipped)
 *   - paragraph <- 4
 * ```
 *
 * NOTE: this method will skip the `affine:note` block
 */
export declare function getNextBlock(editorHost: EditorHost, model: BlockModel, map?: Record<string, true>): BlockModel | null;
/**
 *
 * @example
 * ```md
 * doc
 * - note
 *   - paragraph <- 5
 * - note <- 4 (will be skipped)
 *  - paragraph <- 3
 *    - child <- 2
 *      - child <- 1
 *  - paragraph <- when invoked here, the traverse order will be above
 * ```
 *
 * NOTE: this method will just return blocks with `content` role
 */
export declare function getPreviousBlock(editorHost: EditorHost, model: BlockModel): BlockModel | null;
/**
 * This function is used to build model's "normal" block path.
 * If this function does not meet your needs, you may need to build path manually to satisfy your needs.
 * You should not modify this function.
 */
export declare function buildPath(model: BlockModel | null): string[];
export declare function blockElementGetter(model: BlockModel, view: ViewStore): BlockElement<BlockModel<object>, import("@blocksuite/block-std").BlockService<BlockModel<object>>, string> | null;
export declare function getRootByElement(element: Element): RootBlockComponent | null;
export declare function getRootByEditorHost(editorHost: EditorHost): RootBlockComponent | null;
/** If it's not in the page mode, it will return `null` directly */
export declare function getPageRootByElement(element: Element): PageRootBlockComponent | null;
/** If it's not in the page mode, it will return `null` directly */
export declare function getPageRootByEditorHost(editorHost: EditorHost): PageRootBlockComponent | null;
/** If it's not in the edgeless mode, it will return `null` directly */
export declare function getEdgelessRootByElement(element: Element): EdgelessRootBlockComponent | null;
/** If it's not in the edgeless mode, it will return `null` directly */
export declare function getEdgelessRootByEditorHost(editorHost: EditorHost): EdgelessRootBlockComponent | null;
/** @deprecated */
export declare function getEditorContainer(editorHost: EditorHost): AbstractEditor;
export declare function isInsidePageEditor(host: EditorHost): boolean;
export declare function isInsideEdgelessEditor(host: EditorHost): boolean;
/**
 * Get editor viewport element.
 * @example
 * ```ts
 * const viewportElement = getViewportElement(this.model.doc);
 * if (!viewportElement) return;
 * this._disposables.addFromEvent(viewportElement, 'scroll', () => {
 *   updatePosition();
 * });
 * ```
 */
export declare function getViewportElement(editorHost: EditorHost): HTMLDivElement | null;
/**
 * Get block component by model.
 * Note that this function is used for compatibility only, and may be removed in the future.
 *
 * Use `root.view.viewFromPath` instead.
 * @deprecated
 */
export declare function getBlockComponentByModel(editorHost: EditorHost, model: BlockModel | null): BlockElement<BlockModel<object>, import("@blocksuite/block-std").BlockService<BlockModel<object>>, string> | null;
export declare function getBlockComponentByPath(editorHost: EditorHost, blockId: string): BlockElement<BlockModel<object>, import("@blocksuite/block-std").BlockService<BlockModel<object>>, string> | null;
/**
 * Get block component by its model and wait for the doc element to finish updating.
 * Note that this function is used for compatibility only, and may be removed in the future.
 *
 * Use `root.view.viewFromPath` instead.
 * @deprecated
 */
export declare function asyncGetBlockComponentByModel(editorHost: EditorHost, model: BlockModel): Promise<BlockComponent | null>;
/**
 * @deprecated In most cases, you not need RichText, you can use {@link getInlineEditorByModel} instead.
 */
export declare function getRichTextByModel(editorHost: EditorHost, model: BlockModel): RichText | null;
export declare function asyncGetRichTextByModel(editorHost: EditorHost, model: BlockModel): Promise<RichText | null>;
export declare function getInlineEditorByModel(editorHost: EditorHost, model: BlockModel): import("@blocksuite/blocks").AffineInlineEditor | null;
export declare function asyncGetInlineEditorByModel(editorHost: EditorHost, model: BlockModel): Promise<import("@blocksuite/blocks").AffineInlineEditor | null>;
export declare function getModelByElement(element: Element): BlockModel;
export declare function getDocTitleByEditorHost(editorHost: EditorHost): HTMLElement | null;
export declare function getDocTitleInlineEditor(editorHost: EditorHost): InlineEditor | null;
/**
 * Returns `true` if element is edgeless page.
 *
 * @deprecated Use context instead. The edgeless page may be customized by the user so it's not recommended to use this method. \
 */
export declare function isEdgelessPage(element: Element): element is EdgelessRootBlockComponent;
/**
 * Returns the closest block element by a point in the rect.
 *
 * ```
 * ############### block
 * ||############# block
 * ||||########### block
 * ||||    ...
 * ||||  y - 2 * n
 * ||||    ...
 * ||||----------- cursor
 * ||||    ...
 * ||||  y + 2 * n
 * ||||    ...
 * ||||########### block
 * ||############# block
 * ############### block
 * ```
 */
export declare function getClosestBlockElementByPoint(point: Point, state?: {
    rect?: Rect;
    container?: Element;
    snapToEdge?: {
        x: boolean;
        y: boolean;
    };
} | null, scale?: number): Element | null;
/**
 * Find the most close block on the given position
 * @param container container which the blocks can be found inside
 * @param point position
 */
export declare function findClosestBlockElement(container: BlockComponent, point: Point, selector: string): BlockComponent | null;
/**
 * Returns the closest block element by element that does not contain the page element and note element.
 */
export declare function getClosestBlockElementByElement(element: Element | null): BlockComponent | null;
/**
 * Returns the model of the block element.
 */
export declare function getModelByBlockComponent(component: Element): BlockModel<object>;
/**
 * Returns rect of the block element.
 *
 * Compatible with Safari!
 * https://github.com/toeverything/blocksuite/issues/902
 * https://github.com/toeverything/blocksuite/pull/1121
 */
export declare function getRectByBlockElement(element: Element | BlockComponent): DOMRect;
/**
 * Returns block elements excluding their subtrees.
 * Only keep block elements of same level.
 */
export declare function getBlockElementsExcludeSubtrees(elements: Element[] | BlockComponent[]): Element[];
export declare function getThemeMode(): 'light' | 'dark';
/**
 * Get hovering note with given a point in edgeless mode.
 */
export declare function getHoveringNote(point: Point): Element | null;
/**
 * Get hovering top level image with given a point in edgeless mode.
 */
export declare function getHoveringImage(point: Point): Element | null;
/**
 * Returns a flag for the drop target.
 */
export declare enum DropFlags {
    Normal = 0,
    Database = 1,
    EmptyDatabase = 2
}
/**
 * Gets the drop rect by block and point.
 */
export declare function getDropRectByPoint(point: Point, model: BlockModel, element: Element): {
    rect: DOMRect;
    flag: DropFlags;
};
/**
 * Return `true` if the element has class name in the class list.
 */
export declare function hasClassNameInList(element: Element, classList: string[]): boolean;
//# sourceMappingURL=query.d.ts.map