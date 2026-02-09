import type { BundledLanguage, BundledLanguageInfo, PlainTextLanguage } from 'shiki';
export declare const DARK_THEME = "dark-plus";
export declare const LIGHT_THEME = "light-plus";
export declare const FALLBACK_LANG = "Plain Text";
/**
 * Note: Use it carefully because it is not a valid language.
 */
export declare const PLAIN_TEXT_LANG_INFO: {
    id: PlainTextLanguage;
    name: string;
    aliases: ("text" | "plaintext" | "txt")[];
    import: () => Promise<{
        default: never[];
    }>;
};
export type StrictLanguageInfo = BundledLanguageInfo & {
    id: BundledLanguage | PlainTextLanguage;
};
//# sourceMappingURL=consts.d.ts.map