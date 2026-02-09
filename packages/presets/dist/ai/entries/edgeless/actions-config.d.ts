import { type AIItemGroupConfig } from '@blocksuite/blocks';
export declare const imageFilterSubItem: {
    type: "Clay style" | "Sketch style" | "Anime style" | "Pixel style";
    handler: (host: import("@blocksuite/block-std").EditorHost) => void;
}[];
export declare const imageProcessingSubItem: {
    type: "Clearer" | "Remove background" | "Convert to sticker";
    handler: (host: import("@blocksuite/block-std").EditorHost) => void;
}[];
export declare const edgelessActionGroups: AIItemGroupConfig[];
//# sourceMappingURL=actions-config.d.ts.map