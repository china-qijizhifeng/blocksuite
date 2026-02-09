export const observeLastProps = (edgelessService, toolType, fields, initStates, onChange) => {
    const _prevStates = { ...initStates };
    return edgelessService.editPropsStore.slots.lastPropsUpdated.on(({ type, props }) => {
        if (type !== toolType)
            return;
        const updates = fields
            .filter(_key => {
            const key = _key;
            return props[key] !== _prevStates[key] && props[key] != undefined;
        })
            .reduce((acc, key) => ({ ...acc, [key]: props[key] }), {});
        Object.assign(_prevStates, updates);
        onChange?.(updates, props);
    });
};
export const applyLastProps = (service, toolType, fields, initStates) => {
    const attrs = service.editPropsStore.getLastProps(toolType);
    const object = fields.reduce((acc, key) => ({ ...acc, [key]: attrs[key] }), initStates);
    Object.assign(initStates, object);
    return object;
};
//# sourceMappingURL=observe-last-props.js.map