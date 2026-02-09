import { Slot } from '@blocksuite/store';
import type { Viewport } from '../../_common/utils/index.js';
import { RootService } from '../root-service.js';
export declare class PageRootService extends RootService {
    slots: {
        docLinkClicked: Slot<{
            docId: string;
            blockId?: string | undefined;
        }>;
        tagClicked: Slot<{
            tagId: string;
        }>;
        viewportUpdated: Slot<Viewport>;
    };
}
//# sourceMappingURL=page-root-service.d.ts.map