import { assertExists } from '@blocksuite/global/utils';
export class SpecBuilder {
    constructor(spec) {
        this._value = [...spec];
    }
    get value() {
        return this._value;
    }
    setup(flavour, setup) {
        const spec = this._value.find(s => s.schema.model.flavour === flavour);
        assertExists(spec, `BlockSpec not found for ${flavour}`);
        const oldSetup = spec.setup;
        spec.setup = (slots, disposableGroup) => {
            oldSetup?.(slots, disposableGroup);
            setup(slots, disposableGroup);
        };
    }
}
//# sourceMappingURL=spec-builder.js.map