import { HeaderAreaTextCell, HeaderAreaTextCellEditing, } from '../../../../../columns/title/text.js';
import { createFromBaseCellRenderer } from '../../../../column/renderer.js';
import { map } from '../../../../utils/uni-component/operation.js';
export const headerRenderer = {
    view: map(createFromBaseCellRenderer(HeaderAreaTextCell), (props) => ({ ...props, showIcon: true })),
    edit: map(createFromBaseCellRenderer(HeaderAreaTextCellEditing), (props) => ({ ...props, showIcon: true })),
};
//# sourceMappingURL=header-cell.js.map