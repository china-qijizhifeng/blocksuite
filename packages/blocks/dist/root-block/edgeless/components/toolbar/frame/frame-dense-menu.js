import { FrameIcon } from '../../../../../_common/icons/edgeless.js';
import { FrameConfig } from './config.js';
import { createFrame } from './service.js';
export const buildFrameDenseMenu = edgeless => ({
    type: 'sub-menu',
    name: 'Frame',
    icon: FrameIcon,
    select: () => edgeless.tools.setEdgelessTool({ type: 'frame' }),
    isSelected: edgeless.tools.edgelessTool.type === 'frame',
    options: {
        items: [
            {
                type: 'action',
                name: 'Custom',
                select: () => edgeless.tools.setEdgelessTool({ type: 'frame' }),
            },
            ...FrameConfig.map(config => ({
                type: 'action',
                name: `Slide ${config.name}`,
                select: () => createFrame(edgeless, config.wh),
            })),
        ],
    },
});
//# sourceMappingURL=frame-dense-menu.js.map