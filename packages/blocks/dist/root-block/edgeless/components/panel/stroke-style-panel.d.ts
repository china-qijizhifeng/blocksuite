import '../../../../_common/components/button.js';
import '../../../../_common/components/tooltip/tooltip.js';
import './color-panel.js';
import { LitElement } from 'lit';
import type { CssVariableName } from '../../../../_common/theme/css-variables.js';
import { StrokeStyle } from '../../../../surface-block/consts.js';
import type { ColorEvent } from './color-panel.js';
import { type LineStyleEvent } from './line-styles-panel.js';
declare const StrokeStylePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class StrokeStylePanel extends StrokeStylePanel_base {
    static styles: import("lit").CSSResult;
    accessor strokeWidth: number;
    accessor strokeColor: CssVariableName;
    accessor strokeStyle: StrokeStyle;
    accessor setStrokeStyle: (e: LineStyleEvent) => void;
    accessor setStrokeColor: (e: ColorEvent) => void;
    accessor hollowCircle: boolean | undefined;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'stroke-style-panel': StrokeStylePanel;
    }
}
export {};
//# sourceMappingURL=stroke-style-panel.d.ts.map