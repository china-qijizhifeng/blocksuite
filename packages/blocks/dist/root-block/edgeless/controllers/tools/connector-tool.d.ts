import type { PointerEventState } from '@blocksuite/block-std';
import type { ConnectorMode } from '../../../../surface-block/index.js';
import { type IVec } from '../../../../surface-block/index.js';
import type { EdgelessTool } from '../../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type ConnectorTool = {
    type: 'connector';
    mode: ConnectorMode;
};
export declare class ConnectorToolController extends EdgelessToolController<ConnectorTool> {
    private _mode;
    private _connector;
    private _source;
    private _sourceBounds;
    private _sourceLocations;
    private _startPoint;
    private _allowCancel;
    readonly tool: ConnectorTool;
    private _createConnector;
    quickConnect(point: IVec, element: BlockSuite.EdgelessModelType): void;
    findTargetByPoint(point: IVec): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerPointerDown(e: PointerEventState): void;
    onContainerDragStart(): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragEnd(): void;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerMouseOut(): void;
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
    beforeModeSwitch(edgelessTool: EdgelessTool): void;
    afterModeSwitch(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            connector: ConnectorToolController;
        }
    }
}
//# sourceMappingURL=connector-tool.d.ts.map