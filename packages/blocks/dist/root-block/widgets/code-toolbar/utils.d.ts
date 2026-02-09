import { type TemplateResult } from 'lit';
import type { CodeBlockComponent, CodeBlockModel } from '../../../code-block/index.js';
import type { CodeToolbarItem, CodeToolbarMoreItem } from './types.js';
export declare const duplicateCodeBlock: (model: CodeBlockModel) => string;
export declare function CodeToolbarItemRenderer(items: CodeToolbarItem[], codeBlock: CodeBlockComponent, onClick?: () => void): (TemplateResult | null)[];
export declare function MoreMenuRenderer(blockElement: CodeBlockComponent, abortController: AbortController, config: CodeToolbarMoreItem[]): TemplateResult[];
//# sourceMappingURL=utils.d.ts.map