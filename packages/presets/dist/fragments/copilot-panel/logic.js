import { AIChatLogic } from './chat/logic.js';
import { AIDocLogic } from './doc/logic.js';
import { AIEdgelessLogic } from './edgeless/logic.js';
export class AILogic {
    constructor(getHost) {
        this.getHost = getHost;
        this.edgeless = new AIEdgelessLogic(this.getHost);
        this.doc = new AIDocLogic(this.getHost);
        this.chat = new AIChatLogic(this, this.getHost);
    }
}
//# sourceMappingURL=logic.js.map