import type { BlockModel } from '@blocksuite/store';
import type { BlockElement, WidgetElement } from './element/index.js';
export declare class ViewStore {
    std: BlockSuite.Std;
    private readonly _blockMap;
    private readonly _widgetMap;
    constructor(std: BlockSuite.Std);
    setBlock: (node: BlockElement) => void;
    setWidget: (node: WidgetElement) => void;
    getBlock: (id: string) => BlockElement | null;
    getWidget: (widgetName: string, hostBlockId: string) => WidgetElement | null;
    deleteBlock: (node: BlockElement) => void;
    deleteWidget: (node: WidgetElement) => void;
    calculatePath: (model: BlockModel) => string[];
    fromPath: (path: string | undefined | null) => BlockElement | null;
    viewFromPath(type: 'block', path: string[]): null | BlockElement;
    viewFromPath(type: 'widget', path: string[]): null | WidgetElement;
    walkThrough: (fn: (nodeView: BlockElement, index: number, parent: BlockElement) => undefined | null | true, path?: string | undefined | null) => void;
    mount(): void;
    unmount(): void;
}
//# sourceMappingURL=view-store.d.ts.map