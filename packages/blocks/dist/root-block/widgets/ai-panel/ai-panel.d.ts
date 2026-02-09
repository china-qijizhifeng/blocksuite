import './components/index.js';
import { WidgetElement } from '@blocksuite/block-std';
import { nothing, type PropertyValues } from 'lit';
import { type AffineViewportOverlayWidget } from '../viewport-overlay/viewport-overlay.js';
import type { AIPanelGenerating } from './components/index.js';
import type { AffineAIPanelState, AffineAIPanelWidgetConfig } from './type.js';
export declare const AFFINE_AI_PANEL_WIDGET = "affine-ai-panel-widget";
export declare class AffineAIPanelWidget extends WidgetElement {
    get viewportOverlayWidget(): AffineViewportOverlayWidget | null;
    get inputText(): string | null;
    get answer(): string | null;
    static styles: import("lit").CSSResult;
    private _stopAutoUpdate?;
    private _discardModalAbort;
    private _abortController;
    private _inputText;
    private _selection?;
    private _answer;
    ctx: unknown;
    accessor config: AffineAIPanelWidgetConfig | null;
    accessor state: AffineAIPanelState;
    accessor generatingElement: AIPanelGenerating | null;
    private _clearDiscardModal;
    private _discardCallback;
    private _cancelCallback;
    private _clickOutside;
    private _resetAbortController;
    private _inputFinish;
    private _calcPositionOptions;
    private _autoUpdatePosition;
    private _onKeyDown;
    private _onDocumentClick;
    private _restoreSelection;
    protected willUpdate(changed: PropertyValues): void;
    toggle: (reference: Element, input?: string) => void;
    hide: () => void;
    discard: () => void;
    showDiscardModal: () => Promise<boolean>;
    /**
     * You can evaluate this method multiple times to regenerate the answer.
     */
    generate: () => void;
    stopGenerating: () => void;
    onInput: (text: string) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
//# sourceMappingURL=ai-panel.d.ts.map