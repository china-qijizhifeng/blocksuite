import { assertExists } from '@blocksuite/global/utils';
import { html } from 'lit';
import { withTempBlobData } from '../_common/utils/filesys.js';
import { transformModel } from '../root-block/utils/operations/model.js';
// 10MB
const MAX_EMBED_SIZE = 10 * 1024 * 1024;
const embedConfig = [
    {
        name: 'image',
        check: model => model.doc.schema.flavourSchemaMap.has('affine:image') &&
            model.type.startsWith('image/'),
        action: model => turnIntoImageBlock(model),
    },
    {
        name: 'pdf',
        check: (model, maxFileSize) => model.type === 'application/pdf' && model.size <= maxFileSize,
        template: (_, blobUrl) => {
            // More options: https://tinytip.co/tips/html-pdf-params/
            // https://chromium.googlesource.com/chromium/src/+/refs/tags/121.0.6153.1/chrome/browser/resources/pdf/open_pdf_params_parser.ts
            const parameters = '#toolbar=0';
            return html `<iframe
        style="width: 100%; color-scheme: auto;"
        height="480"
        src=${blobUrl + parameters}
        loading="lazy"
        scrolling="no"
        frameborder="no"
        allowTransparency
        allowfullscreen
        type="application/pdf"
      ></iframe>`;
        },
    },
    {
        name: 'video',
        check: (model, maxFileSize) => model.type.startsWith('video/') && model.size <= maxFileSize,
        template: (_, blobUrl) => html `<video width="100%;" height="480" controls src=${blobUrl}></video>`,
    },
    {
        name: 'audio',
        check: (model, maxFileSize) => model.type.startsWith('audio/') && model.size <= maxFileSize,
        template: (_, blobUrl) => html `<audio controls src=${blobUrl} style="margin: 4px;"></audio>`,
    },
];
export function allowEmbed(model, maxFileSize = MAX_EMBED_SIZE) {
    return embedConfig.some(config => config.check(model, maxFileSize));
}
export function convertToEmbed(model, maxFileSize = MAX_EMBED_SIZE) {
    const config = embedConfig.find(config => config.check(model, maxFileSize));
    if (!config || !config.action) {
        model.doc.updateBlock(model, {
            embed: true,
        });
        return;
    }
    config.action(model)?.catch(console.error);
}
export function renderEmbedView(model, blobUrl, maxFileSize = MAX_EMBED_SIZE) {
    const config = embedConfig.find(config => config.check(model, maxFileSize));
    if (!config || !config.template) {
        console.error('No embed view template found!', model, embedConfig);
        return null;
    }
    return config.template(model, blobUrl);
}
/**
 * Turn the attachment block into an image block.
 */
export function turnIntoImageBlock(model) {
    if (!model.doc.schema.flavourSchemaMap.has('affine:image'))
        throw new Error('The image flavour is not supported!');
    const sourceId = model.sourceId;
    assertExists(sourceId);
    const { saveAttachmentData, getImageData } = withTempBlobData();
    saveAttachmentData(sourceId, { name: model.name });
    const imageConvertData = model.sourceId
        ? getImageData(model.sourceId)
        : undefined;
    const imageProp = {
        sourceId,
        caption: model.caption,
        size: model.size,
        ...imageConvertData,
    };
    transformModel(model, 'affine:image', imageProp);
}
//# sourceMappingURL=embed.js.map