import type { Doc } from '@blocksuite/store';
import type { TemplateResult } from 'lit';
import type { AffineReference } from './reference-node.js';
export declare class ReferenceNodeConfig {
    private _customIcon;
    private _customTitle;
    private _customContent;
    private _Doc;
    private _interactable;
    get customIcon(): ((reference: AffineReference) => TemplateResult) | null;
    get customTitle(): ((reference: AffineReference) => string) | null;
    get doc(): Doc | null;
    get customContent(): ((reference: AffineReference) => TemplateResult) | null;
    get interactable(): boolean;
    setInteractable(interactable: boolean): void;
    setCustomContent(content: ReferenceNodeConfig['_customContent']): void;
    setCustomIcon(icon: ReferenceNodeConfig['_customIcon']): void;
    setCustomTitle(title: ReferenceNodeConfig['_customTitle']): void;
    setDoc(doc: Doc | null): void;
}
//# sourceMappingURL=reference-config.d.ts.map