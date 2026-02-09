import { AffineLitIcon } from '../common/icons/icon.js';
import { map } from './uni-component/operation.js';
import { createUniComponentFromWebComponent } from './uni-component/uni-component.js';
const litIcon = createUniComponentFromWebComponent(AffineLitIcon);
export const createIcon = (name) => {
    return map(litIcon, () => ({ name }));
};
//# sourceMappingURL=uni-icon.js.map