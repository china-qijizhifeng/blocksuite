import { html } from 'lit';
export const duplicateCodeBlock = (model) => {
    const keys = model.keys;
    const values = keys.map(key => model[key]);
    const blockProps = Object.fromEntries(keys.map((key, i) => [key, values[i]]));
    const { text, ...duplicateProps } = blockProps;
    const newProps = {
        flavour: model.flavour,
        text: model.text.clone(),
        ...duplicateProps,
    };
    return model.doc.addSiblingBlocks(model, [newProps])[0];
};
export function CodeToolbarItemRenderer(items, codeBlock, onClick) {
    return items
        .filter(item => item.showWhen(codeBlock))
        .map(item => {
        switch (item.type) {
            case 'action':
                return html `
            <icon-button
              class="code-toolbar-button ${item.name}"
              data-testid=${item.name}
              size="24px"
              @click=${() => item.action(codeBlock, onClick)}
            >
              ${item.icon}
              <affine-tooltip tip-position="top" .offset=${5}
                >${item.tooltip}</affine-tooltip
              >
            </icon-button>
          `;
            case 'custom':
                return item.render(codeBlock, onClick);
            default:
                return null;
        }
    })
        .filter(item => item !== null);
}
export function MoreMenuRenderer(blockElement, abortController, config) {
    return config
        .filter(item => {
        return item.type === 'divider' || item.showWhen(blockElement);
    })
        .map(item => {
        let template = null;
        switch (item.type) {
            case 'more': {
                const moreItem = item;
                const name = moreItem.name instanceof Function
                    ? moreItem.name(blockElement)
                    : moreItem.name;
                const icon = moreItem.icon instanceof Function
                    ? moreItem.icon(blockElement)
                    : moreItem.icon;
                const buttonClass = `menu-item ${name.toLocaleLowerCase().split(' ').join('-')}`;
                template = html `<div class=${buttonClass}>
            <icon-button
              width="183px"
              height="30px"
              text=${name}
              @click=${(e) => {
                    e.stopPropagation();
                    moreItem.action(blockElement, abortController);
                }}
            >
              ${icon}
            </icon-button>
          </div>`;
                break;
            }
            case 'divider': {
                template = html `<div class="divider"></div>`;
                break;
            }
            default:
                template = null;
        }
        return template;
    })
        .filter((template) => template !== null)
        .map(template => template);
}
//# sourceMappingURL=utils.js.map