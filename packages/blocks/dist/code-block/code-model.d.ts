import { type SchemaToModel } from '@blocksuite/store';
import type { BundledLanguage, Highlighter, PlainTextLanguage } from 'shiki';
export declare const CodeBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<{
            text: import("@blocksuite/store").Text;
            language: string;
            wrap: boolean;
            caption: string;
        }>;
        flavour: "affine:code";
    } & {
        version: number;
        role: "content";
        parent: string[];
        children: never[];
    };
    onUpgrade?: ((data: {
        text: import("@blocksuite/store").Text;
        language: string;
        wrap: boolean;
        caption: string;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<{
        text: import("@blocksuite/store").Text;
        language: string;
        wrap: boolean;
        caption: string;
    }>) | undefined;
};
export type CodeBlockModel = SchemaToModel<typeof CodeBlockSchema>;
export type HighlightOptionsGetter = () => {
    lang: BundledLanguage | PlainTextLanguage;
    highlighter: Highlighter | null;
};
//# sourceMappingURL=code-model.d.ts.map