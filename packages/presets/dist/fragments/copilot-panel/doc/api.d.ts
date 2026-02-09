import type { ChatMessage } from '../chat/logic.js';
export declare const ChatFeatureKey = "chat";
export declare const getChatService: () => {
    chat(messages: ChatMessage[]): AsyncIterable<string>;
};
export declare const userText: (text: string) => ChatMessage;
//# sourceMappingURL=api.d.ts.map