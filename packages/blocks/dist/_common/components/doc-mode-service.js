import { Slot } from '@blocksuite/global/utils';
const DEFAULT_MODE = 'page';
const modeMap = new Map();
const slotMap = new Map();
export function createDocModeService(curDocId) {
    const docModeService = {
        setMode: (mode, id = curDocId) => {
            modeMap.set(id, mode);
            slotMap.get(id)?.emit(mode);
        },
        getMode: (id = curDocId) => {
            return modeMap.get(id) ?? DEFAULT_MODE;
        },
        toggleMode: (id = curDocId) => {
            const mode = docModeService.getMode(id) === 'page' ? 'edgeless' : 'page';
            docModeService.setMode(mode);
            return mode;
        },
        onModeChange: (handler, id = curDocId) => {
            if (!slotMap.get(id)) {
                slotMap.set(id, new Slot());
            }
            return slotMap.get(id).on(handler);
        },
    };
    return docModeService;
}
//# sourceMappingURL=doc-mode-service.js.map