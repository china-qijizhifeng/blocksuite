import { tImage } from '../../../logical/data-type.js';
import { columnType } from '../../column-config.js';
export const imageColumnType = columnType('image');
export const imageColumnModelConfig = imageColumnType.modelConfig({
    name: 'image',
    type: () => tImage.create(),
    defaultData: () => ({}),
    cellToString: data => data ?? '',
    cellFromString: data => {
        return {
            value: data,
        };
    },
    cellToJson: data => data ?? null,
    isEmpty: data => data == null,
});
//# sourceMappingURL=define.js.map