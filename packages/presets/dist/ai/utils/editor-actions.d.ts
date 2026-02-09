import type { BlockElement, EditorHost, TextSelection } from '@blocksuite/block-std';
import type { AffineAIPanelWidget } from '@blocksuite/blocks';
import { type BlockModel } from '@blocksuite/store';
export declare const insert: (host: EditorHost, content: string, selectBlock: BlockElement, below?: boolean) => Promise<void>;
export declare const insertBelow: (host: EditorHost, content: string, selectBlock: BlockElement) => Promise<void>;
export declare const insertAbove: (host: EditorHost, content: string, selectBlock: BlockElement) => Promise<void>;
export declare const replace: (host: EditorHost, content: string, firstBlock: BlockElement, selectedModels: BlockModel[], textSelection?: TextSelection) => Promise<void>;
export declare const copyTextAnswer: (panel: AffineAIPanelWidget) => Promise<boolean>;
export declare const copyText: (host: EditorHost, text: string) => Promise<boolean>;
//# sourceMappingURL=editor-actions.d.ts.map