import type { Slot } from '@blocksuite/store';
import type { EdgelessToolbar } from './edgeless-toolbar.js';
export interface EdgelessToolbarSlots {
    resize: Slot<{
        w: number;
        h: number;
    }>;
}
export declare const edgelessToolbarSlotsContext: {
    __context__: EdgelessToolbarSlots;
};
export declare const edgelessToolbarThemeContext: {
    __context__: "light" | "dark";
};
export declare const edgelessToolbarContext: {
    __context__: EdgelessToolbar;
};
//# sourceMappingURL=context.d.ts.map