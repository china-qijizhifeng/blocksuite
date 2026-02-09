import type { Element, Root, RootContentMap, Text } from 'hast';
export type HastUnionType<K extends keyof RootContentMap, V extends RootContentMap[K]> = V;
export type HtmlAST = HastUnionType<keyof RootContentMap, RootContentMap[keyof RootContentMap]> | Root;
export declare const hastGetTextContent: (ast: HtmlAST | undefined, defaultStr?: string) => string;
export declare const hastGetElementChildren: (ast: HtmlAST | undefined) => Element[];
export declare const hastGetTextChildren: (ast: HtmlAST | undefined) => Text[];
export declare const hastGetTextChildrenOnlyAst: (ast: Element) => Element;
export declare const hastQuerySelector: (ast: HtmlAST, selector: string) => Element | undefined;
export declare const hastFlatNodes: (ast: HtmlAST, expression: (tagName: string) => boolean) => HtmlAST;
//# sourceMappingURL=hast.d.ts.map