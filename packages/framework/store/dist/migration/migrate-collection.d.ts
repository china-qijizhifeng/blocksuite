import type * as Y from 'yjs';
interface ICollctionMigration {
    desc: string;
    condition: (rootDoc: Y.Doc) => boolean;
    migrate: (rootDoc: Y.Doc) => void;
}
export declare const collectionMigrations: ICollctionMigration[];
export {};
//# sourceMappingURL=migrate-collection.d.ts.map