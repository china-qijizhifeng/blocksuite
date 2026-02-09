import '../../../_common/components/button.js';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AffineInlineEditor } from '../../../_common/inline/presets/affine-inline-specs.js';
import type { LinkedDocOptions } from './config.js';
declare const LinkedDocPopover_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class LinkedDocPopover extends LinkedDocPopover_base {
    private editorHost;
    private inlineEditor;
    private abortController;
    private get _flattenActionList();
    private get _doc();
    static styles: import("lit").CSSResult;
    private accessor _position;
    private accessor _query;
    private accessor _activatedItemIndex;
    private _actionGroup;
    accessor options: LinkedDocOptions;
    accessor triggerKey: string;
    accessor linkedDocElement: Element | null;
    constructor(editorHost: EditorHost, inlineEditor: AffineInlineEditor, abortController?: AbortController);
    private _updateActionList;
    connectedCallback(): void;
    updatePosition(position: {
        height: number;
        x: string;
        y: string;
    }): void;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=linked-doc-popover.d.ts.map