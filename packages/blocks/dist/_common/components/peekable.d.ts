import type { BlockElement, BlockStdScope, Command, DisposableClass } from '@blocksuite/block-std';
import { type Constructor } from '@blocksuite/global/utils';
import type { LitElement, TemplateResult } from 'lit';
export declare class PeekableController {
    private target;
    constructor(target: LitElement & {
        std: BlockStdScope;
    });
    private getRootService;
    get peekable(): boolean;
    peek: (template?: TemplateResult) => Promise<void>;
}
export interface PeekViewService {
    /**
     * Peek a target element page ref info
     * @param pageRef The page ref info to peek.
     * @returns A promise that resolves when the peek view is closed.
     */
    peek(pageRef: {
        docId: string;
        blockId?: string;
    }): Promise<void>;
    /**
     * Peek a target element with a optional template
     * @param target The target element to peek. There are two use cases:
     * 1. If the template is not given, peek view content rendering will be delegated to the implementation of peek view service.
     * 2. To determine the origin of the peek view modal animation
     * @param template Optional template to render in the peek view modal. If not given, the peek view service will render the content.
     * @returns A promise that resolves when the peek view is closed.
     */
    peek(target: HTMLElement, template?: TemplateResult): Promise<void>;
    /**
     * Peek a target element with a optional template
     * @param target The target element to peek. There are two use cases:
     * 1. If the template is not given, peek view content rendering will be delegated to the implementation of peek view service.
     * 2. To determine the origin of the peek view modal animation
     * @param template Optional template to render in the peek view modal. If not given, the peek view service will render the content.
     * @returns A promise that resolves when the peek view is closed.
     */
    peek<Element extends BlockElement>(target: Element, template?: TemplateResult): Promise<void>;
}
type PeekableAction = 'double-click' | 'shift-click';
type PeekableOptions = {
    /**
     * Action to bind to the peekable element. default to ['double-click', 'shift-click']
     * false means do not bind any action.
     */
    action: PeekableAction | PeekableAction[] | false;
    /**
     * Selector inside of the peekable element to bind the action
     */
    selector?: string;
};
type PeekableClass = Constructor<{
    std: BlockStdScope;
} & DisposableClass & LitElement>;
export declare const isPeekable: <Element extends LitElement>(e: Element) => boolean;
export declare const peek: <Element extends LitElement>(e: Element, template?: TemplateResult) => void;
/**
 * Mark a class as peekable, which means the class can be peeked by the peek view service.
 *
 * Note: This class must be syntactically below the `@customElement` decorator (it will be applied before customElement).
 */
export declare const Peekable: <C extends PeekableClass>(options?: PeekableOptions) => (Class: C, context: ClassDecoratorContext) => C;
export declare const getSelectedPeekableBlocksCommand: Command<'selectedBlocks', 'selectedPeekableBlocks'>;
export declare const peekSelectedBlockCommand: Command<'selectedBlocks'>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            selectedPeekableBlocks?: BlockElement[];
        }
        interface Commands {
            peekSelectedBlock: typeof peekSelectedBlockCommand;
            getSelectedPeekableBlocks: typeof getSelectedPeekableBlocksCommand;
        }
    }
}
export {};
//# sourceMappingURL=peekable.d.ts.map