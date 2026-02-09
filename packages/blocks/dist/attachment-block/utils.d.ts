import type { EditorHost } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import type { AttachmentBlockComponent } from './attachment-block.js';
import type { AttachmentBlockModel, AttachmentBlockProps } from './attachment-model.js';
export declare function cloneAttachmentProperties(model: AttachmentBlockModel): AttachmentBlockProps;
export declare function setAttachmentUploading(blockId: string): void;
export declare function setAttachmentUploaded(blockId: string): void;
export declare function checkAttachmentBlob(block: AttachmentBlockComponent): Promise<void>;
/**
 * Since the size of the attachment may be very large,
 * the download process may take a long time!
 */
export declare function downloadAttachmentBlob(block: AttachmentBlockComponent): void;
export declare function getFileType(file: File): Promise<any>;
/**
 * Add a new attachment block before / after the specified block.
 */
export declare function addSiblingAttachmentBlocks(editorHost: EditorHost, files: File[], maxFileSize: number, targetModel: BlockModel, place?: 'before' | 'after'): Promise<string[] | undefined>;
//# sourceMappingURL=utils.d.ts.map