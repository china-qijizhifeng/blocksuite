import type { Disposable } from '@blocksuite/global/utils';
import type { DocMode } from '../types.js';
export interface DocModeService {
    setMode: (mode: DocMode, docId?: string) => void;
    getMode: (docId?: string) => DocMode;
    toggleMode: (docId?: string) => DocMode;
    onModeChange: (handler: (mode: DocMode) => void, docId?: string) => Disposable;
}
export declare function createDocModeService(curDocId: string): DocModeService;
//# sourceMappingURL=doc-mode-service.d.ts.map