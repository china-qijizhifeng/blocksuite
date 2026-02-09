export const startDrag = (evt, ops) => {
    const transform = ops?.transform ?? (e => e);
    const param = transform(evt);
    const result = {
        data: ops.onDrag(param),
        last: param,
        move: (p) => {
            result.data = ops.onMove(p);
        },
    };
    const clear = () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('keydown', keydown);
        ops.onClear();
    };
    const keydown = (evt) => {
        if (evt.key === 'Escape') {
            clear();
        }
    };
    const move = (evt) => {
        evt.preventDefault();
        const p = transform(evt);
        result.last = p;
        result.data = ops.onMove(p);
    };
    const up = () => {
        try {
            ops.onDrop(result.data);
        }
        finally {
            clear();
        }
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('keydown', keydown);
    return result;
};
//# sourceMappingURL=drag.js.map