import '../../_common/components/ask-ai-button.js';
import { html } from 'lit';
const AICodeItemGroups = buildAICodeItemGroups();
const buttonOptions = {
    size: 'small',
    panelWidth: 240,
};
import { buildAICodeItemGroups } from '../../_common/config.js';
import { AIStarIcon } from '../../_common/icons.js';
export function setupCodeToolbarEntry(codeToolbar) {
    const onAskAIClick = () => {
        const { host } = codeToolbar;
        const { selection } = host;
        const imageBlock = codeToolbar.blockElement;
        selection.setGroup('note', [
            selection.create('block', { blockId: imageBlock.blockId }),
        ]);
    };
    codeToolbar.setupDefaultConfig();
    codeToolbar.addItems([
        {
            type: 'custom',
            name: 'Ask AI',
            tooltip: 'Ask AI',
            icon: AIStarIcon,
            showWhen: () => true,
            render(codeBlock, onClick) {
                return html `<ask-ai-button
            class="code-toolbar-button ask-ai"
            .host=${codeBlock.host}
            .actionGroups=${AICodeItemGroups}
            .toggleType=${'click'}
            .options=${buttonOptions}
            @click=${(e) => {
                    e.stopPropagation();
                    onAskAIClick();
                    onClick?.();
                }}
          ></ask-ai-button>`;
            },
        },
    ], 0);
}
//# sourceMappingURL=setup-code-toolbar.js.map