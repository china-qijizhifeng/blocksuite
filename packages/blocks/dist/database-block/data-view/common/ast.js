import { propertyMatcher } from '../logical/property-matcher.js';
import { filterMatcher } from '../widget/filter/matcher/matcher.js';
export const getRefType = (vars, ref) => {
    if (ref.type === 'ref') {
        return vars.find(v => v.id === ref.name)?.type;
    }
    return propertyMatcher.find(v => v.data.name === ref.propertyFuncName)?.type
        .rt;
};
export const firstFilterName = (vars, ref) => {
    const type = getRefType(vars, ref);
    if (!type) {
        throw new Error(`can't resolve ref type`);
    }
    return filterMatcher.match(type)?.name;
};
export const firstFilterByRef = (vars, ref) => {
    return {
        type: 'filter',
        left: ref,
        function: firstFilterName(vars, ref),
        args: [],
    };
};
export const firstFilter = (vars) => {
    const ref = {
        type: 'ref',
        name: vars[0].id,
    };
    const filter = firstFilterName(vars, ref);
    if (!filter) {
        throw new Error(`can't match any filter`);
    }
    return {
        type: 'filter',
        left: ref,
        function: filter,
        args: [],
    };
};
export const firstFilterInGroup = (vars) => {
    return {
        type: 'group',
        op: 'and',
        conditions: [firstFilter(vars)],
    };
};
//# sourceMappingURL=ast.js.map