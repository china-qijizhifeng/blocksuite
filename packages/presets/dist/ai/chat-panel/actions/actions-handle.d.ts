import type { BlockSelection, EditorHost, TextSelection } from '@blocksuite/block-std';
import type { ImageSelection } from '@blocksuite/blocks';
export declare const PageEditorActions: ({
    icon: import("lit").TemplateResult<1>;
    title: string;
    handler: (host: EditorHost, content: string, currentTextSelection?: TextSelection, currentBlockSelections?: BlockSelection[], currentImageSelections?: ImageSelection[]) => Promise<void>;
} | {
    icon: import("lit").TemplateResult<1>;
    title: string;
    handler: (host: EditorHost, content: string) => void;
})[];
export declare const EdgelessEditorActions: {
    icon: import("lit").TemplateResult<1>;
    title: string;
    handler: (host: EditorHost, content: string, currentTextSelection?: TextSelection, currentBlockSelections?: BlockSelection[], currentImageSelections?: ImageSelection[]) => Promise<void>;
}[];
//# sourceMappingURL=actions-handle.d.ts.map