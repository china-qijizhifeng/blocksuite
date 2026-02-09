export async function sleep(ms, signal) {
    return new Promise(resolve => {
        if (signal?.aborted) {
            resolve();
            return;
        }
        let resolved = false;
        signal?.addEventListener('abort', () => {
            if (!resolved) {
                clearTimeout(timeId);
                resolve();
            }
        });
        const timeId = setTimeout(() => {
            resolved = true;
            resolve();
        }, ms);
    });
}
export function noop(_) {
    return;
}
export function throttle(fn, limit, { leading = true, trailing = true } = {}) {
    let timer = null;
    let lastArgs = null;
    const setTimer = () => {
        if (lastArgs && trailing) {
            fn(...lastArgs);
            lastArgs = null;
            timer = setTimeout(setTimer, limit);
        }
        else {
            timer = null;
        }
    };
    return function (...args) {
        if (timer) {
            // in throttle
            lastArgs = args;
            return;
        }
        // Execute the function on the leading edge
        if (leading) {
            fn.apply(this, args);
        }
        timer = setTimeout(setTimer, limit);
    };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = (fn, limit, { leading = true, trailing = true } = {}) => {
    let timer = null;
    let lastArgs = null;
    const setTimer = () => {
        if (lastArgs && trailing) {
            fn(...lastArgs);
            lastArgs = null;
            timer = setTimeout(setTimer, limit);
        }
        else {
            timer = null;
        }
    };
    return function (...args) {
        if (timer) {
            lastArgs = args;
            clearTimeout(timer);
        }
        if (leading && !timer) {
            fn(...args);
        }
        timer = setTimeout(setTimer, limit);
    };
};
//# sourceMappingURL=function.js.map