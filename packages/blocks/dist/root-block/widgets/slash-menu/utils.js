import { assertType } from '@blocksuite/global/utils';
import { isInsideBlockByFlavour } from '../../../_common/utils/index.js';
import { getInlineEditorByModel } from '../../../_common/utils/query.js';
import { slashMenuToolTips } from './tooltips/index.js';
export function isGroupDivider(item) {
    return 'groupName' in item;
}
export function notGroupDivider(item) {
    return !isGroupDivider(item);
}
export function isActionItem(item) {
    return 'action' in item;
}
export function isSubMenuItem(item) {
    return 'subMenu' in item;
}
export function isMenuItemGenerator(item) {
    return typeof item === 'function';
}
export function slashItemClassName(item) {
    const name = isGroupDivider(item) ? item.groupName : item.name;
    return name.split(' ').join('-').toLocaleLowerCase();
}
export function filterEnabledSlashMenuItems(items, context) {
    const result = items
        .map(item => (isMenuItemGenerator(item) ? item(context) : item))
        .flat()
        .filter(item => (item.showWhen ? item.showWhen(context) : true))
        .map(item => {
        if (isSubMenuItem(item)) {
            return {
                ...item,
                subMenu: filterEnabledSlashMenuItems(item.subMenu, context),
            };
        }
        else {
            return { ...item };
        }
    });
    return result;
}
export function getFirstNotDividerItem(items) {
    const firstItem = items.find(item => !isGroupDivider(item));
    assertType(firstItem);
    return firstItem ?? null;
}
export function insertContent(editorHost, model, text, attributes) {
    if (!model.text) {
        throw new Error("Can't insert text! Text not found");
    }
    const inlineEditor = getInlineEditorByModel(editorHost, model);
    if (!inlineEditor) {
        throw new Error("Can't insert text! Inline editor not found");
    }
    const inlineRange = inlineEditor.getInlineRange();
    const index = inlineRange ? inlineRange.index : model.text.length;
    model.text.insert(text, index, attributes);
    // Update the caret to the end of the inserted text
    inlineEditor.setInlineRange({
        index: index + text.length,
        length: 0,
    });
}
export function formatDate(date) {
    // yyyy-mm-dd
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const strTime = `${year}-${month}-${day}`;
    return strTime;
}
export function formatTime(date) {
    // mm-dd hh:mm
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const strTime = `${month}-${day} ${hours}:${minutes}`;
    return strTime;
}
export function insideDatabase(model) {
    return isInsideBlockByFlavour(model.doc, model, 'affine:database');
}
export function insideEdgelessText(model) {
    return isInsideBlockByFlavour(model.doc, model, 'affine:edgeless-text');
}
export function createDatabaseBlockInNextLine(model) {
    let parent = model.doc.getParent(model);
    while (parent && parent.flavour !== 'affine:note') {
        model = parent;
        parent = model.doc.getParent(parent);
    }
    if (!parent) {
        return;
    }
    const index = parent.children.indexOf(model);
    return model.doc.addBlock('affine:database', {}, parent, index + 1);
}
export function tryRemoveEmptyLine(model) {
    if (!model.text?.length) {
        model.doc.deleteBlock(model);
    }
}
export function createConversionItem(config) {
    const { name, description, icon, flavour, type } = config;
    return {
        name,
        description,
        icon,
        tooltip: slashMenuToolTips[name],
        showWhen: ({ model }) => model.doc.schema.flavourSchemaMap.has(flavour),
        action: ({ rootElement }) => {
            rootElement.host.std.command
                .chain()
                .updateBlockType({
                flavour,
                props: { type },
            })
                .inline((ctx, next) => (ctx.updatedBlocks ? next() : false))
                .run();
        },
    };
}
//# sourceMappingURL=utils.js.map