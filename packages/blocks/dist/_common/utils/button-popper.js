import { autoPlacement, computePosition, offset, shift, size, } from '@floating-ui/dom';
export function listenClickAway(element, onClickAway) {
    const callback = (event) => {
        const inside = event.composedPath().includes(element);
        if (!inside) {
            onClickAway();
        }
    };
    document.addEventListener('click', callback);
    return {
        dispose: () => {
            document.removeEventListener('click', callback);
        },
    };
}
const ATTR_SHOW = 'data-show';
/**
 * Using attribute 'data-show' to control popper visibility.
 *
 * ```css
 * selector {
 *   display: none;
 * }
 * selector[data-show] {
 *   display: block;
 * }
 * ```
 */
export function createButtonPopper(reference, popperElement, stateUpdated = () => {
    /** DEFAULT EMPTY FUNCTION */
}, mainAxis, crossAxis, rootBoundary) {
    let display = 'hidden';
    const originMaxHeight = window.getComputedStyle(popperElement).maxHeight;
    function compute() {
        const overflowOptions = {
            rootBoundary: typeof rootBoundary === 'function' ? rootBoundary() : rootBoundary,
        };
        computePosition(reference, popperElement, {
            middleware: [
                offset({
                    mainAxis: mainAxis ?? 14,
                    crossAxis: crossAxis ?? 0,
                }),
                autoPlacement({
                    allowedPlacements: ['top', 'bottom'],
                    ...overflowOptions,
                }),
                shift(overflowOptions),
                size({
                    ...overflowOptions,
                    apply({ availableHeight }) {
                        popperElement.style.maxHeight = originMaxHeight
                            ? `min(${originMaxHeight}, ${availableHeight}px)`
                            : `${availableHeight}px`;
                    },
                }),
            ],
        })
            .then(({ x, y, middlewareData: data }) => {
            Object.assign(popperElement.style, {
                position: 'absolute',
                zIndex: 1,
                left: `${x + (data.shift?.x ?? 0)}px`,
                top: `${y + (data.shift?.y ?? 0)}px`,
            });
        })
            .catch(console.error);
    }
    const show = () => {
        if (display === 'show')
            return;
        popperElement.setAttribute(ATTR_SHOW, '');
        display = 'show';
        stateUpdated({ display });
        compute();
    };
    const hide = () => {
        if (display === 'hidden')
            return;
        popperElement.removeAttribute(ATTR_SHOW);
        display = 'hidden';
        stateUpdated({ display });
        compute();
    };
    const toggle = () => {
        if (popperElement.hasAttribute(ATTR_SHOW)) {
            hide();
        }
        else {
            show();
        }
    };
    const clickAway = listenClickAway(reference, () => hide());
    return {
        get state() {
            return display;
        },
        show,
        hide,
        toggle,
        dispose: () => {
            clickAway.dispose();
        },
    };
}
//# sourceMappingURL=button-popper.js.map