import { getHighlighter, } from 'shiki';
let _highLighter = null;
export const getHighLighter = async (options) => {
    if (_highLighter) {
        const { langs } = options;
        if (langs) {
            await _highLighter.loadLanguage(...langs);
        }
        return _highLighter;
    }
    _highLighter = await getHighlighter({
        ...options,
    });
    return _highLighter;
};
//# sourceMappingURL=high-lighter.js.map