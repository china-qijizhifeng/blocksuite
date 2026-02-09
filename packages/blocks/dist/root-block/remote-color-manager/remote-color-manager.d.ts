import type { EditorHost } from '@blocksuite/block-std';
export declare class RemoteColorManager {
    readonly host: EditorHost;
    private get awareness();
    private get rootService();
    constructor(host: EditorHost);
    get(id: number): string | null;
}
//# sourceMappingURL=remote-color-manager.d.ts.map