export function wait(time = 0) {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            setTimeout(resolve, time);
        });
    });
}
/**
 * simulate click event
 * @param target
 * @param position position relative to the target
 */
export function click(target, position) {
    const element = target.getBoundingClientRect();
    const clientX = element.x + position.x;
    const clientY = element.y + position.y;
    target.dispatchEvent(new PointerEvent('pointerdown', {
        clientX,
        clientY,
        bubbles: true,
    }));
    target.dispatchEvent(new PointerEvent('pointerup', {
        clientX,
        clientY,
        bubbles: true,
    }));
    target.dispatchEvent(new MouseEvent('click', {
        clientX,
        clientY,
        bubbles: true,
    }));
}
/**
 * simulate pointerdown event
 * @param target
 * @param position position relative to the target
 */
export function pointerdown(target, position) {
    const element = target.getBoundingClientRect();
    const clientX = element.x + position.x;
    const clientY = element.y + position.y;
    target.dispatchEvent(new PointerEvent('pointerdown', {
        clientX,
        clientY,
        bubbles: true,
    }));
}
/**
 * simulate pointerup event
 * @param target
 * @param position position relative to the target
 */
export function pointerup(target, position) {
    const element = target.getBoundingClientRect();
    const clientX = element.x + position.x;
    const clientY = element.y + position.y;
    target.dispatchEvent(new PointerEvent('pointerup', {
        clientX,
        clientY,
        bubbles: true,
    }));
}
/**
 * simulate pointermove event
 * @param target
 * @param position position relative to the target
 */
export function pointermove(target, position) {
    const element = target.getBoundingClientRect();
    const clientX = element.x + position.x;
    const clientY = element.y + position.y;
    target.dispatchEvent(new PointerEvent('pointermove', {
        clientX,
        clientY,
        bubbles: true,
    }));
}
export function drag(target, start, end, step = 5) {
    pointerdown(target, start);
    pointermove(target, start);
    if (step !== 0) {
        const xStep = (end.x - start.x) / step;
        const yStep = (end.y - start.y) / step;
        for (const [i] of Array.from({ length: step }).entries()) {
            pointermove(target, {
                x: start.x + xStep * (i + 1),
                y: start.y + yStep * (i + 1),
            });
        }
    }
    pointermove(target, end);
    pointerup(target, end);
}
//# sourceMappingURL=common.js.map