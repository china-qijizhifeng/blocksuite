import { assertExists } from '@blocksuite/global/utils';
export class PeekableController {
    constructor(target) {
        this.target = target;
        this.getRootService = () => {
            return this.target.std.spec.getService('affine:page');
        };
        this.peek = (template) => {
            return Promise.resolve(this.getRootService().peekViewService?.peek(this.target, template));
        };
    }
    get peekable() {
        return !!this.getRootService().peekViewService;
    }
}
const symbol = Symbol('peekable');
export const isPeekable = (e) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Reflect.has(e, symbol) && e[symbol]?.peekable;
};
export const peek = (e, template) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isPeekable(e) && e[symbol]?.peek(template);
};
/**
 * Mark a class as peekable, which means the class can be peeked by the peek view service.
 *
 * Note: This class must be syntactically below the `@customElement` decorator (it will be applied before customElement).
 */
export const Peekable = (options = {
    action: ['double-click', 'shift-click'],
}) => (Class, context) => {
    var _a;
    assertExists(context.kind === 'class');
    const actions = Array.isArray(options.action)
        ? options.action
        : options.action
            ? [options.action]
            : [];
    const derivedClass = class extends Class {
        constructor() {
            super(...arguments);
            this[_a] = new PeekableController(this);
        }
        static { _a = symbol; }
        connectedCallback() {
            super.connectedCallback();
            const target = (options.selector ? this.querySelector(options.selector) : this) ||
                this;
            if (actions.includes('double-click')) {
                this.disposables.addFromEvent(target, 'dblclick', e => {
                    if (this[symbol].peekable) {
                        e.stopPropagation();
                        this[symbol].peek().catch(console.error);
                    }
                });
            }
            if (actions.includes('shift-click')) {
                this.disposables.addFromEvent(target, 'click', e => {
                    if (e.shiftKey && this[symbol].peekable) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        this[symbol].peek().catch(console.error);
                    }
                });
            }
        }
    };
    return derivedClass;
};
const getSelectedPeekableBlocks = (cmd) => {
    const [result, ctx] = cmd.std.command
        .chain()
        .tryAll(chain => [chain.getTextSelection(), chain.getBlockSelections()])
        .getSelectedBlocks({ types: ['text', 'block'] })
        .run();
    return ((result ? ctx.selectedBlocks : []) || []).filter(isPeekable);
};
export const getSelectedPeekableBlocksCommand = (ctx, next) => {
    const selectedPeekableBlocks = getSelectedPeekableBlocks(ctx);
    if (selectedPeekableBlocks.length > 0) {
        next({ selectedPeekableBlocks });
    }
};
export const peekSelectedBlockCommand = (ctx, next) => {
    const peekableBlocks = getSelectedPeekableBlocks(ctx);
    // if there are multiple blocks, peek the first one
    const block = peekableBlocks.at(0);
    if (block) {
        peek(block);
        next();
    }
};
//# sourceMappingURL=peekable.js.map