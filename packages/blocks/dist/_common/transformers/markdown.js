import { assertExists } from '@blocksuite/global/utils';
import { Job } from '@blocksuite/store';
import { MarkdownAdapter } from '../adapters/index.js';
import { defaultImageProxyMiddleware } from './middlewares.js';
import { createAssetsArchive, download } from './utils.js';
async function exportDoc(doc) {
    const job = new Job({ collection: doc.collection });
    const snapshot = await job.docToSnapshot(doc);
    const adapter = new MarkdownAdapter(job);
    const markdownResult = await adapter.fromDocSnapshot({
        snapshot,
        assets: job.assetsManager,
    });
    let downloadBlob;
    const docTitle = doc.meta?.title || 'Untitled';
    let name;
    const contentBlob = new Blob([markdownResult.file], { type: 'plain/text' });
    if (markdownResult.assetsIds.length > 0) {
        const zip = createAssetsArchive(job.assets, markdownResult.assetsIds);
        zip.file('index.md', contentBlob);
        downloadBlob = await zip.generateAsync({ type: 'blob' });
        name = `${docTitle}.zip`;
    }
    else {
        downloadBlob = contentBlob;
        name = `${docTitle}.md`;
    }
    download(downloadBlob, name);
}
async function importMarkdown({ doc, markdown, noteId, }) {
    const job = new Job({
        collection: doc.collection,
        middlewares: [defaultImageProxyMiddleware],
    });
    const adapter = new MarkdownAdapter(job);
    const snapshot = await adapter.toSliceSnapshot({
        file: markdown,
        assets: job.assetsManager,
        pageVersion: doc.collection.meta.pageVersion,
        workspaceVersion: doc.collection.meta.workspaceVersion,
        workspaceId: doc.collection.id,
        pageId: doc.id,
    });
    assertExists(snapshot, 'import markdown failed, expected to get a snapshot');
    const blocks = snapshot.content.flatMap(x => x.children);
    for (const block of blocks) {
        await job.snapshotToBlock(block, doc, noteId);
    }
    return;
}
export const MarkdownTransformer = {
    exportDoc,
    importMarkdown,
};
//# sourceMappingURL=markdown.js.map