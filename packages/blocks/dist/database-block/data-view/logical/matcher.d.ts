import type { TType } from './typesystem.js';
type MatcherData<Data, Type extends TType = TType> = {
    type: Type;
    data: Data;
};
export declare class Matcher<Data, Type extends TType = TType> {
    private _match;
    private list;
    constructor(_match?: (type: Type, target: TType) => boolean);
    register(type: Type, data: Data): void;
    match(type: TType): Data | undefined;
    allMatched(type: TType): MatcherData<Data>[];
    allMatchedData(type: TType): Data[];
    findData(f: (data: Data) => boolean): Data | undefined;
    find(f: (data: MatcherData<Data, Type>) => boolean): MatcherData<Data, Type> | undefined;
    all(): MatcherData<Data, Type>[];
    isMatched(type: Type, target: TType): boolean;
}
export {};
//# sourceMappingURL=matcher.d.ts.map