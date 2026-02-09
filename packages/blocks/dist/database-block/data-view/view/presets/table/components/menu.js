import { html } from 'lit';
import { popFilterableSimpleMenu, } from '../../../../../../_common/components/index.js';
import { ExpandFullIcon, MoveLeftIcon, MoveRightIcon, } from '../../../../../../_common/icons/index.js';
import { DeleteIcon } from '../../../../common/icons/index.js';
import { checkboxCalcOps, commonCalcOps, numberColCalcOps, } from '../stat-ops.js';
export const openDetail = (dataViewEle, rowId, selection) => {
    const old = selection.selection;
    selection.selection = undefined;
    dataViewEle.openDetailPanel({
        view: selection.host.view,
        rowId: rowId,
        onClose: () => {
            selection.selection = old;
        },
    });
};
export const popRowMenu = (dataViewEle, ele, rowId, selection) => {
    popFilterableSimpleMenu(ele, [
        {
            type: 'action',
            name: 'Expand Row',
            icon: ExpandFullIcon,
            select: () => {
                openDetail(dataViewEle, rowId, selection);
            },
        },
        // {
        //   type: 'group',
        //   name: '',
        //   children: () => [
        //     {
        //       type: 'action',
        //       name: 'Copy',
        //       icon: CopyIcon,
        //       select: () => {
        //         //TODO
        //       },
        //     },
        //     {
        //       type: 'action',
        //       name: 'Paste',
        //       icon: PasteIcon,
        //       select: () => {
        //         //TODO
        //       },
        //     },
        //   ],
        // },
        {
            type: 'group',
            name: '',
            children: () => [
                {
                    type: 'action',
                    name: 'Insert Before',
                    icon: html ` <div
            style="transform: rotate(90deg);display:flex;align-items:center;"
          >
            ${MoveLeftIcon}
          </div>`,
                    select: () => {
                        selection.insertRowBefore(selection.selection?.groupKey, rowId);
                    },
                },
                {
                    type: 'action',
                    name: 'Insert After',
                    icon: html ` <div
            style="transform: rotate(90deg);display:flex;align-items:center;"
          >
            ${MoveRightIcon}
          </div>`,
                    select: () => {
                        selection.insertRowAfter(selection.selection?.groupKey, rowId);
                    },
                },
                // {
                //   type: 'action',
                //   name: 'Duplicate',
                //   icon: DuplicateIcon,
                //   select: () => {
                //     selection.duplicateRow(rowId);
                //   },
                // },
            ],
        },
        {
            type: 'group',
            name: '',
            children: () => [
                {
                    type: 'action',
                    name: 'Delete Row',
                    class: 'delete-item',
                    icon: DeleteIcon,
                    select: () => {
                        selection.deleteRow(rowId);
                    },
                },
            ],
        },
    ]);
};
export const popColStatOperationMenu = (_rootElement, elem, _column, calcType, onSelect) => {
    let operations = [];
    switch (calcType) {
        case 'number':
            operations = numberColCalcOps;
            break;
        case 'checkbox':
            operations = checkboxCalcOps;
            break;
        default:
            operations = commonCalcOps;
    }
    const menus = operations.map(op => ({
        type: 'action',
        name: op.label,
        select: () => {
            onSelect(op);
        },
    }));
    return popFilterableSimpleMenu(elem, menus);
};
//# sourceMappingURL=menu.js.map