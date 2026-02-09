import { tString } from '../../../logical/data-type.js';
import { columnType } from '../../column-config.js';
export const textColumnType = columnType('text');
export const textColumnModelConfig = textColumnType.modelConfig({
    name: 'Plain-Text',
    type: () => tString.create(),
    defaultData: () => ({}),
    cellToString: data => data ?? '',
    cellFromString: data => {
        return {
            value: data,
        };
    },
    cellToJson: data => data ?? null,
    isEmpty: data => data == null || data.length === 0,
});
//# sourceMappingURL=define.js.map