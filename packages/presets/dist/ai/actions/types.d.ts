import type { EditorHost } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
export declare const translateLangs: readonly ["English", "Spanish", "German", "French", "Italian", "Simplified Chinese", "Traditional Chinese", "Japanese", "Russian", "Korean"];
export declare const textTones: readonly ["Professional", "Informal", "Friendly", "Critical", "Humorous"];
export declare const imageFilterStyles: readonly ["Clay style", "Sketch style", "Anime style", "Pixel style"];
export declare const imageProcessingTypes: readonly ["Clearer", "Remove background", "Convert to sticker"];
export type CtxRecord = {
    get(): Record<string, unknown>;
    set(data: Record<string, unknown>): void;
};
declare global {
    namespace BlockSuitePresets {
        type TrackerControl = 'format-bar' | 'slash-menu' | 'chat-send' | 'block-action-bar';
        type TrackerWhere = 'chat-panel' | 'inline-chat-panel' | 'ai-panel';
        interface TrackerOptions {
            control: TrackerControl;
            where: TrackerWhere;
        }
        interface AITextActionOptions {
            input?: string;
            stream?: boolean;
            attachments?: (string | File | Blob)[];
            signal?: AbortSignal;
            retry?: boolean;
            docId: string;
            workspaceId: string;
            host: EditorHost;
            models?: (BlockModel | BlockSuite.SurfaceElementModelType)[];
            control: TrackerControl;
            where: TrackerWhere;
        }
        interface AIImageActionOptions extends AITextActionOptions {
            content?: string;
            seed?: string;
        }
        interface FilterImageOptions extends AIImageActionOptions {
            style: (typeof imageFilterStyles)[number];
        }
        interface ProcessImageOptions extends AIImageActionOptions {
            type: (typeof imageProcessingTypes)[number];
        }
        type TextStream = {
            [Symbol.asyncIterator](): AsyncIterableIterator<string>;
        };
        type AIActionTextResponse<T extends AITextActionOptions> = T['stream'] extends true ? TextStream : Promise<string>;
        interface TranslateOptions extends AITextActionOptions {
            lang: (typeof translateLangs)[number];
        }
        interface ChangeToneOptions extends AITextActionOptions {
            tone: (typeof textTones)[number];
        }
        interface ExpandMindMap extends AITextActionOptions {
            mindmap: string;
        }
        interface BrainstormMindMap extends AITextActionOptions {
            regenerate?: boolean;
        }
        interface AIActions {
            chat<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            summary<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            improveWriting<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            improveGrammar<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            fixSpelling<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            createHeadings<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            makeLonger<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            makeShorter<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            continueWriting<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            checkCodeErrors<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            explainCode<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            writeArticle<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            writeTwitterPost<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            writePoem<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            writeBlogPost<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            brainstorm<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            writeOutline<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            explainImage<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            findActions<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            brainstormMindmap<T extends BrainstormMindMap>(options: T): AIActionTextResponse<T>;
            expandMindmap<T extends ExpandMindMap>(options: T): AIActionTextResponse<T>;
            createSlides<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            explain<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
            translate<T extends TranslateOptions>(options: T): AIActionTextResponse<T>;
            changeTone<T extends ChangeToneOptions>(options: T): AIActionTextResponse<T>;
            makeItReal<T extends AIImageActionOptions>(options: T): AIActionTextResponse<T>;
            createImage<T extends AIImageActionOptions>(options: T): AIActionTextResponse<T>;
            processImage<T extends ProcessImageOptions>(options: T): AIActionTextResponse<T>;
            filterImage<T extends FilterImageOptions>(options: T): AIActionTextResponse<T>;
            generateCaption<T extends AITextActionOptions>(options: T): AIActionTextResponse<T>;
        }
        interface AIHistory {
            sessionId: string;
            tokens: number;
            action: string;
            createdAt: string;
            messages: {
                content: string;
                createdAt: string;
                role: 'user' | 'assistant';
            }[];
        }
        interface AIHistoryService {
            actions: (workspaceId: string, docId?: string) => Promise<AIHistory[] | undefined>;
            chats: (workspaceId: string, docId?: string) => Promise<AIHistory[] | undefined>;
            cleanup: (workspaceId: string, docId: string, sessionIds: string[]) => Promise<void>;
        }
        interface AIPhotoEngineService {
            searchImages(options: {
                width: number;
                height: number;
                query: string;
            }): Promise<string[]>;
        }
    }
}
//# sourceMappingURL=types.d.ts.map