import type { EditorHost } from '@blocksuite/block-std';
import { LitElement, type TemplateResult } from 'lit';
export declare const DATABASE_CONVERT_WHITE_LIST: string[];
declare const DatabaseConvertView_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseConvertView extends DatabaseConvertView_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    get doc(): import("@blocksuite/store").Doc;
    private _convertToDatabase;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'database-convert-view': DatabaseConvertView;
    }
}
export {};
//# sourceMappingURL=database-convert-view.d.ts.map