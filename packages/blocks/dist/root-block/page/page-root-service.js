import { Slot } from '@blocksuite/store';
import { RootService } from '../root-service.js';
export class PageRootService extends RootService {
    constructor() {
        super(...arguments);
        this.slots = {
            docLinkClicked: new Slot(),
            tagClicked: new Slot(),
            viewportUpdated: new Slot(),
        };
    }
}
//# sourceMappingURL=page-root-service.js.map