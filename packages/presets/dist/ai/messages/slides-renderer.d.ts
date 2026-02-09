import type { EditorHost } from '@blocksuite/block-std';
import { type AffineAIPanelWidgetConfig } from '@blocksuite/blocks';
import { LitElement } from 'lit';
export declare const createSlidesRenderer: (host: EditorHost, ctx: {
    get: () => Record<string, unknown>;
    set: (data: Record<string, unknown>) => void;
}) => AffineAIPanelWidgetConfig['answerRenderer'];
declare const AISlidesRenderer_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AISlidesRenderer extends AISlidesRenderer_base {
    static styles: import("lit").CSSResult;
    private _editorContainer;
    private _doc;
    private accessor _editorHost;
    accessor text: string;
    accessor host: EditorHost;
    accessor ctx: {
        get(): Record<string, unknown>;
        set(data: Record<string, unknown>): void;
    } | undefined;
    protected firstUpdated(): void;
    protected render(): import("lit").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-slides-renderer': AISlidesRenderer;
    }
}
export {};
//# sourceMappingURL=slides-renderer.d.ts.map