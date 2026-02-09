import { BlockService } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
export class MindmapService extends BlockService {
    constructor() {
        super(...arguments);
        this.requestCenter = new Slot();
    }
    mounted() { }
    center() {
        this.requestCenter.emit();
    }
}
//# sourceMappingURL=service.js.map