import { NoteDisplayMode } from '../_common/types.js';
import { StrokeStyle } from '../surface-block/consts.js';
import { Bound } from '../surface-block/utils/bound.js';
import type { SerializedXYWH } from '../surface-block/utils/xywh.js';
export declare const NoteBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<NoteProps>;
        flavour: "affine:note";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: NoteProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<NoteProps>) | undefined;
};
type NoteProps = {
    xywh: SerializedXYWH;
    background: string;
    index: string;
    displayMode: NoteDisplayMode;
    edgeless: NoteEdgelessProps;
    /**
     * @deprecated
     * use `displayMode` instead
     * hidden:true -> displayMode:NoteDisplayMode.EdgelessOnly:
     *  means the note is visible only in the edgeless mode
     * hidden:false -> displayMode:NoteDisplayMode.DocAndEdgeless:
     *  means the note is visible in the doc and edgeless mode
     */
    hidden: boolean;
};
type NoteEdgelessProps = {
    style: {
        borderRadius: number;
        borderSize: number;
        borderStyle: StrokeStyle;
        shadowType: string;
    };
    collapse?: boolean;
    collapsedHeight?: number;
    scale?: number;
};
declare const NoteBlockModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<NoteProps>;
};
export declare class NoteBlockModel extends NoteBlockModel_base {
    private _isSelectable;
    hitTest(x: number, y: number): boolean;
    containedByBounds(bounds: Bound): boolean;
    boxSelect(bound: Bound): boolean;
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:note': NoteBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=note-model.d.ts.map