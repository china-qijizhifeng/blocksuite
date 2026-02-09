import { defaultImageProxyMiddleware, MarkdownAdapter, MixTextAdapter, pasteMiddleware, PlainTextAdapter, titleMiddleware, } from '@blocksuite/blocks';
import { assertExists } from '@blocksuite/global/utils';
import { DocCollection, Job } from '@blocksuite/store';
const updateSnapshotText = (point, snapshot, model) => {
    const { index, length } = point;
    if (!snapshot.props.text || length === 0) {
        return;
    }
    snapshot.props.text.delta =
        model.text?.sliceToDelta(index, length + index);
};
function processSnapshot(snapshot, text, host) {
    const model = host.doc.getBlockById(snapshot.id);
    assertExists(model);
    const modelId = model.id;
    if (text.from.blockId === modelId) {
        updateSnapshotText(text.from, snapshot, model);
    }
    if (text.to && text.to.blockId === modelId) {
        updateSnapshotText(text.to, snapshot, model);
    }
    // If the snapshot has children, handle them recursively
    snapshot.children.forEach(childSnapshot => processSnapshot(childSnapshot, text, host));
}
/**
 * Processes the text in the given snapshot if there is a text selection.
 * Only the selected portion of the snapshot will be processed.
 */
function processTextInSnapshot(snapshot, host) {
    const { content } = snapshot;
    const text = host.selection.find('text');
    if (!content.length || !text)
        return;
    content.forEach(snapshot => processSnapshot(snapshot, text, host));
}
export async function getContentFromSlice(host, slice, type = 'markdown') {
    const job = new Job({
        collection: host.std.doc.collection,
        middlewares: [titleMiddleware],
    });
    const snapshot = await job.sliceToSnapshot(slice);
    processTextInSnapshot(snapshot, host);
    const adapter = type === 'markdown' ? new MarkdownAdapter(job) : new PlainTextAdapter(job);
    const content = await adapter.fromSliceSnapshot({
        snapshot,
        assets: job.assetsManager,
    });
    return content.file;
}
export async function getPlainTextFromSlice(host, slice) {
    const job = new Job({
        collection: host.std.doc.collection,
        middlewares: [titleMiddleware],
    });
    const snapshot = await job.sliceToSnapshot(slice);
    processTextInSnapshot(snapshot, host);
    const plainTextAdapter = new PlainTextAdapter(job);
    const plainText = await plainTextAdapter.fromSliceSnapshot({
        snapshot,
        assets: job.assetsManager,
    });
    return plainText.file;
}
export const markdownToSnapshot = async (markdown, host) => {
    const job = new Job({
        collection: host.std.doc.collection,
        middlewares: [defaultImageProxyMiddleware, pasteMiddleware(host.std)],
    });
    const markdownAdapter = new MixTextAdapter(job);
    const { blockVersions, workspaceVersion, pageVersion } = host.std.doc.collection.meta;
    if (!blockVersions || !workspaceVersion || !pageVersion)
        throw new Error('Need blockVersions, workspaceVersion, pageVersion meta information to get slice');
    const payload = {
        file: markdown,
        assets: job.assetsManager,
        blockVersions,
        pageVersion,
        workspaceVersion,
        workspaceId: host.std.doc.collection.id,
        pageId: host.std.doc.id,
    };
    const snapshot = await markdownAdapter.toSliceSnapshot(payload);
    assertExists(snapshot, 'import markdown failed, expected to get a snapshot');
    return {
        snapshot,
        job,
    };
};
export async function insertFromMarkdown(host, markdown, parent, index) {
    const { snapshot, job } = await markdownToSnapshot(markdown, host);
    const snapshots = snapshot.content.flatMap(x => x.children);
    const models = [];
    for (let i = 0; i < snapshots.length; i++) {
        const blockSnapshot = snapshots[i];
        const model = await job.snapshotToBlock(blockSnapshot, host.std.doc, parent, (index ?? 0) + i);
        models.push(model);
    }
    return models;
}
// FIXME: replace when selection is block is buggy right not
export async function replaceFromMarkdown(host, markdown, parent, index) {
    const { snapshot, job } = await markdownToSnapshot(markdown, host);
    await job.snapshotToSlice(snapshot, host.doc, parent, index);
}
export async function markDownToDoc(host, answer) {
    const schema = host.std.doc.collection.schema;
    // Should not create a new doc in the original collection
    const collection = new DocCollection({ schema });
    collection.meta.initialize();
    const job = new Job({
        collection,
        middlewares: [defaultImageProxyMiddleware],
    });
    const mdAdapter = new MarkdownAdapter(job);
    const doc = await mdAdapter.toDoc({
        file: answer,
        assets: job.assetsManager,
    });
    if (!doc) {
        console.error('Failed to convert markdown to doc');
    }
    return doc;
}
//# sourceMappingURL=markdown-utils.js.map