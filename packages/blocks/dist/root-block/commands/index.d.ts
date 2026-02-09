export * from './block-crud/index.js';
export * from './model-crud/index.js';
export * from './selection/index.js';
export * from './text-crud/index.js';
declare global {
    namespace BlockSuite {
        interface CommandContext {
            currentSelectionPath?: string;
        }
    }
}
//# sourceMappingURL=index.d.ts.map