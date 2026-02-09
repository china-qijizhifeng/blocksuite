import type { TemplateResult } from 'lit';
import { MindmapStyle } from '../../../../../surface-block/index.js';
import { type DraggableTool } from './basket-elements.js';
export type ToolbarMindmapItem = {
    type: 'mindmap';
    icon: TemplateResult;
    style: MindmapStyle;
    render: DraggableTool['render'];
};
export declare const getMindMaps: (theme: 'dark' | 'light') => ToolbarMindmapItem[];
//# sourceMappingURL=assets.d.ts.map