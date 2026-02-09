import '../../../../../edgeless-text/edgeless-text-block.js';
import { type PropertyValueMap } from 'lit';
import type { EdgelessTextBlockModel } from '../../../../../edgeless-text/edgeless-text-model.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
export declare class EdgelessBlockPortalEdgelessText extends EdgelessPortalBase<EdgelessTextBlockModel> {
    static styles: import("lit").CSSResult;
    private accessor _textContainer;
    private accessor _edgelessText;
    private accessor _editing;
    private _horizontalResizing;
    private _resizeObserver;
    private _updateH;
    private _updateW;
    checkWidthOverflow(width: number): boolean;
    firstUpdated(props: PropertyValueMap<unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-block-portal-edgeless-text': EdgelessBlockPortalEdgelessText;
    }
}
//# sourceMappingURL=edgeless-edgeless-text.d.ts.map