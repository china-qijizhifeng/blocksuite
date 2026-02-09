import './header/frame-panel-header.js';
import './body/frame-panel-body.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type PropertyValues } from 'lit';
import type { AffineEditorContainer } from '../../index.js';
import { FramePanelBody } from './body/frame-panel-body.js';
import { FrameCard } from './card/frame-card.js';
import { FrameCardTitle } from './card/frame-card-title.js';
import { FrameCardTitleEditor } from './card/frame-card-title-editor.js';
import { FramePanelHeader } from './header/frame-panel-header.js';
import { FramesSettingMenu } from './header/frames-setting-menu.js';
declare const FramePanel_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FramePanel extends FramePanel_base {
    get doc(): import("@blocksuite/store").Doc;
    get host(): import("@blocksuite/block-std").EditorHost;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent | null;
    static styles: import("lit").CSSResult;
    private _editorDisposables;
    accessor editor: AffineEditorContainer;
    accessor fitPadding: number[];
    private _clearEditorDisposables;
    private _setEditorDisposables;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-panel': FramePanel;
    }
}
declare const componentsMap: {
    'frame-panel': typeof FramePanel;
    'frame-panel-header': typeof FramePanelHeader;
    'frame-panel-body': typeof FramePanelBody;
    'frames-setting-menu': typeof FramesSettingMenu;
    'frame-card': typeof FrameCard;
    'frame-card-title': typeof FrameCardTitle;
    'frame-card-title-editor': typeof FrameCardTitleEditor;
};
export declare function registerFramePanelComponents(callback: (components: typeof componentsMap) => void): void;
export {};
//# sourceMappingURL=frame-panel.d.ts.map