import type { BlockElement } from '@blocksuite/block-std';
import { BlockService } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import { FileDropManager } from '../_common/components/file-drop-manager.js';
import { type DocModeService, type NotificationService, type PeekViewService } from '../_common/components/index.js';
import { ExportManager } from '../_common/export-manager/export-manager.js';
import { type EmbedCardStyle } from '../_common/types.js';
import { EditPropsStore } from '../surface-block/managers/edit-session.js';
import { FontLoader } from './font-loader/font-loader.js';
import type { RootBlockModel } from './root-model.js';
export type EmbedOptions = {
    flavour: string;
    urlRegex: RegExp;
    styles: EmbedCardStyle[];
    viewType: 'card' | 'embed';
};
export type QuickSearchResult = {
    docId: string;
    isNewDoc?: boolean;
} | {
    userInput: string;
} | null;
export interface QuickSearchService {
    searchDoc: (options: {
        action?: 'insert';
        userInput?: string;
        skipSelection?: boolean;
        trigger?: 'edgeless-toolbar' | 'slash-command' | 'shortcut';
    }) => Promise<QuickSearchResult>;
}
export interface TelemetryEvent {
    page?: string;
    segment?: string;
    module?: string;
    control?: string;
    type?: string;
    category?: string;
    other?: unknown;
}
interface DocCreatedEvent extends TelemetryEvent {
    page?: 'doc editor' | 'whiteboard editor';
    segment?: 'whiteboard' | 'note' | 'doc';
    module?: 'slash commands' | 'format toolbar' | 'edgeless toolbar' | 'inline @';
    category?: 'page' | 'whiteboard';
}
export interface TelemetryEventMap {
    DocCreated: DocCreatedEvent;
    LinkedDocCreated: TelemetryEvent;
}
export interface TelemetryService {
    track<T extends keyof TelemetryEventMap>(eventName: T, props: TelemetryEventMap[T]): void;
}
export declare class RootService extends BlockService<RootBlockModel> {
    get viewportElement(): HTMLElement;
    get selectedBlocks(): BlockElement<BlockModel<object>, BlockService<BlockModel<object>>, string>[];
    get selectedModels(): BlockModel<object>[];
    private _fileDropOptions;
    private _exportOptions;
    private _embedBlockRegistry;
    readonly fontLoader: FontLoader;
    readonly editPropsStore: EditPropsStore;
    fileDropManager: FileDropManager;
    exportManager: ExportManager;
    notificationService: NotificationService | null;
    peekViewService: PeekViewService | null;
    docModeService: DocModeService;
    quickSearchService: QuickSearchService | null;
    telemetryService: TelemetryService | null;
    transformers: {
        markdown: {
            exportDoc: (doc: import("@blocksuite/store").Doc) => Promise<void>;
            importMarkdown: ({ doc, markdown, noteId, }: {
                doc: import("@blocksuite/store").Doc;
                markdown: string;
                noteId: string;
            }) => Promise<void>;
        };
        html: {
            exportDoc: (doc: import("@blocksuite/store").Doc) => Promise<void>;
        };
        zip: {
            exportDocs: (collection: import("@blocksuite/store").DocCollection, docs: import("@blocksuite/store").Doc[]) => Promise<Blob>;
            importDocs: (collection: import("@blocksuite/store").DocCollection, imported: Blob) => Promise<import("@blocksuite/store").Doc[]>;
        };
    };
    private _getLastNoteBlock;
    private _getParentModelBySelection;
    private _insertCard;
    private _insertLink;
    private _insertDoc;
    registerEmbedBlockOptions: (options: EmbedOptions) => void;
    getEmbedBlockOptions: (url: string) => EmbedOptions | null;
    unmounted(): void;
    mounted(): void;
    loadFonts(): void;
    appendParagraph: (text?: string) => void;
    insertLinkByQuickSearch: (userInput?: string, skipSelection?: boolean) => Promise<{
        flavour: string;
        isNewDoc?: boolean;
    } | undefined>;
}
export {};
//# sourceMappingURL=root-service.d.ts.map