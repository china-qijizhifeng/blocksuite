import { type BundledHighlighterOptions, type BundledLanguage, type Highlighter, type PlainTextLanguage } from 'shiki';
export declare const getHighLighter: (options: BundledHighlighterOptions<BundledLanguage, string> & {
    langs: (BundledLanguage | PlainTextLanguage)[];
}) => Promise<Highlighter>;
//# sourceMappingURL=high-lighter.d.ts.map