import { BookmarkIcon } from '../../../_common/icons/edgeless.js';
import { CaptionIcon, CopyIcon, DeleteIcon, DownloadIcon, DuplicateIcon, } from '../../../_common/icons/text.js';
import { duplicate } from './utils.js';
export const commonConfig = [
    {
        name: 'download',
        icon: DownloadIcon,
        tooltip: 'Download',
        showWhen: () => true,
        action: (blockElement, abortController) => {
            abortController.abort();
            blockElement.download();
        },
        type: 'common',
    },
    {
        name: 'caption',
        icon: CaptionIcon,
        tooltip: 'Caption',
        showWhen: blockElement => !blockElement.doc.readonly,
        action: (blockElement, abortController) => {
            abortController.abort();
            blockElement.captionEditor.show();
        },
        type: 'common',
    },
];
export const moreMenuConfig = [
    {
        name: 'Turn into card view',
        icon: BookmarkIcon,
        tooltip: 'Turn into Card view',
        showWhen: blockElement => {
            const doc = blockElement.doc;
            const supportAttachment = doc.schema.flavourSchemaMap.has('affine:attachment');
            const readonly = doc.readonly;
            return supportAttachment && !readonly && !!blockElement.blob;
        },
        action: (blockElement, abortController) => {
            blockElement.convertToCardView();
            abortController.abort();
        },
        type: 'more',
    },
    {
        name: 'Copy',
        icon: CopyIcon,
        tooltip: 'Copy',
        showWhen: () => true,
        action: (blockElement, abortController) => {
            blockElement.copy();
            abortController.abort();
        },
        type: 'more',
    },
    {
        name: 'Duplicate',
        icon: DuplicateIcon,
        tooltip: 'Duplicate',
        showWhen: () => true,
        action: (blockElement, abortController) => {
            duplicate(blockElement, abortController);
        },
        type: 'more',
    },
    {
        type: 'divider',
    },
    {
        name: 'Delete',
        icon: DeleteIcon,
        tooltip: 'Delete',
        showWhen: blockElement => !blockElement.doc.readonly,
        action: (blockElement, abortController) => {
            abortController.abort();
            blockElement.doc.deleteBlock(blockElement.model);
        },
        type: 'more',
    },
];
//# sourceMappingURL=config.js.map