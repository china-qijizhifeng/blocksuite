import { assertExists } from '@blocksuite/global/utils';
import { SpecBuilder } from './spec-builder.js';
export class SpecProvider {
    constructor() {
        this.specMap = new Map();
    }
    addSpec(id, spec) {
        if (!this.specMap.has(id)) {
            this.specMap.set(id, spec);
        }
    }
    hasSpec(id) {
        return this.specMap.has(id);
    }
    getSpec(id) {
        const spec = this.specMap.get(id);
        assertExists(spec, `Spec not found for ${id}`);
        return new SpecBuilder(spec);
    }
    clearSpec(id) {
        this.specMap.delete(id);
    }
    static getInstance() {
        if (!SpecProvider.instance) {
            SpecProvider.instance = new SpecProvider();
        }
        return SpecProvider.instance;
    }
}
//# sourceMappingURL=spec-provider.js.map