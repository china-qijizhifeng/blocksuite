import { BlockElement } from '@blocksuite/block-std';
import type { DatabaseBlockModel } from '../../database-model.js';
export declare class DatabaseTableViewFullScreen extends BlockElement<DatabaseBlockModel> {
    static styles: import("lit").CSSResult;
    accessor abortController: AbortController;
    close: () => void;
    _renderView: () => import("lit").TemplateResult;
    renderBlock(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-table-view-full-screen': DatabaseTableViewFullScreen;
    }
}
//# sourceMappingURL=table-full-screen-modal.d.ts.map