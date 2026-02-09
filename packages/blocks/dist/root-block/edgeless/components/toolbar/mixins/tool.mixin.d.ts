import { type DisposableClass } from '@blocksuite/block-std';
import type { Constructor } from '@blocksuite/global/utils';
import type { LitElement } from 'lit';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
import type { EdgelessTool } from '../../../types.js';
import { createPopper, type MenuPopper } from '../common/create-popper.js';
import { type EdgelessToolbarSlots } from '../context.js';
import type { EdgelessToolbar } from '../edgeless-toolbar.js';
export declare abstract class EdgelessToolbarToolClass extends DisposableClass {
    edgeless: EdgelessRootBlockComponent;
    edgelessTool: EdgelessTool;
    toolbarContainer: HTMLElement | null;
    active: boolean;
    popper: MenuPopper<HTMLElement> | null;
    theme: 'light' | 'dark';
    toolbarSlots: EdgelessToolbarSlots;
    accessor toolbar: EdgelessToolbar;
    enableActiveBackground?: boolean;
    abstract type: EdgelessTool['type'] | EdgelessTool['type'][];
    setEdgelessTool: EdgelessRootBlockComponent['tools']['setEdgelessTool'];
    createPopper: typeof createPopper;
    /**
     * @return true if operation was successful
     */
    tryDisposePopper: () => boolean;
}
export declare const EdgelessToolbarToolMixin: <T extends Constructor<LitElement>>(SuperClass: T) => T & Constructor<EdgelessToolbarToolClass>;
//# sourceMappingURL=tool.mixin.d.ts.map