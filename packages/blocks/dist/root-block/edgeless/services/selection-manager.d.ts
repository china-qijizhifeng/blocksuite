import type { CursorSelection } from '@blocksuite/block-std';
import type { SurfaceSelection } from '@blocksuite/block-std';
import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { MindmapElementModel } from '../../../surface-block/element-model/mindmap.js';
import { GroupElementModel, type SurfaceBlockModel } from '../../../surface-block/index.js';
import type { EdgelessRootService } from '../edgeless-root-service.js';
export interface EdgelessSelectionState {
    /**
     * The selected elements. Could be blocks or canvas elements
     */
    elements: string[];
    /**
     * Indicate whether the selected element is in editing mode
     */
    editing: boolean;
    /**
     *  Cannot be operated, only box is displayed
     */
    inoperable?: boolean;
}
export interface CursorSelectionState {
    x: number;
    y: number;
}
export declare class EdgelessSelectionManager {
    get lastSurfaceSelections(): SurfaceSelection[];
    get surfaceSelections(): SurfaceSelection[];
    get cursorSelection(): CursorSelection | null;
    get activeGroup(): GroupElementModel | MindmapElementModel | null;
    get selectedSet(): Set<string>;
    get remoteSelectedSet(): Set<string>;
    get remoteCursorSelectionMap(): Map<number, CursorSelection>;
    get remoteSurfaceSelectionsMap(): Map<number, SurfaceSelection[]>;
    get empty(): boolean;
    get editing(): boolean;
    get inoperable(): boolean;
    get selectedIds(): string[];
    get selectedElements(): BlockSuite.EdgelessModelType[];
    get firstElement(): BlockSuite.EdgelessModelType;
    get selectedBound(): import("../../../surface-block/index.js").Bound;
    get stdSelectionManager(): import("@blocksuite/block-std").SelectionManager;
    private _lastSurfaceSelections;
    private _surfaceSelections;
    private _cursorSelection;
    private _activeGroup;
    private _selectedSet;
    private _remoteSelectedSet;
    private _remoteCursorSelectionMap;
    private _remoteSurfaceSelectionsMap;
    service: EdgelessRootService;
    surfaceModel: SurfaceBlockModel;
    disposable: DisposableGroup;
    readonly slots: {
        updated: Slot<SurfaceSelection[]>;
        remoteUpdated: Slot<void>;
        cursorUpdated: Slot<CursorSelection>;
        remoteCursorUpdated: Slot<void>;
    };
    constructor(service: EdgelessRootService);
    mount(): void;
    isEmpty(selections: SurfaceSelection[]): boolean;
    equals(selection: SurfaceSelection[]): boolean;
    /**
     * check if element is selected by remote peers
     * @param element
     */
    hasRemote(element: string): boolean;
    /**
     * check if the element is selected in local
     * @param element
     */
    has(element: string): boolean;
    set(selection: EdgelessSelectionState | SurfaceSelection[]): void;
    setCursor(cursor: CursorSelection | CursorSelectionState): void;
    isInSelectedRect(viewX: number, viewY: number): boolean;
    clear(): void;
    clearLast(): void;
    dispose(): void;
}
//# sourceMappingURL=selection-manager.d.ts.map