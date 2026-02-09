import type { EmbedCardStyle } from '../_common/types.js';
export declare const githubUrlRegex: RegExp;
export type EmbedGithubBlockUrlData = {
    image: string | null;
    status: string | null;
    statusReason: string | null;
    title: string | null;
    description: string | null;
    createdAt: string | null;
    assignees: string[] | null;
};
export declare const EmbedGithubStyles: EmbedCardStyle[];
export type EmbedGithubBlockProps = {
    style: (typeof EmbedGithubStyles)[number];
    owner: string;
    repo: string;
    githubType: 'issue' | 'pr';
    githubId: string;
    url: string;
    caption: string | null;
} & EmbedGithubBlockUrlData;
declare const EmbedGithubModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<{
        style: EmbedCardStyle;
        owner: string;
        repo: string;
        githubType: "issue" | "pr";
        githubId: string;
        url: string;
        caption: string | null;
    } & EmbedGithubBlockUrlData & import("../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>;
};
export declare class EmbedGithubModel extends EmbedGithubModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-github': EmbedGithubModel;
        }
    }
}
export {};
//# sourceMappingURL=embed-github-model.d.ts.map