import { ShadowlessElement } from '@blocksuite/block-std';
import type { FrameBlockModel } from '@blocksuite/blocks';
import { type PropertyValues } from 'lit';
declare const FrameCardTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FrameCardTitle extends FrameCardTitle_base {
    static styles: import("lit").CSSResult;
    private _titleDisposables;
    accessor frame: FrameBlockModel;
    accessor cardIndex: number;
    accessor titleContainer: HTMLElement;
    accessor titleIndexElement: HTMLElement;
    accessor titleContentElement: HTMLElement;
    private _updateElement;
    private _mountTitleEditor;
    private _clearTitleDisposables;
    private _setFrameDisposables;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-card-title': FrameCardTitle;
    }
}
export {};
//# sourceMappingURL=frame-card-title.d.ts.map