import './action-wrapper.js';
import '../../messages/slides-renderer.js';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { ChatAction } from '../chat-context.js';
declare const ActionSlides_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ActionSlides extends ActionSlides_base {
    accessor item: ChatAction;
    accessor host: EditorHost;
    protected render(): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'action-slides': ActionSlides;
    }
}
export {};
//# sourceMappingURL=slides.d.ts.map