import type { ChatMessage } from '../chat/logic.js';
export declare function runChangeToneAction({ input, tone, }: {
    input: string;
    tone: string;
}): AsyncIterable<string>;
export declare function runFixSpellingAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runGenerateAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runImproveWritingAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runMakeLongerAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runMakeShorterAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runRefineAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runSimplifyWritingAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runSummaryAction(payload: {
    input: string;
}): AsyncIterable<string>;
export declare function runTranslateAction(payload: {
    input: string;
    language: string;
}): AsyncIterable<string>;
export declare function runAnalysisAction(payload: {
    input: string;
    background: ChatMessage[];
}): AsyncIterable<string>;
export declare function runPartAnalysisAction(payload: {
    input: string;
    background: ChatMessage[];
    path: string[];
}): AsyncIterable<string>;
export declare const runPPTGenerateAction: (payload: {
    input: string;
    background: ChatMessage[];
}) => AsyncIterable<string>;
//# sourceMappingURL=actions.d.ts.map