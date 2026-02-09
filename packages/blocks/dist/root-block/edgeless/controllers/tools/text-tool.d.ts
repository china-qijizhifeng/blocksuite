import type { PointerEventState } from '@blocksuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
export type TextTool = {
    type: 'text';
};
export declare class TextToolController extends EdgelessToolController<TextTool> {
    readonly tool: TextTool;
    onContainerClick(e: PointerEventState): void;
    onContainerContextMenu(): void;
    onContainerPointerDown(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerDragStart(): void;
    onContainerDragMove(): void;
    onContainerDragEnd(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
    beforeModeSwitch(): void;
    afterModeSwitch(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            text: TextToolController;
        }
    }
}
//# sourceMappingURL=text-tool.d.ts.map