import './components/image-toolbar.js';
import { WidgetElement } from '@blocksuite/block-std';
import type { ImageBlockComponent } from '../../../image-block/image-block.js';
import type { ImageBlockModel } from '../../../image-block/index.js';
import type { ImageConfigItem, MoreMenuConfigItem } from './type.js';
export declare const AFFINE_IMAGE_TOOLBAR_WIDGET = "affine-image-toolbar-widget";
export declare class AffineImageToolbarWidget extends WidgetElement<ImageBlockModel, ImageBlockComponent> {
    private _hoverController;
    private _isActivated;
    config: ImageConfigItem[];
    moreMenuConfig: MoreMenuConfigItem[];
    private _setHoverController;
    clearConfig: () => this;
    addConfigItems: (item: ImageConfigItem[], index?: number) => this;
    addMoreMenuItems: (item: MoreMenuConfigItem[], index?: number) => this;
    buildDefaultConfig: () => this;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_IMAGE_TOOLBAR_WIDGET]: AffineImageToolbarWidget;
    }
}
//# sourceMappingURL=index.d.ts.map