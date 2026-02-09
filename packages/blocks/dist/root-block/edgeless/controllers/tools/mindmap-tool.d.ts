import { EdgelessToolController } from './edgeless-tool.js';
type MindmapTool = {
    type: 'mindmap';
};
export declare class MindmapToolController extends EdgelessToolController<MindmapTool> {
    readonly tool: MindmapTool;
    onContainerPointerDown(): void;
    onContainerDragStart(): void;
    onContainerDragMove(): void;
    onContainerDragEnd(): void;
    onContainerClick(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onContainerContextMenu(): void;
    onPressShiftKey(): void;
    onPressSpaceBar(_pressed: boolean): void;
    beforeModeSwitch(): void;
    afterModeSwitch(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            mindmap: MindmapToolController;
        }
    }
}
export {};
//# sourceMappingURL=mindmap-tool.d.ts.map