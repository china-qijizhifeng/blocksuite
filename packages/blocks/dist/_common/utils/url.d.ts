import type { TemplateResult } from 'lit';
export declare const ALLOWED_SCHEMES: string[];
export declare function normalizeUrl(url: string): string;
/**
 * Assume user will input a url, we just need to check if it is valid.
 *
 * For more detail see https://www.ietf.org/rfc/rfc1738.txt
 */
export declare function isValidUrl(str: string): boolean;
/**
 * Assuming the user will input anything, we need to check rigorously.
 */
export declare function isStrictUrl(str: string): boolean;
export declare function isUrlInClipboard(clipboardData: DataTransfer): boolean;
type EmbedCardIcons = {
    LoadingIcon: TemplateResult<1>;
    EmbedCardBannerIcon: TemplateResult<1>;
    EmbedCardHorizontalIcon: TemplateResult<1>;
    EmbedCardListIcon: TemplateResult<1>;
    EmbedCardVerticalIcon: TemplateResult<1>;
    EmbedCardCubeIcon: TemplateResult<1>;
};
export declare function getEmbedCardIcons(): EmbedCardIcons;
export {};
//# sourceMappingURL=url.d.ts.map