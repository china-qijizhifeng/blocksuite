import { Slot } from '@blocksuite/global/utils';
import { LitElement } from 'lit';
import { type IVec } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { PieMenuSchema } from './base.js';
import type { AffinePieMenuWidget } from './index.js';
import { PieNode } from './node.js';
declare const PieMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class PieMenu extends PieMenu_base {
    get hoveredNode(): PieNode | null;
    get rootNode(): PieNode;
    get activeNode(): PieNode;
    static styles: import("lit").CSSResult;
    private _hoveredNode;
    private _openSubmenuTimeout?;
    slots: {
        pointerAngleUpdated: Slot<number | null>;
        requestNodeUpdate: Slot<void>;
    };
    accessor rootElement: EdgelessRootBlockComponent;
    accessor widgetElement: AffinePieMenuWidget;
    accessor schema: PieMenuSchema;
    accessor position: IVec;
    selectionChain: PieNode[];
    abortController: AbortController;
    private _setupEvents;
    private selectChildWithIndex;
    private _handleKeyDown;
    private _handlePointerMove;
    private _createNodeTree;
    close(): void;
    /**
     * Position of the active node relative to the view
     */
    getActiveNodeRelPos(): IVec;
    getNodeRelPos(node: PieNode): IVec;
    getActiveNodeToMouseLenSq(mouse: IVec): number;
    isChildOfActiveNode(node: PieNode): boolean;
    isActiveNode(node: PieNode): boolean;
    popSelectionChainTo(node: PieNode): void;
    selectHovered(): void;
    setHovered(node: PieNode | null): void;
    openSubmenu(submenu: PieNode): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=menu.d.ts.map