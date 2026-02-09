import { baseTextAttributes, getDefaultAttributeRenderer, KEYBOARD_ALLOW_DEFAULT, } from '@blocksuite/inline';
import { z } from 'zod';
export class InlineManager {
    constructor() {
        this._specs = [];
        this._markdownMatches = [];
        this.markdownShortcutHandler = (context, undoManager) => {
            const { inlineEditor, prefixText, inlineRange } = context;
            for (const match of this._markdownMatches) {
                const matchedText = prefixText.match(match.pattern);
                if (matchedText) {
                    return match.action({
                        inlineEditor,
                        prefixText,
                        inlineRange,
                        pattern: match.pattern,
                        undoManager,
                    });
                }
            }
            return KEYBOARD_ALLOW_DEFAULT;
        };
        this.embedChecker = (delta) => {
            for (const spec of this._specs) {
                if (spec.embed && spec.match(delta)) {
                    return true;
                }
            }
            return false;
        };
    }
    get specs() {
        return this._specs;
    }
    get markdownMatches() {
        return this._markdownMatches;
    }
    registerSpecs(specs) {
        this._specs = specs;
    }
    registerMarkdownMatches(markdownMatches) {
        this._markdownMatches = markdownMatches;
    }
    getRenderer() {
        const defaultRenderer = getDefaultAttributeRenderer();
        const renderer = (delta, selected) => {
            // Priority increases from front to back
            for (const spec of this._specs.toReversed()) {
                if (spec.match(delta)) {
                    return spec.renderer(delta, selected);
                }
            }
            return defaultRenderer(delta, selected);
        };
        return renderer;
    }
    getSchema() {
        const defaultSchema = baseTextAttributes;
        const schema = this._specs.reduce((acc, cur) => {
            const currentSchema = z.object({
                [cur.name]: cur.schema,
            });
            return acc.merge(currentSchema);
        }, defaultSchema);
        return schema;
    }
}
//# sourceMappingURL=inline-manager.js.map