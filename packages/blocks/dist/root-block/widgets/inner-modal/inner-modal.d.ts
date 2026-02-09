import { WidgetElement } from '@blocksuite/block-std';
import { type FloatingElement, type ReferenceElement } from '@floating-ui/dom';
export declare const AFFINE_INNER_MODAL_WIDGET = "affine-inner-modal-widget";
export declare class AffineInnerModalWidget extends WidgetElement {
    private _getTarget?;
    setTarget(fn: () => ReferenceElement): void;
    get target(): ReferenceElement;
    open(modal: FloatingElement, ops: {
        onClose?: () => void;
    }): {
        close(): void;
    };
    render(): symbol;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_INNER_MODAL_WIDGET]: AffineInnerModalWidget;
    }
}
//# sourceMappingURL=inner-modal.d.ts.map