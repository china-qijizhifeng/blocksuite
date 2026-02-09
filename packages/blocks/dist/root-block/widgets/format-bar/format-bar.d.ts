import '../../../_common/components/button.js';
import type { BlockElement } from '@blocksuite/block-std';
import { WidgetElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { AffineTextAttributes } from '../../../_common/inline/presets/affine-inline-specs.js';
import { type FormatBarConfigItem, type InlineActionConfigItem, type ParagraphActionConfigItem } from './config.js';
export declare const AFFINE_FORMAT_BAR_WIDGET = "affine-format-bar-widget";
export declare class AffineFormatBarWidget extends WidgetElement {
    private get _selectionManager();
    get displayType(): "block" | "text" | "none" | "native";
    get selectedBlockElements(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>[];
    get nativeRange(): Range | null;
    static styles: import("lit").CSSResult;
    private accessor _dragging;
    private accessor _displayType;
    private accessor _selectedBlockElements;
    private _lastCursor;
    private _abortController;
    private _placement;
    private _floatDisposables;
    accessor formatBarElement: HTMLElement | null;
    accessor configItems: FormatBarConfigItem[];
    private _reset;
    private _shouldDisplay;
    private _selectionEqual;
    private _calculatePlacement;
    private _listenFloatingElement;
    connectedCallback(): void;
    updated(): void;
    disconnectedCallback(): void;
    addDivider(): this;
    addHighlighterDropdown(): this;
    addParagraphDropdown(): this;
    addInlineAction(config: Omit<InlineActionConfigItem, 'type'>): this;
    addParagraphAction(config: Omit<ParagraphActionConfigItem, 'type'>): this;
    addTextStyleToggle(config: {
        icon: InlineActionConfigItem['icon'];
        key: Exclude<keyof AffineTextAttributes, 'color' | 'background' | 'reference'>;
        action: InlineActionConfigItem['action'];
    }): this;
    addBlockTypeSwitch(config: {
        flavour: BlockSuite.Flavour;
        icon: ParagraphActionConfigItem['icon'];
        type?: string;
        name?: string;
    }): this;
    addRawConfigItems(configItems: FormatBarConfigItem[], index?: number): this;
    clearConfig(): this;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_FORMAT_BAR_WIDGET]: AffineFormatBarWidget;
    }
}
//# sourceMappingURL=format-bar.d.ts.map