import { multiPlayersColor } from './color-picker.js';
export class RemoteColorManager {
    get awareness() {
        return this.host.doc.collection.awarenessStore;
    }
    get rootService() {
        return this.host.spec.getService('affine:page');
    }
    constructor(host) {
        this.host = host;
        const sessionColor = this.rootService.editPropsStore.getItem('remoteColor');
        if (sessionColor) {
            this.awareness.awareness.setLocalStateField('color', sessionColor);
            return;
        }
        const pickColor = multiPlayersColor.pick();
        this.awareness.awareness.setLocalStateField('color', pickColor);
        this.rootService.editPropsStore.setItem('remoteColor', pickColor);
    }
    get(id) {
        const awarenessColor = this.awareness.getStates().get(id)?.color;
        if (awarenessColor) {
            return awarenessColor;
        }
        if (id !== this.awareness.awareness.clientID)
            return null;
        const sessionColor = this.rootService.editPropsStore.getItem('remoteColor');
        if (sessionColor) {
            this.awareness.awareness.setLocalStateField('color', sessionColor);
            return sessionColor;
        }
        const pickColor = multiPlayersColor.pick();
        this.awareness.awareness.setLocalStateField('color', pickColor);
        this.rootService.editPropsStore.setItem('remoteColor', pickColor);
        return pickColor;
    }
}
//# sourceMappingURL=remote-color-manager.js.map