import '../../../_common/components/button.js';
import '../../../_common/components/tooltip/tooltip.js';
import { type TemplateResult } from 'lit';
import type { ImageBlockComponent } from '../../../image-block/image-block.js';
import type { ImageConfigItem, MoreMenuConfigItem } from './type.js';
export declare function ConfigRenderer(blockElement: ImageBlockComponent, abortController: AbortController, config: ImageConfigItem[], onClick?: () => void): (TemplateResult | null)[];
export declare function MoreMenuRenderer(blockElement: ImageBlockComponent, abortController: AbortController, config: MoreMenuConfigItem[]): TemplateResult[];
export declare function duplicate(blockElement: ImageBlockComponent, abortController?: AbortController): void;
//# sourceMappingURL=utils.d.ts.map