import { nanoid } from '@blocksuite/store';
import { columnType } from '../../../database-block/data-view/column/column-config.js';
import { tRichText } from '../../../database-block/data-view/logical/data-type.js';
import { getTagColor } from '../../../database-block/data-view/utils/tags/colors.js';
export const richTextColumnType = columnType('rich-text');
export const richTextColumnModelConfig = richTextColumnType.modelConfig({
    name: 'Text',
    type: () => tRichText.create(),
    defaultData: () => ({}),
    cellToString: data => data?.toString() ?? '',
    cellFromString: data => {
        return {
            value: data,
        };
    },
    cellToJson: data => data?.toString() ?? null,
    isEmpty: data => data == null || data.length === 0,
});
richTextColumnModelConfig.addConvert('select', (_column, cells) => {
    const options = {};
    const getTag = (name) => {
        if (options[name])
            return options[name];
        const tag = {
            id: nanoid(),
            value: name,
            color: getTagColor(),
        };
        options[name] = tag;
        return tag;
    };
    return {
        cells: cells.map(v => {
            const tags = v?.toString().split(',');
            const value = tags?.[0]?.trim();
            if (value) {
                return getTag(value).id;
            }
            return undefined;
        }),
        column: {
            options: Object.values(options),
        },
    };
});
richTextColumnModelConfig.addConvert('multi-select', (_column, cells) => {
    const options = {};
    const getTag = (name) => {
        if (options[name])
            return options[name];
        const tag = {
            id: nanoid(),
            value: name,
            color: getTagColor(),
        };
        options[name] = tag;
        return tag;
    };
    return {
        cells: cells.map(v => {
            const result = [];
            const values = v?.toString().split(',');
            values?.forEach(value => {
                value = value.trim();
                if (value) {
                    result.push(getTag(value).id);
                }
            });
            return result;
        }),
        column: {
            options: Object.values(options),
        },
    };
});
//# sourceMappingURL=define.js.map