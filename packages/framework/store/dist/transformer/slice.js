import { assertExists } from '@blocksuite/global/utils';
export class Slice {
    get content() {
        return this.data.content;
    }
    get pageVersion() {
        return this.data.pageVersion;
    }
    get workspaceVersion() {
        return this.data.workspaceVersion;
    }
    get workspaceId() {
        return this.data.workspaceId;
    }
    get docId() {
        return this.data.pageId;
    }
    constructor(data) {
        this.data = data;
    }
    static fromModels(doc, models) {
        const meta = doc.collection.meta;
        const { pageVersion, workspaceVersion } = meta;
        assertExists(pageVersion);
        assertExists(workspaceVersion);
        return new Slice({
            content: models,
            workspaceId: doc.collection.id,
            pageId: doc.id,
            pageVersion,
            workspaceVersion,
        });
    }
}
//# sourceMappingURL=slice.js.map