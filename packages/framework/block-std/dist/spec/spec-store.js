import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { BlockService } from '../service/index.js';
import { getSlots } from './slots.js';
export class SpecStore {
    constructor(std) {
        this.std = std;
        this._specs = new Map();
        this._services = new Map();
        this._disposables = new DisposableGroup();
        this.slots = {
            beforeApply: new Slot(),
            beforeMount: new Slot(),
            beforeUnmount: new Slot(),
            afterApply: new Slot(),
            afterMount: new Slot(),
            afterUnmount: new Slot(),
        };
    }
    _diffServices(oldSpecs, newSpecs) {
        oldSpecs.forEach((oldSpec, flavour) => {
            if (newSpecs.has(flavour) &&
                newSpecs.get(flavour)?.service === oldSpec.service) {
                return;
            }
            const service = this._services.get(flavour);
            if (service) {
                service.dispose();
                service.unmounted();
            }
            this._services.delete(flavour);
        });
        newSpecs.forEach((newSpec, flavour) => {
            if (this._services.has(flavour)) {
                return;
            }
            const Service = newSpec.service ?? BlockService;
            const slots = getSlots();
            const service = new Service({
                flavour,
                std: this.std,
                slots,
            });
            newSpec.setup?.(slots, this._disposables);
            this._services.set(flavour, service);
            service.mounted();
        });
    }
    _buildSpecMap(specs) {
        const specMap = new Map();
        specs.forEach(spec => {
            specMap.set(spec.schema.model.flavour, spec);
        });
        return specMap;
    }
    mount() {
        this.slots.beforeMount.emit();
        if (this._disposables.disposed) {
            this._disposables = new DisposableGroup();
        }
        this.slots.afterMount.emit();
    }
    unmount() {
        this.slots.beforeUnmount.emit();
        this._services.forEach(service => {
            service.dispose();
            service.unmounted();
        });
        this._services.clear();
        this._disposables.dispose();
        this.slots.afterUnmount.emit();
    }
    applySpecs(specs) {
        this.slots.beforeApply.emit();
        const oldSpecs = this._specs;
        const newSpecs = this._buildSpecMap(specs);
        this._diffServices(oldSpecs, newSpecs);
        this._specs = newSpecs;
        this.slots.afterApply.emit();
    }
    getView(flavour) {
        const spec = this._specs.get(flavour);
        if (!spec) {
            return null;
        }
        return spec.view;
    }
    getService(flavour) {
        return this._services.get(flavour);
    }
}
//# sourceMappingURL=spec-store.js.map