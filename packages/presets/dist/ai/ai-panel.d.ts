import type { EditorHost } from '@blocksuite/block-std';
import { AffineAIPanelWidget, type AffineAIPanelWidgetConfig, type AIItemConfig } from '@blocksuite/blocks';
import type { TemplateResult } from 'lit';
export declare function buildTextResponseConfig<T extends keyof BlockSuitePresets.AIActions>(panel: AffineAIPanelWidget, id?: T): {
    name: string;
    items: AIItemConfig[];
}[];
export declare function buildErrorResponseConfig<T extends keyof BlockSuitePresets.AIActions>(panel: AffineAIPanelWidget, id?: T): {
    name: string;
    items: AIItemConfig[];
}[];
export declare function buildFinishConfig<T extends keyof BlockSuitePresets.AIActions>(panel: AffineAIPanelWidget, id?: T): {
    responses: {
        name: string;
        items: AIItemConfig[];
    }[];
    actions: never[];
};
export declare function buildErrorConfig<T extends keyof BlockSuitePresets.AIActions>(panel: AffineAIPanelWidget, id?: T): {
    upgrade: () => void;
    login: () => void;
    cancel: () => void;
    responses: {
        name: string;
        items: AIItemConfig[];
    }[];
};
export declare function buildGeneratingConfig(generatingIcon?: TemplateResult<1>): {
    generatingIcon: TemplateResult<1>;
};
export declare function buildCopyConfig(panel: AffineAIPanelWidget): {
    allowed: boolean;
    onCopy: () => Promise<boolean>;
};
export declare function buildAIPanelConfig(panel: AffineAIPanelWidget): AffineAIPanelWidgetConfig;
export declare const getAIPanel: (host: EditorHost) => AffineAIPanelWidget;
//# sourceMappingURL=ai-panel.d.ts.map