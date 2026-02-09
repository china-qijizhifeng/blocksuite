import { html } from 'lit';
import { getListInfo } from './get-list-info.js';
import { getNumberPrefix } from './get-number-prefix.js';
import { BulletIcons, checkboxChecked, checkboxUnchecked, toggleDown, toggleRight, } from './icons.js';
export function ListIcon(model, showChildren, onClick) {
    const { index, deep } = getListInfo(model);
    switch (model.type) {
        case 'bulleted':
            return html `<div
        contenteditable="false"
        class="affine-list-block__prefix"
        @click=${onClick}
      >
        ${BulletIcons[deep % BulletIcons.length]}
      </div>`;
        case 'numbered':
            return html `<div
        contenteditable="false"
        class="affine-list-block__prefix affine-list-block__numbered"
        @click=${onClick}
      >
        ${getNumberPrefix(index, deep)}
      </div>`;
        case 'todo':
            return html `<div
        contenteditable="false"
        class="affine-list-block__prefix affine-list-block__todo-prefix"
        @click=${onClick}
      >
        ${model.checked ? checkboxChecked() : checkboxUnchecked()}
      </div>`;
        case 'toggle':
            return html `<div
        contenteditable="false"
        class="affine-list-block__prefix"
        @click=${onClick}
      >
        ${showChildren ? toggleDown : toggleRight}
      </div>`;
        default:
            console.error('Unknown list type', model.type, model);
            return null;
    }
}
//# sourceMappingURL=get-list-icon.js.map