import './default/default-tool-button.js';
import './connector/connector-tool-button.js';
import './frame/frame-tool-button.js';
import './note/note-tool-button.js';
import './brush/brush-tool-button.js';
import './eraser/eraser-tool-button.js';
import './shape/shape-tool-button.js';
import './template/template-tool-button.js';
import './note/note-senior-button.js';
import './mindmap/mindmap-tool-button.js';
import './link/link-tool-button.js';
import { type TemplateResult } from 'lit';
import type { Menu } from '../../../../_common/components/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessTool } from '../../types.js';
export interface QuickTool {
    type?: EdgelessTool['type'];
    content: TemplateResult;
    /**
     * if not configured, the tool will not be shown in dense mode
     */
    menu?: Menu;
}
export interface SeniorTool {
    /**
     * Used to show in nav-button's tooltip
     */
    name: string;
    content: TemplateResult;
}
/**
 * Get quick-tool list
 */
export declare const getQuickTools: ({ edgeless, }: {
    edgeless: EdgelessRootBlockComponent;
}) => QuickTool[];
export declare const getSeniorTools: ({ edgeless, toolbarContainer, }: {
    edgeless: EdgelessRootBlockComponent;
    toolbarContainer: HTMLElement;
}) => SeniorTool[];
//# sourceMappingURL=tools.d.ts.map