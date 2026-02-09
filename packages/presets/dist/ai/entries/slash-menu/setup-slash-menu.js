import { AFFINE_AI_PANEL_WIDGET, AffineSlashMenuWidget, AIStarIcon, MoreHorizontalIcon, } from '@blocksuite/blocks';
import { assertExists } from '@blocksuite/global/utils';
import { html } from 'lit';
import { AIItemGroups } from '../../_common/config.js';
import { handleInlineAskAIAction } from '../../actions/doc-handler.js';
import { AIProvider } from '../../provider.js';
export function setupSlashMenuEntry(slashMenu) {
    const AIItems = AIItemGroups.map(group => group.items).flat();
    const iconWrapper = (icon) => {
        return html `<div style="color: var(--affine-primary-color)">
      ${typeof icon === 'function' ? html `${icon()}` : icon}
    </div>`;
    };
    const showWhenWrapper = (item) => ({ rootElement }) => {
        const affineAIPanelWidget = rootElement.host.view.getWidget(AFFINE_AI_PANEL_WIDGET, rootElement.model.id);
        if (affineAIPanelWidget === null)
            return false;
        const chain = rootElement.host.command.chain();
        const editorMode = rootElement.service.docModeService.getMode(rootElement.doc.id);
        return item?.showWhen?.(chain, editorMode, rootElement.host) ?? true;
    };
    const actionItemWrapper = (item) => ({
        ...basicItemConfig(item),
        action: ({ rootElement }) => {
            item?.handler?.(rootElement.host);
        },
    });
    const subMenuWrapper = (item) => {
        assertExists(item.subItem);
        return {
            ...basicItemConfig(item),
            subMenu: item.subItem.map(({ type, handler }) => ({
                name: type,
                action: ({ rootElement }) => handler?.(rootElement.host),
            })),
        };
    };
    const basicItemConfig = (item) => {
        return {
            name: item.name,
            icon: iconWrapper(item.icon),
            alias: ['ai'],
            showWhen: showWhenWrapper(item),
        };
    };
    const AIMenuItems = [
        { groupName: 'AFFiNE AI' },
        {
            name: 'Ask AI',
            icon: AIStarIcon,
            showWhen: showWhenWrapper(),
            action: ({ rootElement }) => {
                const view = rootElement.host.view;
                const affineAIPanelWidget = view.getWidget(AFFINE_AI_PANEL_WIDGET, rootElement.model.id);
                assertExists(affineAIPanelWidget);
                assertExists(AIProvider.actions.chat);
                assertExists(affineAIPanelWidget.host);
                handleInlineAskAIAction(affineAIPanelWidget.host);
            },
        },
        ...AIItems.filter(({ name }) => ['Fix spelling', 'Fix grammar'].includes(name)).map(item => ({
            ...actionItemWrapper(item),
            name: `${item.name} from above`,
        })),
        ...AIItems.filter(({ name }) => ['Summarize', 'Continue writing'].includes(name)).map(actionItemWrapper),
        {
            name: 'Action with above',
            icon: iconWrapper(MoreHorizontalIcon),
            subMenu: [
                { groupName: 'Action with above' },
                ...AIItems.filter(({ name }) => ['Translate to', 'Change tone to'].includes(name)).map(subMenuWrapper),
                ...AIItems.filter(({ name }) => [
                    'Improve writing',
                    'Make it longer',
                    'Make it shorter',
                    'Generate outline',
                    'Find actions',
                ].includes(name)).map(actionItemWrapper),
            ],
        },
    ];
    const menu = slashMenu.config.items.slice();
    menu.unshift(...AIMenuItems);
    slashMenu.config = {
        ...AffineSlashMenuWidget.DEFAULT_CONFIG,
        items: menu,
    };
}
//# sourceMappingURL=setup-slash-menu.js.map