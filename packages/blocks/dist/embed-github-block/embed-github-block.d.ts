import { EmbedBlockElement } from '../_common/embed-block-helper/embed-block-element.js';
import type { EmbedGithubStyles } from './embed-github-model.js';
import { type EmbedGithubModel } from './embed-github-model.js';
import type { EmbedGithubBlockService } from './embed-github-service.js';
export declare class EmbedGithubBlockComponent extends EmbedBlockElement<EmbedGithubModel, EmbedGithubBlockService> {
    static styles: import("lit").CSSResult;
    private accessor _isSelected;
    _cardStyle: (typeof EmbedGithubStyles)[number];
    accessor loading: boolean;
    private _selectBlock;
    private _handleClick;
    private _handleDoubleClick;
    private _handleAssigneeClick;
    open: () => void;
    refreshData: () => void;
    refreshStatus: () => void;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-github-block': EmbedGithubBlockComponent;
    }
}
//# sourceMappingURL=embed-github-block.d.ts.map