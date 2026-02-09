import type { EditorHost } from '@blocksuite/block-std';
import { type Doc } from '@blocksuite/store';
import type { AILogic } from '../logic.js';
export type ChatReactiveData = {
    history: ChatMessage[];
    syncedDocs: EmbeddedDoc[];
    value: string;
    currentRequest?: number;
    tempMessage?: string;
};
export declare class AIChatLogic {
    private logic;
    private getHost;
    get loading(): boolean;
    get host(): EditorHost;
    get docs(): import("@blocksuite/store").BlockCollection[];
    private requestId;
    reactiveData: ChatReactiveData;
    docSelectionActionList: AllAction[];
    edgelessSelectionActionList: AllAction[];
    constructor(logic: AILogic, getHost: () => EditorHost);
    startRequest<T>(p: () => Promise<T>): Promise<T>;
    getSelectedText: () => Promise<string>;
    selectTextForBackground: () => Promise<void>;
    selectShapesForBackground: () => Promise<void>;
    splitDoc: (doc: Doc) => Promise<string[]>;
    embeddingDocs: (docList: Doc[]) => Promise<EmbeddedDoc[]>;
    syncWorkspace: () => Promise<void>;
    docBackground(): Promise<ChatMessage[]>;
    genAnswer: (text: string) => Promise<void>;
    getBackground(): Promise<{
        messages: ChatMessage[];
        sources: BackgroundSource[];
    }>;
    replaceSelectedContent(text: string): Promise<void>;
    insertBelowSelectedContent(text: string): Promise<void>;
    createAction(name: string, action: (input: string, background: ChatMessage[]) => Promise<AsyncIterable<string>> | AsyncIterable<string>): (text?: string) => Promise<void>;
}
type Action = {
    type: 'action';
    name: string;
    hide?: () => boolean;
    action: () => Promise<void>;
};
type ActionGroup = {
    type: 'group';
    name: string;
    children: AllAction[];
};
export type AllAction = Action | ActionGroup;
type MessageContent = {
    type: 'text';
    text: string;
} | {
    type: 'image_url';
    image_url: {
        url: string;
    };
};
type BackgroundSource = {
    id: string;
    slice: string[];
};
export type ChatMessage = {
    role: 'user';
    content: MessageContent[];
} | {
    role: 'system';
    content: string;
} | {
    role: 'assistant';
    content: string;
    sources: BackgroundSource[];
};
export type EmbeddedDoc = {
    id: string;
    sections: {
        vector: number[];
        text: string;
    }[];
};
export {};
//# sourceMappingURL=logic.d.ts.map