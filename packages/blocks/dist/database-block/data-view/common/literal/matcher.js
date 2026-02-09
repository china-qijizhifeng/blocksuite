import { Matcher } from '../../logical/matcher.js';
import { renderUniLit, } from '../../utils/uni-component/uni-component.js';
export const renderLiteral = (type, value, onChange) => {
    const data = literalMatcher.match(type);
    if (!data) {
        return;
    }
    return renderUniLit(data.view, { value, onChange, type });
};
export const popLiteralEdit = (target, type, value, onChange) => {
    const data = literalMatcher.match(type);
    if (!data) {
        return;
    }
    data.popEdit(target, { value, onChange, type });
};
export const literalMatcher = new Matcher();
//# sourceMappingURL=matcher.js.map