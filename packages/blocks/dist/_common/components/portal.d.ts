import { Slot } from '@blocksuite/global/utils';
import { type AutoUpdateOptions, type ComputePositionConfig, type ComputePositionReturn, type ReferenceElement } from '@floating-ui/dom';
import { LitElement, type RenderOptions, type TemplateResult } from 'lit';
/**
 * Renders a template into a portal. Defaults to `document.body`.
 *
 * Note that every time the parent component re-renders, the portal will be re-called.
 *
 * See https://lit.dev/docs/components/rendering/#writing-a-good-render()-method
 *
 * @example
 * ```ts
 * render() {
 *   return html`${showPortal
 *     ? html`<blocksuite-portal .template=${portalTemplate}></blocksuite-portal>`
 *     : null}`;
 * };
 * ```
 */
export declare class Portal extends LitElement {
    private _portalRoot;
    accessor container: HTMLElement;
    accessor template: TemplateResult<1>;
    accessor shadowDom: boolean | ShadowRootInit;
    disconnectedCallback(): void;
    createRenderRoot(): ShadowRoot | HTMLDivElement;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'blocksuite-portal': Portal;
    }
}
/**
 * See https://lit.dev/docs/templates/expressions/#child-expressions
 */
type Renderable = TemplateResult<1> | HTMLElement | number | boolean | string | null | undefined;
type PortalOptions = {
    template: Renderable | ((ctx: {
        updatePortal: () => void;
    }) => Renderable);
    container?: Element;
    /**
     * The portal is removed when the AbortSignal is aborted.
     */
    signal?: AbortSignal;
    /**
     * Defaults to `true`.
     */
    shadowDom?: boolean | ShadowRootInit;
    renderOptions?: RenderOptions;
    /**
     * Defaults to `true`.
     * If true, the portalRoot will be added a class `blocksuite-portal`. It's useful for finding the portalRoot.
     */
    identifyWrapper?: boolean;
    portalStyles?: Record<string, string | number | undefined | null>;
};
/**
 * Similar to `<blocksuite-portal>`, but only renders once when called.
 *
 * The template should be a **static** template since it will not be re-rendered unless `updatePortal` is called.
 *
 * See {@link Portal} for more details.
 */
export declare function createSimplePortal({ template, container, signal, renderOptions, shadowDom, identifyWrapper, }: PortalOptions): HTMLDivElement;
type ComputePositionOptions = {
    referenceElement: ReferenceElement;
    /**
     * Default `false`.
     */
    autoUpdate?: true | AutoUpdateOptions;
    /**
     * Default `true`. Only work when `referenceElement` is an `Element`. Check when position update (`autoUpdate` is `true` or first tick)
     */
    abortWhenRefRemoved?: boolean;
} & Partial<ComputePositionConfig>;
export type AdvancedPortalOptions = Omit<PortalOptions, 'template' | 'signal'> & {
    abortController: AbortController;
    template: Renderable | ((context: {
        positionSlot: Slot<ComputePositionReturn>;
        updatePortal: () => void;
    }) => Renderable);
    /**
     * See https://floating-ui.com/docs/computePosition
     */
    computePosition?: ComputePositionOptions | ((portalRoot: Element) => ComputePositionOptions);
    /**
     * Whether to close the portal when click away(click outside).
     * @default false
     */
    closeOnClickAway?: boolean;
};
/**
 * Similar to `createSimplePortal`, but supports auto update position.
 *
 * The template should be a **static** template since it will not be re-rendered.
 *
 * See {@link createSimplePortal} for more details.
 *
 * @example
 * ```ts
 * createLitPortal({
 *   template: RenameModal({
 *     model,
 *     abortController: renameAbortController,
 *   }),
 *   computePosition: {
 *     referenceElement: anchor,
 *     placement: 'top-end',
 *     middleware: [flip(), offset(4)],
 *     autoUpdate: true,
 *   },
 *   abortController: renameAbortController,
 * });
 * ```
 */
export declare function createLitPortal({ computePosition: positionConfigOrFn, abortController, closeOnClickAway, ...portalOptions }: AdvancedPortalOptions): HTMLDivElement;
export {};
//# sourceMappingURL=portal.d.ts.map