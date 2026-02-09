import type { EditorHost } from '@blocksuite/block-std';
import { type AIItemGroupConfig, type AISubItemConfig } from '@blocksuite/blocks';
export declare const translateSubItem: AISubItemConfig[];
export declare const toneSubItem: AISubItemConfig[];
export declare function createImageFilterSubItem(trackerOptions?: BlockSuitePresets.TrackerOptions): {
    type: "Clay style" | "Sketch style" | "Anime style" | "Pixel style";
    handler: (host: EditorHost) => void;
}[];
export declare function createImageProcessingSubItem(trackerOptions?: BlockSuitePresets.TrackerOptions): {
    type: "Clearer" | "Remove background" | "Convert to sticker";
    handler: (host: EditorHost) => void;
}[];
export declare const AIItemGroups: AIItemGroupConfig[];
export declare function buildAIImageItemGroups(): AIItemGroupConfig[];
export declare function buildAICodeItemGroups(): AIItemGroupConfig[];
//# sourceMappingURL=config.d.ts.map