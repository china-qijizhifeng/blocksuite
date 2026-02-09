import type { EditorHost } from '@blocksuite/block-std';
import type { DocMeta } from '@blocksuite/store';
import type { TemplateResult } from 'lit';
import type { AffineInlineEditor } from '../../../_common/inline/presets/affine-inline-specs.js';
export type LinkedDocOptions = {
    triggerKeys: string[];
    ignoreBlockTypes: BlockSuite.Flavour[];
    convertTriggerKey: boolean;
    getMenus: (ctx: {
        editorHost: EditorHost;
        query: string;
        inlineEditor: AffineInlineEditor;
        docMetas: DocMeta[];
    }) => LinkedDocGroup[];
};
export type LinkedDocItem = {
    key: string;
    name: string;
    icon: TemplateResult<1>;
    action: () => Promise<void> | void;
};
export type LinkedDocGroup = {
    name: string;
    styles?: string;
    items: LinkedDocItem[];
};
export declare function insertLinkedNode({ inlineEditor, docId, }: {
    inlineEditor: AffineInlineEditor;
    docId: string;
}): void;
export declare const getMenus: (ctx: {
    editorHost: EditorHost;
    query: string;
    inlineEditor: AffineInlineEditor;
    docMetas: DocMeta[];
}) => LinkedDocGroup[];
//# sourceMappingURL=config.d.ts.map