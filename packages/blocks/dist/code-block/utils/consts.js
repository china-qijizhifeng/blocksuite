export const DARK_THEME = 'dark-plus';
export const LIGHT_THEME = 'light-plus';
// Since shiki special treatment the `plaintext` language as `PlainTextLanguage`
// It is better to use the it but now is late to change it.
// export const FALLBACK_LANG: PlainTextLanguage = 'plaintext';
export const FALLBACK_LANG = 'Plain Text';
/**
 * Note: Use it carefully because it is not a valid language.
 */
export const PLAIN_TEXT_LANG_INFO = {
    // This cast is wrong, but it is safe if we treat it as PlainTextLanguage in all cases.
    id: FALLBACK_LANG,
    name: FALLBACK_LANG,
    aliases: ['plaintext', 'txt', 'text'],
    import: () => Promise.resolve({
        default: [],
    }),
};
//# sourceMappingURL=consts.js.map