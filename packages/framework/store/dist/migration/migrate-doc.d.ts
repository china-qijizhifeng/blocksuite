import * as Y from 'yjs';
interface IDocMigration {
    desc: string;
    condition: (oldPageVersion: number, docData: Y.Doc) => boolean;
    migrate: (oldPageVersion: number, docData: Y.Doc) => void;
}
export declare const docMigrations: IDocMigration[];
export {};
//# sourceMappingURL=migrate-doc.d.ts.map