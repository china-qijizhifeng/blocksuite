import { Text } from '@blocksuite/store';
import { tBoolean } from '../../../logical/data-type.js';
import { columnType } from '../../column-config.js';
export const checkboxColumnType = columnType('checkbox');
export const checkboxColumnModelConfig = checkboxColumnType.modelConfig({
    name: 'Checkbox',
    type: () => tBoolean.create(),
    defaultData: () => ({}),
    cellToString: data => (data ? 'True' : 'False'),
    cellFromString: data => {
        return {
            value: data !== 'False',
        };
    },
    cellToJson: data => data ?? null,
    isEmpty: () => false,
});
checkboxColumnModelConfig.addConvert('rich-text', (_columns, cells) => {
    return {
        column: {},
        cells: cells.map(v => new Text(v ? 'Yes' : 'No').yText),
    };
});
//# sourceMappingURL=define.js.map