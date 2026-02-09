import type { EmbedBlockModel } from '../../../../../_common/embed-block-helper/index.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
export declare class EdgelessBlockPortalEmbed extends EdgelessPortalBase<EmbedBlockModel> {
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-block-portal-embed': EdgelessBlockPortalEmbed;
    }
}
//# sourceMappingURL=edgeless-embed.d.ts.map