import { LitElement, type PropertyValues } from 'lit';
import type { AffineEditorContainer } from '../../editors/editor-container.js';
import { OutlineNotice } from './body/outline-notice.js';
import { OutlinePanelBody } from './body/outline-panel-body.js';
import { OutlineNoteCard } from './card/outline-card.js';
import { OutlineBlockPreview } from './card/outline-preview.js';
import { OutlinePanelHeader } from './header/outline-panel-header.js';
import { OutlineNotePreviewSettingMenu } from './header/outline-setting-menu.js';
declare const OutlinePanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class OutlinePanel extends OutlinePanel_base {
    get doc(): import("@blocksuite/store").Doc;
    get host(): import("@blocksuite/block-std").EditorHost;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent | null;
    get mode(): import("@blocksuite/blocks").DocMode;
    static styles: import("lit").CSSResult;
    private accessor _showPreviewIcon;
    private accessor _enableNotesSorting;
    private accessor _noticeVisible;
    private _settings;
    private _editorDisposables;
    accessor editor: AffineEditorContainer;
    accessor fitPadding: number[];
    private _loadSettingsFromLocalStorage;
    private _saveSettingsToLocalStorage;
    private _updateAndSaveSettings;
    private _toggleShowPreviewIcon;
    private _toggleNotesSorting;
    private _setNoticeVisibility;
    private _clearEditorDisposables;
    private _setEditorDisposables;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'outline-panel': OutlinePanel;
    }
}
declare const componentsMap: {
    'outline-note-card': typeof OutlineNoteCard;
    'outline-block-preview': typeof OutlineBlockPreview;
    'outline-panel': typeof OutlinePanel;
    'outline-note-preview-setting-menu': typeof OutlineNotePreviewSettingMenu;
    'outline-panel-body': typeof OutlinePanelBody;
    'outline-panel-header': typeof OutlinePanelHeader;
    'outline-notice': typeof OutlineNotice;
};
export declare function registerOutlinePanelComponents(callback: (components: typeof componentsMap) => void): void;
export {};
//# sourceMappingURL=outline-panel.d.ts.map