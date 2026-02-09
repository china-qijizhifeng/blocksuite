import { tDate } from '../../../logical/data-type.js';
import { columnType } from '../../column-config.js';
export const dateColumnType = columnType('date');
export const dateColumnModelConfig = dateColumnType.modelConfig({
    name: 'Date',
    type: () => tDate.create(),
    defaultData: () => ({}),
    cellToString: data => data?.toString() ?? '',
    cellFromString: data => {
        const isDateFormat = !isNaN(Date.parse(data));
        return {
            value: isDateFormat ? +new Date(data) : null,
        };
    },
    cellToJson: data => data ?? null,
    isEmpty: data => data == null,
});
//# sourceMappingURL=define.js.map