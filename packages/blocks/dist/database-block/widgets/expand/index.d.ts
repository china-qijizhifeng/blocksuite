import type { EventName, UIEventHandler } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { Disposable } from '@blocksuite/global/utils';
import { Slot } from '@blocksuite/global/utils';
import type { PropertyValues } from 'lit';
import type { DataViewSelection } from '../../data-view/types.js';
import { WidgetBase } from '../../data-view/widget/widget-base.js';
import type { DatabaseBlockComponent } from '../../database-block.js';
export declare function showDatabasePreviewModal(database: DatabaseBlockComponent): void;
export declare class ExpandDatabaseBlockModal extends WidgetBase {
    get database(): DatabaseBlockComponent | null;
    protected render(): unknown;
    expandDatabase: () => void;
}
declare const DatabaseBlockModalPreview_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseBlockModalPreview extends DatabaseBlockModalPreview_base {
    static styles: import("lit").CSSResult;
    blockId: string;
    accessor database: DatabaseBlockComponent;
    selectionUpdated: Slot<DataViewSelection | undefined>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): unknown;
    connectedCallback(): void;
    setSelection: (selection?: DataViewSelection) => void;
    bindHotkey: (hotkeys: Record<string, UIEventHandler>) => Disposable;
    handleEvent: (name: EventName, handler: UIEventHandler) => Disposable;
}
export {};
//# sourceMappingURL=index.d.ts.map