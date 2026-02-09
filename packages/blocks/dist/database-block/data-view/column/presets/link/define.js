import { tString } from '../../../logical/data-type.js';
import { columnType } from '../../column-config.js';
export const linkColumnType = columnType('link');
export const linkColumnModelConfig = linkColumnType.modelConfig({
    name: 'Link',
    type: () => tString.create(),
    defaultData: () => ({}),
    cellToString: data => data?.toString() ?? '',
    cellFromString: data => {
        return {
            value: data,
        };
    },
    cellToJson: data => data ?? null,
    isEmpty: data => data == null || data.length == 0,
});
//# sourceMappingURL=define.js.map