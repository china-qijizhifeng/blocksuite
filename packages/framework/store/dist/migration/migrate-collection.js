export const collectionMigrations = [
    {
        desc: 'add pageVersion in meta',
        condition: (rootDoc) => {
            const meta = rootDoc.getMap('meta');
            const workspaceVersion = meta.get('workspaceVersion');
            return workspaceVersion < 2;
        },
        migrate: (rootDoc) => {
            const meta = rootDoc.getMap('meta');
            meta.set('pageVersion', 1);
            meta.set('workspaceVersion', 2);
        },
    },
];
//# sourceMappingURL=migrate-collection.js.map