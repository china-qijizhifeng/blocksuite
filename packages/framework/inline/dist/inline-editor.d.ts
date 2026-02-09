import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import * as Y from 'yjs';
import { InlineHookService } from './services/hook.js';
import { AttributeService, DeltaService, EventService, RangeService } from './services/index.js';
import type { DeltaInsert, InlineRange, InlineRangeUpdatedProp } from './types.js';
import { type BaseTextAttributes, nativePointToTextPoint, textPointToDomPoint } from './utils/index.js';
import { getTextNodesFromElement } from './utils/text.js';
export type InlineRootElement<T extends BaseTextAttributes = BaseTextAttributes> = HTMLElement & {
    inlineEditor: InlineEditor<T>;
};
export interface InlineRangeProvider {
    inlineRangeUpdated: Slot<InlineRangeUpdatedProp>;
    getInlineRange(): InlineRange | null;
    setInlineRange(inlineRange: InlineRange | null, sync: boolean): void;
}
export declare class InlineEditor<TextAttributes extends BaseTextAttributes = BaseTextAttributes> {
    get disposables(): DisposableGroup;
    get yText(): Y.Text;
    get yTextString(): string;
    get yTextLength(): number;
    get yTextDeltas(): any;
    get rootElement(): InlineRootElement<TextAttributes>;
    get eventSource(): HTMLElement;
    get eventService(): EventService<TextAttributes>;
    get rangeService(): RangeService<TextAttributes>;
    get attributeService(): AttributeService<TextAttributes>;
    get deltaService(): DeltaService<TextAttributes>;
    get mounted(): boolean;
    get marks(): TextAttributes | null;
    get hooks(): {
        beforeinput?: ((props: import("./services/hook.js").BeforeinputHookCtx<TextAttributes>) => void) | undefined;
        compositionEnd?: ((props: import("./services/hook.js").CompositionEndHookCtx<TextAttributes>) => void) | undefined;
    };
    get isComposing(): boolean;
    get isReadonly(): boolean;
    static nativePointToTextPoint: typeof nativePointToTextPoint;
    static textPointToDomPoint: typeof textPointToDomPoint;
    static getTextNodesFromElement: typeof getTextNodesFromElement;
    private _disposables;
    private readonly _yText;
    private _rootElement;
    private _eventSource;
    private _isReadonly;
    private _eventService;
    private _rangeService;
    private _attributeService;
    private _deltaService;
    private _textService;
    private _hooksService;
    private _mounted;
    readonly isEmbed: (delta: DeltaInsert<TextAttributes>) => boolean;
    readonly inlineRangeProvider: InlineRangeProvider | null;
    readonly slots: {
        mounted: Slot<void>;
        unmounted: Slot<void>;
        textChange: Slot<void>;
        render: Slot<void>;
        renderComplete: Slot<void>;
        inlineRangeUpdate: Slot<InlineRangeUpdatedProp>;
        inlineRangeApply: Slot<Range>;
        /**
         * Corresponding to the `compositionUpdate` and `beforeInput` events, and triggered only when the `inlineRange` is not null.
         */
        inputting: Slot<void>;
        /**
         * Triggered only when the `inlineRange` is not null.
         */
        keydown: Slot<KeyboardEvent>;
    };
    setAttributeSchema: (schema: import("zod").ZodType<TextAttributes, import("zod").ZodTypeDef, unknown>) => void;
    setAttributeRenderer: (renderer: import("./types.js").AttributeRenderer<TextAttributes>) => void;
    setMarks: (marks: TextAttributes) => void;
    resetMarks: () => void;
    getFormat: (inlineRange: InlineRange, loose?: boolean) => TextAttributes;
    toDomRange: (inlineRange: InlineRange) => Range | null;
    toInlineRange: (range: Range) => InlineRange | null;
    getInlineRange: () => InlineRange | null;
    getInlineRangeFromElement: (element: Element) => InlineRange | null;
    getNativeSelection: () => Selection | null;
    getTextPoint: (rangeIndex: number) => import("./types.js").TextPoint;
    getLine: (rangeIndex: number) => {
        line: import("./index.js").VLine;
        lineIndex: number;
        rangeIndexRelatedToLine: number;
    };
    isValidInlineRange: (inlineRange: InlineRange | null) => boolean;
    isFirstLine: (inlineRange: InlineRange | null) => boolean;
    isLastLine: (inlineRange: InlineRange | null) => boolean;
    setInlineRange: (inlineRange: InlineRange | null, sync?: boolean) => void;
    focusStart: () => void;
    focusEnd: () => void;
    selectAll: () => void;
    focusIndex: (index: number) => void;
    syncInlineRange: () => void;
    getDeltasByInlineRange: (inlineRange: InlineRange) => import("./types.js").DeltaEntry<TextAttributes>[];
    getDeltaByRangeIndex: (rangeIndex: number) => DeltaInsert<TextAttributes> | null;
    mapDeltasInInlineRange: <Result>(inlineRange: InlineRange, callback: (delta: DeltaInsert<TextAttributes>, rangeIndex: number, deltaIndex: number) => Result, normalize?: boolean) => Result[];
    isNormalizedDeltaSelected: (normalizedDeltaIndex: number, inlineRange: InlineRange) => boolean;
    deleteText: (inlineRange: InlineRange) => void;
    insertText: (inlineRange: InlineRange, text: string, attributes?: TextAttributes) => void;
    insertLineBreak: (inlineRange: InlineRange) => void;
    formatText: (inlineRange: InlineRange, attributes: TextAttributes, options?: {
        match?: ((delta: DeltaInsert, deltaInlineRange: InlineRange) => boolean) | undefined;
        mode?: "replace" | "merge" | undefined;
    }) => void;
    resetText: (inlineRange: InlineRange) => void;
    setText: (text: string, attributes?: TextAttributes) => void;
    constructor(yText: InlineEditor['yText'], ops?: {
        isEmbed?: (delta: DeltaInsert<TextAttributes>) => boolean;
        hooks?: InlineHookService<TextAttributes>['hooks'];
        inlineRangeProvider?: InlineRangeProvider;
    });
    private _onYTextChange;
    private _bindYTextObserver;
    mount(rootElement: HTMLElement, eventSource?: HTMLElement, isReadonly?: boolean): void;
    unmount(): void;
    requestUpdate(syncInlineRange?: boolean): void;
    waitForUpdate(): Promise<void>;
    setReadonly(isReadonly: boolean): void;
    rerenderWholeEditor(): void;
    transact(fn: () => void): void;
}
//# sourceMappingURL=inline-editor.d.ts.map