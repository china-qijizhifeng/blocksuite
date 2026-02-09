import { type EditorHost } from '@blocksuite/block-std';
import { type Doc } from '@blocksuite/store';
import { LitElement } from 'lit';
import type { MindmapElementModel } from '../element-model/mindmap.js';
import { MindmapStyle } from '../element-model/utils/mindmap/style.js';
import type { SurfaceBlockModel } from '../surface-model.js';
declare const MiniMindmapPreview_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class MiniMindmapPreview extends MiniMindmapPreview_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor answer: string;
    accessor templateShow: boolean;
    accessor height: number;
    accessor ctx: {
        get(): Record<string, unknown>;
        set(data: Record<string, unknown>): void;
    };
    accessor mindmapStyle: MindmapStyle | undefined;
    accessor portalHost: EditorHost;
    doc: Doc;
    surface: SurfaceBlockModel;
    mindmapId: string;
    get _mindmap(): MindmapElementModel;
    private _createTemporaryDoc;
    private _toMindmapNode;
    private _switchStyle;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
type Node = {
    text: string;
    children: Node[];
};
export declare const markdownToMindmap: (answer: string, doc: Doc) => Node | null;
export {};
//# sourceMappingURL=mindmap-preview.d.ts.map