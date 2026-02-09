import { styleMap } from 'lit/directives/style-map.js';
export function selectionStyle(rect, color) {
    return styleMap({
        position: 'absolute',
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        backgroundColor: color,
        pointerEvent: 'none',
        opacity: '20%',
        borderRadius: '3px',
    });
}
export function cursorStyle(rect, color) {
    return styleMap({
        position: 'absolute',
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        backgroundColor: color,
        pointerEvent: 'none',
    });
}
function covers(rect1, rect2) {
    return (rect1.left <= rect2.left &&
        rect1.top <= rect2.top &&
        rect1.left + rect1.width >= rect2.left + rect2.width &&
        rect1.top + rect1.height >= rect2.top + rect2.height);
}
function intersects(rect1, rect2) {
    return (rect1.left <= rect2.left + rect2.width &&
        rect1.left + rect1.width >= rect2.left &&
        rect1.top <= rect2.top + rect2.height &&
        rect1.top + rect1.height >= rect2.top);
}
function merge(rect1, rect2) {
    const left = Math.min(rect1.left, rect2.left);
    const top = Math.min(rect1.top, rect2.top);
    const right = Math.max(rect1.left + rect1.width, rect2.left + rect2.width);
    const bottom = Math.max(rect1.top + rect1.height, rect2.top + rect2.height);
    return {
        left: left,
        top: top,
        width: right - left,
        height: bottom - top,
    };
}
export function filterCoveringRects(rects) {
    let mergedRects = [];
    let hasChanges;
    do {
        hasChanges = false;
        const newMergedRects = [...mergedRects];
        for (const rect of rects) {
            let merged = false;
            for (let i = 0; i < newMergedRects.length; i++) {
                if (covers(newMergedRects[i], rect)) {
                    merged = true;
                    break;
                }
                else if (intersects(newMergedRects[i], rect)) {
                    newMergedRects[i] = merge(newMergedRects[i], rect);
                    merged = true;
                    hasChanges = true;
                    break;
                }
            }
            if (!merged) {
                newMergedRects.push(rect);
            }
        }
        if (!hasChanges) {
            for (let i = 0; i < newMergedRects.length; i++) {
                for (let j = i + 1; j < newMergedRects.length; j++) {
                    if (intersects(newMergedRects[i], newMergedRects[j])) {
                        newMergedRects[i] = merge(newMergedRects[i], newMergedRects[j]);
                        newMergedRects.splice(j, 1);
                        hasChanges = true;
                        break;
                    }
                }
            }
        }
        mergedRects = newMergedRects;
    } while (hasChanges);
    return mergedRects;
}
//# sourceMappingURL=utils.js.map