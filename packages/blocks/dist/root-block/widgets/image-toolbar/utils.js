import '../../../_common/components/button.js';
import '../../../_common/components/tooltip/tooltip.js';
import { assertExists } from '@blocksuite/global/utils';
import { html } from 'lit';
import { getBlockProps } from '../../../_common/utils/block-props.js';
import { isInsidePageEditor } from '../../../_common/utils/query.js';
export function ConfigRenderer(blockElement, abortController, config, onClick) {
    return config
        .filter(item => {
        return item.showWhen(blockElement);
    })
        .map(item => {
        let template = null;
        switch (item.type) {
            case 'common': {
                const defaultItem = item;
                const buttonClass = `image-toolbar-button ${defaultItem.name.toLocaleLowerCase()}`;
                template = html `<div class=${buttonClass}>
            <icon-button
              size="24px"
              @click=${() => defaultItem.action(blockElement, abortController)}
            >
              ${defaultItem.icon}
              <affine-tooltip>${defaultItem.tooltip}</affine-tooltip>
            </icon-button>
          </div>`;
                break;
            }
            case 'custom': {
                const customItem = item;
                template = customItem.render(blockElement, onClick);
                break;
            }
            default:
                template = null;
        }
        return [template];
    })
        .filter(([template]) => template !== null && template !== undefined)
        .map(([template]) => template);
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
                const buttonClass = `menu-item ${moreItem.name.toLocaleLowerCase()}`;
                template = html `<div class=${buttonClass}>
            <icon-button
              width="183px"
              height="30px"
              text=${moreItem.name}
              @click=${(e) => {
                    e.stopPropagation();
                    moreItem.action(blockElement, abortController);
                }}
            >
              ${moreItem.icon}
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
export function duplicate(blockElement, abortController) {
    const model = blockElement.model;
    const blockProps = getBlockProps(model);
    const { width, height, xywh, rotate, zIndex, ...duplicateProps } = blockProps;
    const { doc } = model;
    const parent = doc.getParent(model);
    assertExists(parent, 'Parent not found');
    const index = parent?.children.indexOf(model);
    const duplicateId = doc.addBlock(model.flavour, duplicateProps, parent, index + 1);
    abortController?.abort();
    const editorHost = blockElement.host;
    editorHost.updateComplete
        .then(() => {
        const { selection } = editorHost;
        selection.setGroup('note', [
            selection.create('block', {
                blockId: duplicateId,
            }),
        ]);
        if (isInsidePageEditor(editorHost)) {
            const duplicateElement = editorHost.view.getBlock(duplicateId);
            if (duplicateElement) {
                duplicateElement.scrollIntoView(true);
            }
        }
    })
        .catch(console.error);
}
//# sourceMappingURL=utils.js.map