import { EdgelessCopilotToolbarEntry, } from '@blocksuite/blocks';
import { noop } from '@blocksuite/global/utils';
import { html } from 'lit';
import { edgelessActionGroups } from './actions-config.js';
noop(EdgelessCopilotToolbarEntry);
export function setupEdgelessCopilot(widget) {
    widget.groups = edgelessActionGroups;
}
export function setupEdgelessElementToolbarEntry(widget) {
    widget.registerEntry({
        when: () => {
            return true;
        },
        render: (edgeless) => {
            const chain = edgeless.service.std.command.chain();
            const filteredGroups = edgelessActionGroups.reduce((pre, group) => {
                const filtered = group.items.filter(item => item.showWhen?.(chain, 'edgeless', edgeless.host));
                if (filtered.length > 0)
                    pre.push({ ...group, items: filtered });
                return pre;
            }, []);
            if (filteredGroups.every(group => group.items.length === 0))
                return null;
            return html `<edgeless-copilot-toolbar-entry
        .edgeless=${edgeless}
        .host=${edgeless.host}
        .groups=${edgelessActionGroups}
      ></edgeless-copilot-toolbar-entry>`;
        },
    });
}
//# sourceMappingURL=index.js.map