import { BlockService } from '@blocksuite/block-std';
import { reassociateConnectorsCommand } from './commands/reassociate-connectors.js';
import { LayerManager } from './managers/layer-manager.js';
export class SurfaceBlockService extends BlockService {
    mounted() {
        super.mounted();
        this.std.command.add('reassociateConnectors', reassociateConnectorsCommand);
        this.surface = this.doc.getBlockByFlavour('affine:surface')[0];
        if (!this.surface) {
            const disposable = this.doc.slots.blockUpdated.on(payload => {
                if (payload.flavour === 'affine:surface') {
                    disposable.dispose();
                    const surface = this.doc.getBlockById(payload.id);
                    if (!surface)
                        return;
                    this.surface = surface;
                    this.layer = LayerManager.create(this.doc, surface);
                }
            });
        }
        else {
            this.layer = LayerManager.create(this.doc, this.surface);
        }
    }
    unmounted() {
        this.layer?.dispose();
    }
}
//# sourceMappingURL=surface-service.js.map