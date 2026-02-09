import { LitElement } from 'lit';
import { type BacklinkData } from './utils.js';
declare const BacklinkButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BacklinkButton extends BacklinkButton_base {
    static styles: import("lit").CSSResult;
    private accessor _showPopover;
    private _backlinks;
    constructor(backlinks: BacklinkData[]);
    private _onClickAway;
    connectedCallback(): void;
    onClick(): void;
    render(): import("lit").TemplateResult<1> | null;
}
export {};
//# sourceMappingURL=backlink-popover.d.ts.map