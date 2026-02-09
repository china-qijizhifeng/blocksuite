import { Slot } from '@blocksuite/global/utils';
import type * as Y from 'yjs';
import type { BlockSuiteDoc } from '../yjs/index.js';
import type { DocCollection } from './collection.js';
export interface DocMeta {
    id: string;
    title: string;
    tags: string[];
    createDate: number;
    updatedDate?: number;
}
export type Tag = {
    id: string;
    value: string;
    color: string;
};
export type DocsPropertiesMeta = {
    tags?: {
        options: Tag[];
    };
};
export type DocCollectionMetaState = {
    pages?: unknown[];
    properties?: DocsPropertiesMeta;
    workspaceVersion?: number;
    pageVersion?: number;
    blockVersions?: Record<string, number>;
    name?: string;
    avatar?: string;
};
export declare class DocCollectionMeta {
    get yDocs(): Y.Array<unknown>;
    get docs(): unknown[] | undefined;
    get name(): string | undefined;
    get avatar(): string | undefined;
    get blockVersions(): Record<string, number> | undefined;
    get workspaceVersion(): number | undefined;
    get pageVersion(): number | undefined;
    get docMetas(): DocMeta[];
    get hasVersion(): boolean;
    get properties(): DocsPropertiesMeta;
    private _prevDocs;
    protected readonly _yMap: Y.Map<DocCollectionMetaState[keyof DocCollectionMetaState]>;
    protected readonly _proxy: DocCollectionMetaState;
    readonly id: string;
    readonly doc: BlockSuiteDoc;
    docMetaAdded: Slot<string>;
    docMetaRemoved: Slot<string>;
    docMetaUpdated: Slot<void>;
    commonFieldsUpdated: Slot<void>;
    constructor(doc: BlockSuiteDoc);
    private _handleDocMetaEvent;
    private _handleCommonFieldsEvent;
    private _handleDocCollectionMetaEvents;
    initialize(): void;
    setName(name: string): void;
    setAvatar(avatar: string): void;
    getDocMeta(id: string): DocMeta | undefined;
    addDocMeta(doc: DocMeta, index?: number): void;
    /**
     * @internal Use {@link DocCollection.setDocMeta} instead
     */
    setDocMeta(id: string, props: Partial<DocMeta>): void;
    removeDocMeta(id: string): void;
    /**
     * @internal Only for doc initialization
     */
    writeVersion(collection: DocCollection): void;
    updateVersion(collection: DocCollection): void;
    /**
     * @deprecated Only used for legacy doc version validation
     */
    validateVersion(collection: DocCollection): void;
    setProperties(meta: DocsPropertiesMeta): void;
}
//# sourceMappingURL=meta.d.ts.map