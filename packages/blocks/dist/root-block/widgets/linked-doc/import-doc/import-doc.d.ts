import '../../../../_common/components/loader.js';
import { type DocCollection } from '@blocksuite/store';
import { LitElement, type PropertyValues } from 'lit';
export type OnSuccessHandler = (pageIds: string[], options: {
    isWorkspaceFile: boolean;
    importedCount: number;
}) => void;
export type OnFailHandler = (message: string) => void;
export declare function importMarkDown(collection: DocCollection, text: string, fileName?: string): Promise<string>;
export declare function importHtml(collection: DocCollection, text: string): Promise<string>;
export declare function importNotion(collection: DocCollection, file: File): Promise<{
    pageIds: string[];
    isWorkspaceFile: boolean;
    hasMarkdown: boolean;
}>;
declare const ImportDoc_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ImportDoc extends ImportDoc_base {
    private collection;
    private onSuccess?;
    private onFail?;
    private abortController;
    static styles: import("lit").CSSResult;
    accessor _loading: boolean;
    accessor x: number;
    accessor y: number;
    accessor _startX: number;
    accessor _startY: number;
    accessor containerEl: HTMLElement;
    constructor(collection: DocCollection, onSuccess?: OnSuccessHandler | undefined, onFail?: OnFailHandler | undefined, abortController?: AbortController);
    private _onMouseDown;
    private _onMouseUp;
    private _onMouseMove;
    private _onCloseClick;
    private _onImportSuccess;
    private _onFail;
    private _importMarkDown;
    private _importHtml;
    private _importNotion;
    private _openLearnImportLink;
    updated(changedProps: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=import-doc.d.ts.map