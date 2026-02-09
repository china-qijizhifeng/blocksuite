import { BlockService } from '@blocksuite/block-std';
import { FileDropManager } from '../_common/components/file-drop-manager.js';
import type { RootBlockComponent } from '../root-block/types.js';
import { type ImageBlockModel } from './image-model.js';
export declare class ImageBlockService extends BlockService<ImageBlockModel> {
    get rootElement(): RootBlockComponent;
    static setImageProxyURL: (url: string) => void;
    private _fileDropOptions;
    private _dragHandleOption;
    maxFileSize: number;
    fileDropManager: FileDropManager;
    mounted(): void;
}
//# sourceMappingURL=image-service.d.ts.map