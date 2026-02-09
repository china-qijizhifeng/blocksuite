import { BlockService } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
import { FileDropManager } from '../_common/components/file-drop-manager.js';
import type { RootBlockComponent } from '../root-block/types.js';
import { type AttachmentBlockModel } from './attachment-model.js';
export declare class AttachmentBlockService extends BlockService<AttachmentBlockModel> {
    get rootElement(): RootBlockComponent;
    private _fileDropOptions;
    private _dragHandleOption;
    maxFileSize: number;
    slots: {
        onFilesDropped: Slot<File[]>;
    };
    fileDropManager: FileDropManager;
    mounted(): void;
}
//# sourceMappingURL=attachment-service.d.ts.map