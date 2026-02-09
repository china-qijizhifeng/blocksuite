import type { Slot } from '@blocksuite/global/utils';
import type { BundledLanguage } from 'shiki';
import { type StrictLanguageInfo } from './consts.js';
export interface selectedLanguageChangedSlots {
    selectedLanguageChanged: Slot<{
        language: string | null;
    }>;
    dispose: Slot;
}
export declare function getLanguagePriority(lang: BundledLanguage): number;
export declare function isPlaintext(lang: string): boolean;
/**
 * Get the standard language registration for a given language name,
 * accept both language id and aliases (by default, or set `strict` to `false`).
 *
 * If the language is plaintext, return `null`.
 */
export declare const getStandardLanguage: (languageName: string, strict?: boolean) => StrictLanguageInfo | null;
//# sourceMappingURL=code-languages.d.ts.map