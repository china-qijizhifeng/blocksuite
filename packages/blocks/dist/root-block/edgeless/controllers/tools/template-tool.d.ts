import { EdgelessToolController } from './edgeless-tool.js';
export type TemplateTool = {
    type: 'template';
};
export declare class TemplateToolController extends EdgelessToolController<TemplateTool> {
    readonly tool: {
        type: "template";
    };
    onContainerClick(): void;
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
            template: TemplateToolController;
        }
    }
}
//# sourceMappingURL=template-tool.d.ts.map