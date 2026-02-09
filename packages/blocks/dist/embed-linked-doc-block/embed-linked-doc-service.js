import { BlockService } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
import { insertLinkByQuickSearchCommand } from './commands/insert-link-by-quick-search.js';
export class EmbedLinkedDocBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.slots = {
            linkedDocCreated: new Slot(),
        };
    }
    mounted() {
        super.mounted();
        this.std.command.add('insertLinkByQuickSearch', insertLinkByQuickSearchCommand);
    }
}
//# sourceMappingURL=embed-linked-doc-service.js.map