import '../../../../_common/components/button.js';
import '../../../../_common/components/tooltip/tooltip.js';
import { LitElement, type TemplateResult } from 'lit';
import type { EmbedCardStyle } from '../../../../_common/types.js';
declare const CardStylePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CardStylePanel extends CardStylePanel_base {
    static styles: import("lit").CSSResult;
    accessor value: EmbedCardStyle;
    accessor options: {
        style: EmbedCardStyle;
        Icon: TemplateResult<1>;
        tooltip: string;
    }[];
    accessor onSelect: (value: EmbedCardStyle) => void;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'card-style-panel': CardStylePanel;
    }
}
export {};
//# sourceMappingURL=card-style-panel.d.ts.map