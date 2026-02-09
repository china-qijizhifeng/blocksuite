import { DisposableGroup } from '@blocksuite/global/utils';
import type { ReactiveController, ReactiveElement } from 'lit';
import type { StyleInfo } from 'lit/directives/style-map.js';
import type { AdvancedPortalOptions } from '../portal.js';
import { whenHover, type WhenHoverOptions } from './when-hover.js';
type OptionsParams = Omit<ReturnType<typeof whenHover>, 'setFloating' | 'dispose'> & {
    abortController: AbortController;
};
type HoverPortalOptions = Omit<AdvancedPortalOptions, 'abortController'>;
export type HoverOptions = {
    /**
     * Transition style when the portal is shown or hidden.
     */
    transition: {
        /**
         * Specifies the length of the transition in ms.
         *
         * You only need to specify the transition end duration actually.
         *
         * ---
         *
         * Why is the duration required?
         *
         * The transition event is not reliable, and it may not be triggered in some cases.
         *
         * See also https://github.com/w3c/csswg-drafts/issues/3043 https://github.com/toeverything/blocksuite/pull/7248/files#r1631375330
         *
         * Take a look at solutions from other projects: https://floating-ui.com/docs/useTransition#duration
         */
        duration: number;
        in: StyleInfo;
        out: StyleInfo;
    } | null;
    /**
     * Set the portal as hover element automatically.
     * @default true
     */
    setPortalAsFloating: boolean;
    allowMultiple?: boolean;
} & WhenHoverOptions;
export declare class HoverController implements ReactiveController {
    /**
     * Whether the host is currently hovering.
     *
     * This property is unreliable when the floating element disconnect from the DOM suddenly.
     */
    get isHovering(): boolean;
    get setReference(): (element?: Element | undefined) => void;
    get portal(): HTMLDivElement | undefined;
    static globalAbortController?: AbortController;
    private _abortController?;
    private _setReference?;
    private _portal?;
    private readonly _onHover;
    private readonly _hoverOptions;
    private _isHovering;
    protected _disposables: DisposableGroup;
    host: ReactiveElement;
    constructor(host: ReactiveElement, onHover: (options: OptionsParams) => HoverPortalOptions | null, hoverOptions?: Partial<HoverOptions>);
    /**
     * Callback when the portal needs to be aborted.
     */
    onAbort: () => void;
    hostConnected(): void;
    hostDisconnected(): void;
    abort(force?: boolean): void;
}
export {};
//# sourceMappingURL=controller.d.ts.map