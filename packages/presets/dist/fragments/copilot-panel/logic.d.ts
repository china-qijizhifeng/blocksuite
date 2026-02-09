import type { EditorHost } from '@blocksuite/block-std';
import { AIChatLogic } from './chat/logic.js';
import { AIDocLogic } from './doc/logic.js';
import { AIEdgelessLogic } from './edgeless/logic.js';
export declare class AILogic {
    getHost: () => EditorHost;
    edgeless: AIEdgelessLogic;
    doc: AIDocLogic;
    chat: AIChatLogic;
    constructor(getHost: () => EditorHost);
}
//# sourceMappingURL=logic.d.ts.map