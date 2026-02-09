import { type TemplateResult } from 'lit';
import type { AttachmentBlockModel } from './attachment-model.js';
export declare function allowEmbed(model: AttachmentBlockModel, maxFileSize?: number): boolean;
export declare function convertToEmbed(model: AttachmentBlockModel, maxFileSize?: number): void;
export declare function renderEmbedView(model: AttachmentBlockModel, blobUrl: string, maxFileSize?: number): TemplateResult<1> | null;
/**
 * Turn the attachment block into an image block.
 */
export declare function turnIntoImageBlock(model: AttachmentBlockModel): void;
//# sourceMappingURL=embed.d.ts.map