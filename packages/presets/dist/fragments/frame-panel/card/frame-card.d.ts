import './frame-card-title.js';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type EdgelessRootBlockComponent, type FrameBlockModel } from '@blocksuite/blocks';
import type { Doc } from '@blocksuite/store';
import { type PropertyValues } from 'lit';
export type ReorderEvent = CustomEvent<{
    currentNumber: number;
    targetNumber: number;
    realIndex: number;
}>;
export type SelectEvent = CustomEvent<{
    id: string;
    selected: boolean;
    index: number;
    multiselect: boolean;
}>;
export type DragEvent = CustomEvent<{
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
}>;
export type FitViewEvent = CustomEvent<{
    block: FrameBlockModel;
}>;
declare const FrameCard_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FrameCard extends FrameCard_base {
    static styles: import("lit").CSSResult;
    private _frameDisposables;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor frame: FrameBlockModel;
    accessor doc: Doc;
    accessor host: EditorHost;
    accessor cardIndex: number;
    accessor frameIndex: string;
    accessor status: 'selected' | 'dragging' | 'placeholder' | 'none';
    accessor stackOrder: number;
    accessor pos: {
        x: number;
        y: number;
    };
    accessor width: number | undefined;
    accessor draggingCardNumber: number | undefined;
    accessor containerElement: HTMLElement;
    private _dispatchSelectEvent;
    private _dispatchFitViewEvent;
    private _dispatchDragEvent;
    private _DraggingCardNumber;
    private _updateElement;
    private _clearFrameDisposables;
    private _setFrameDisposables;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-card': FrameCard;
    }
}
export {};
//# sourceMappingURL=frame-card.d.ts.map