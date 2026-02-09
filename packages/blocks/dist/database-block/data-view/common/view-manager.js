import { groupByMatcher } from './group-by/matcher.js';
export const defaultGroupBy = (columnMeta, columnId, data) => {
    const name = groupByMatcher.match(columnMeta.model.dataType(data))?.name;
    return name != null
        ? {
            type: 'groupBy',
            columnId: columnId,
            name: name,
        }
        : undefined;
};
//# sourceMappingURL=view-manager.js.map