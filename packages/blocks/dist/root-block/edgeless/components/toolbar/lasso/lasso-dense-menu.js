import { LassoFreeHandIcon, LassoPolygonalIcon, } from '../../../../../_common/icons/edgeless.js';
import { LassoMode } from '../../../../../_common/types.js';
export const buildLassoDenseMenu = edgeless => {
    // TODO: active state
    // const prevMode =
    //   edgeless.service.editPropsStore.getLastProps('lasso').mode ??
    //   LassoMode.FreeHand;
    const isActive = edgeless.tools.edgelessTool.type === 'lasso';
    const createSelect = (mode) => () => {
        edgeless.tools.setEdgelessTool({ type: 'lasso', mode });
    };
    return {
        name: 'Lasso',
        type: 'sub-menu',
        icon: LassoFreeHandIcon,
        select: createSelect(LassoMode.FreeHand),
        isSelected: isActive,
        options: {
            items: [
                {
                    type: 'action',
                    icon: LassoFreeHandIcon,
                    name: 'Free',
                    select: createSelect(LassoMode.FreeHand),
                    // isSelected: isActive && prevMode === LassoMode.FreeHand,
                },
                {
                    type: 'action',
                    icon: LassoPolygonalIcon,
                    name: 'Polygonal',
                    select: createSelect(LassoMode.Polygonal),
                    // isSelected: isActive && prevMode === LassoMode.Polygonal,
                },
            ],
        },
    };
};
//# sourceMappingURL=lasso-dense-menu.js.map