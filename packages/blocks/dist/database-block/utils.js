import { nanoid } from '@blocksuite/store';
import { databaseBlockAllColumnMap } from './columns/index.js';
import { titlePureColumnConfig } from './columns/title/define.js';
import { multiSelectColumnModelConfig } from './data-view/column/presets/multi-select/define.js';
import { numberColumnModelConfig } from './data-view/column/presets/number/define.js';
import { selectColumnModelConfig } from './data-view/column/presets/select/define.js';
import { textColumnModelConfig } from './data-view/column/presets/text/define.js';
import { groupByMatcher } from './data-view/common/group-by/matcher.js';
import { defaultGroupBy } from './data-view/common/view-manager.js';
import { columnPresets } from './data-view/index.js';
import { getTagColor } from './data-view/utils/tags/colors.js';
const initMap = {
    table(_columnMetaMap, model, id, name) {
        return {
            id,
            name,
            mode: 'table',
            columns: [],
            filter: {
                type: 'group',
                op: 'and',
                conditions: [],
            },
            header: {
                titleColumn: model.columns.find(v => v.type === 'title')?.id,
                iconColumn: 'type',
            },
        };
    },
    kanban(columnMetaMap, model, id, name) {
        const allowList = model.columns.filter(column => {
            const type = columnMetaMap[column.type].model.dataType(column.data);
            return !!groupByMatcher.match(type) && column.type !== 'title';
        });
        const getWeight = (column) => {
            if ([
                selectColumnModelConfig.type,
                multiSelectColumnModelConfig.type,
            ].includes(column.type)) {
                return 3;
            }
            if ([
                numberColumnModelConfig.type,
                textColumnModelConfig.type,
            ].includes(column.type)) {
                return 2;
            }
            return 1;
        };
        const column = allowList.sort((a, b) => getWeight(b) - getWeight(a))[0];
        if (!column) {
            throw new Error('not implement yet');
        }
        return {
            id,
            name,
            mode: 'kanban',
            columns: model.columns.map(v => ({
                id: v.id,
                hide: false,
            })),
            filter: {
                type: 'group',
                op: 'and',
                conditions: [],
            },
            groupBy: defaultGroupBy(columnMetaMap[column.type], column.id, column.data),
            header: {
                titleColumn: model.columns.find(v => v.type === 'title')?.id,
                iconColumn: 'type',
            },
            groupProperties: [],
        };
    },
};
export const databaseViewInitEmpty = (model, viewMeta) => {
    model.addColumn('start', titlePureColumnConfig.create(titlePureColumnConfig.model.name));
    databaseViewAddView(model, viewMeta);
};
export const databaseViewInitConvert = (model, viewMeta) => {
    model.addColumn('end', columnPresets.multiSelectColumnConfig.model.create('Tag', { options: [] }));
    databaseViewInitEmpty(model, viewMeta);
};
export const databaseViewInitTemplate = (model, viewMeta) => {
    const ids = [nanoid(), nanoid(), nanoid()];
    const statusId = model.addColumn('end', columnPresets.selectColumnConfig.model.create('Status', {
        options: [
            {
                id: ids[0],
                color: getTagColor(),
                value: 'TODO',
            },
            {
                id: ids[1],
                color: getTagColor(),
                value: 'In Progress',
            },
            {
                id: ids[2],
                color: getTagColor(),
                value: 'Done',
            },
        ],
    }));
    for (let i = 0; i < 4; i++) {
        const rowId = model.doc.addBlock('affine:paragraph', {
            text: new model.doc.Text(`Task ${i + 1}`),
        }, model.id);
        model.updateCell(rowId, {
            columnId: statusId,
            value: ids[i],
        });
    }
    databaseViewInitEmpty(model, viewMeta);
};
export const databaseViewAddView = (model, viewMeta) => {
    const id = model.doc.generateBlockId();
    const view = initMap[viewMeta.type](databaseBlockAllColumnMap, model, id, viewMeta.model.defaultName);
    model.doc.transact(() => {
        model.views.push(view);
    });
    return view;
};
//# sourceMappingURL=utils.js.map