import '../../_common/components/ask-ai-button.js';
import { toolbarDefaultConfig, } from '@blocksuite/blocks';
import { html } from 'lit';
import { AIItemGroups } from '../../_common/config.js';
export function setupFormatBarEntry(formatBar) {
    toolbarDefaultConfig(formatBar);
    formatBar.addRawConfigItems([
        {
            type: 'custom',
            render(formatBar) {
                return html ` <ask-ai-button
            .host=${formatBar.host}
            .actionGroups=${AIItemGroups}
            .toggleType=${'hover'}
          ></ask-ai-button>`;
            },
        },
        { type: 'divider' },
    ], 0);
}
//# sourceMappingURL=setup-format-bar.js.map