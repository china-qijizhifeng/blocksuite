import type { EditorHost } from '@blocksuite/block-std';
import { type TemplateImage } from './template.js';
export declare const PPTBuilder: (host: EditorHost) => {
    process: (text: string) => Promise<{
        contents: unknown[];
        images: TemplateImage[][];
    }>;
    done: (text: string) => Promise<void>;
};
//# sourceMappingURL=index.d.ts.map