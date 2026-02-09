import type { TemplateResult } from 'lit';
import type { OpenAI } from 'openai';
import type { ChatMessage } from '../chat/logic.js';
export type Vendor<Data> = {
    key: string;
    color: string;
    initData: () => Data;
    renderConfigEditor: (data: Data, refresh: () => void) => TemplateResult;
};
export type ServiceImpl<M, Data> = {
    name: string;
    method: (data: Data) => M;
    vendor: Vendor<Data>;
};
export type ServiceKind<M> = {
    type: string;
    title: string;
    getImpl: (implName: string) => ServiceImpl<M, unknown> | undefined;
    implList: ServiceImpl<M, unknown>[];
    implService: <Data>(impl: ServiceImpl<M, Data>) => void;
};
export declare const createVendor: <Data extends object>(config: Vendor<Data>) => Vendor<Data>;
export declare const TextServiceKind: ServiceKind<{
    generateText(messages: ChatMessage[]): Promise<string>;
}>;
export declare const ChatServiceKind: ServiceKind<{
    chat(messages: Array<ChatMessage>): AsyncIterable<string>;
}>;
export declare const Text2ImageServiceKind: ServiceKind<{
    generateImage(prompt: string): Promise<File>;
}>;
export declare const EmbeddingServiceKind: ServiceKind<{
    generateEmbedding(text: string): Promise<number[]>;
    generateEmbeddings(textList: string[]): Promise<number[][]>;
}>;
export declare const Image2TextServiceKind: ServiceKind<{
    generateText(messages: Array<OpenAI.ChatCompletionMessageParam>): Promise<string>;
}>;
export declare const Image2ImageServiceKind: ServiceKind<{
    generateImage(prompt: string, image: string): Promise<string>;
}>;
export declare const FastImage2ImageServiceKind: ServiceKind<{
    createFastRequest(): (prompt: string, image: string) => Promise<string>;
}>;
export declare const allKindService: (ServiceKind<{
    generateText(messages: ChatMessage[]): Promise<string>;
}> | ServiceKind<{
    chat(messages: Array<ChatMessage>): AsyncIterable<string>;
}> | ServiceKind<{
    generateImage(prompt: string): Promise<File>;
}> | ServiceKind<{
    generateText(messages: Array<OpenAI.ChatCompletionMessageParam>): Promise<string>;
}> | ServiceKind<{
    generateImage(prompt: string, image: string): Promise<string>;
}> | ServiceKind<{
    createFastRequest(): (prompt: string, image: string) => Promise<string>;
}> | ServiceKind<{
    generateEmbedding(text: string): Promise<number[]>;
    generateEmbeddings(textList: string[]): Promise<number[][]>;
}>)[];
export type AllServiceKind = (typeof allKindService)[number];
export type GetMethod<Kind extends ServiceKind<any>> = Kind extends ServiceKind<infer M> ? M : never;
//# sourceMappingURL=service-base.d.ts.map