export const startFrameLoop = (fn) => {
    let handle = 0;
    let preTime = 0;
    const run = () => {
        handle = requestAnimationFrame(time => {
            try {
                fn(time - preTime);
            }
            finally {
                preTime = time;
                run();
            }
        });
    };
    run();
    return () => {
        cancelAnimationFrame(handle);
    };
};
const timeWeight = 1 / 16;
const distanceWeight = 1 / 8;
export const autoScrollOnBoundary = (container, ops) => {
    const { vertical = false, horizontal = true, boundary } = ops ?? {};
    const defaultBoundary = 20;
    const { left = defaultBoundary, right = defaultBoundary, top = defaultBoundary, bottom = defaultBoundary, } = typeof boundary === 'number'
        ? {
            left: boundary,
            right: boundary,
            top: boundary,
            bottom: boundary,
        }
        : boundary ?? {
            left: defaultBoundary,
            right: defaultBoundary,
            top: defaultBoundary,
            bottom: defaultBoundary,
        };
    const mousePosition = { x: 0, y: 0 };
    const mouseMove = (e) => {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
    };
    document.addEventListener('mousemove', mouseMove);
    const scroll = (delta) => {
        const rect = container.getBoundingClientRect();
        const { x, y } = mousePosition;
        const getResult = (diff) => (diff * distanceWeight + 1) * delta * timeWeight;
        if (horizontal) {
            const leftBound = rect.left + left;
            const rightBound = rect.right - right;
            if (x < leftBound) {
                container.scrollLeft -= getResult(leftBound - x);
            }
            else if (x > rightBound) {
                container.scrollLeft += getResult(x - rightBound);
            }
        }
        if (vertical) {
            const topBound = rect.top + top;
            const bottomBound = rect.bottom - bottom;
            if (y < topBound) {
                container.scrollTop -= getResult(topBound - x);
            }
            else if (y > bottomBound) {
                container.scrollTop += getResult(x - bottomBound);
            }
        }
        ops?.onScroll?.();
    };
    const cancel = startFrameLoop(scroll);
    return () => {
        cancel();
        document.removeEventListener('mousemove', mouseMove);
    };
};
//# sourceMappingURL=frame-loop.js.map