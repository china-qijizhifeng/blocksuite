import type { BlockService } from '@blocksuite/block-std';
import type { EditorHost } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import type { IVec2 } from '../../surface-block/index.js';
export type onDropProps = {
    files: File[];
    targetModel: BlockModel | null;
    place: 'before' | 'after';
    point: IVec2;
};
export type FileDropOptions = {
    flavour: string;
    onDrop?: ({ files, targetModel, place, point, }: onDropProps) => Promise<boolean> | void;
};
export declare class FileDropManager {
    get editorHost(): EditorHost;
    get doc(): import("@blocksuite/store").Doc;
    get type(): 'before' | 'after';
    get targetModel(): BlockModel | null;
    private static _dropResult;
    private _blockService;
    private _fileDropOptions;
    private _indicator;
    constructor(blockService: BlockService, fileDropOptions: FileDropOptions);
    private _onDrop;
    onDragOver: (event: DragEvent) => void;
    onDragLeave: () => void;
}
//# sourceMappingURL=file-drop-manager.d.ts.map