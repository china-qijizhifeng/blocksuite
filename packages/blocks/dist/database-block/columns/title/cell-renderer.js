import { createFromBaseCellRenderer } from '../../data-view/column/renderer.js';
import { map } from '../../data-view/utils/uni-component/operation.js';
import { createIcon } from '../../data-view/utils/uni-icon.js';
import { DataViewTableManager } from '../../data-view/view/presets/table/table-view-manager.js';
import { titlePureColumnConfig } from './define.js';
import { HeaderAreaTextCell, HeaderAreaTextCellEditing } from './text.js';
export const titleColumnConfig = titlePureColumnConfig.renderConfig({
    icon: createIcon('TitleIcon'),
    cellRenderer: {
        view: map(createFromBaseCellRenderer(HeaderAreaTextCell), (props) => ({
            ...props,
            showIcon: props.view instanceof DataViewTableManager,
        })),
        edit: map(createFromBaseCellRenderer(HeaderAreaTextCellEditing), (props) => ({
            ...props,
            showIcon: props.view instanceof DataViewTableManager,
        })),
    },
});
//# sourceMappingURL=cell-renderer.js.map