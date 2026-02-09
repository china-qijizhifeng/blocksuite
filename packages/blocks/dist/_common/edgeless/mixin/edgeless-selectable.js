import { BlockModel } from '@blocksuite/store';
import { EdgelessBlockModel } from '../../../root-block/edgeless/edgeless-block-model.js';
export function selectable(SuperClass) {
    if (SuperClass === BlockModel) {
        return EdgelessBlockModel;
    }
    else {
        let currentClass = SuperClass;
        while (Object.getPrototypeOf(currentClass.prototype) !== BlockModel.prototype &&
            Object.getPrototypeOf(currentClass.prototype) !== null) {
            currentClass = Object.getPrototypeOf(currentClass.prototype).constructor;
        }
        if (Object.getPrototypeOf(currentClass.prototype) === null) {
            throw new Error('The SuperClass is not a subclass of BlockModel');
        }
        Object.setPrototypeOf(currentClass.prototype, EdgelessBlockModel.prototype);
    }
    return SuperClass;
}
//# sourceMappingURL=edgeless-selectable.js.map