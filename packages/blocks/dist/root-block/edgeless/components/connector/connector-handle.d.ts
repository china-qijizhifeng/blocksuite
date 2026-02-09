import { LitElement } from 'lit';
import { type ConnectorElementModel } from '../../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessConnectorHandle_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessConnectorHandle extends EdgelessConnectorHandle_base {
    static styles: import("lit").CSSResult;
    private accessor _startHandler;
    private accessor _endHandler;
    private _lastZoom;
    accessor connector: ConnectorElementModel;
    accessor edgeless: EdgelessRootBlockComponent;
    private _capPointerDown;
    private _bindEvent;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-handle': EdgelessConnectorHandle;
    }
}
export {};
//# sourceMappingURL=connector-handle.d.ts.map