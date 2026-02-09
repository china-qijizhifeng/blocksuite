import { Matcher } from '../../../logical/matcher.js';
import type { TFunction } from '../../../logical/typesystem.js';
export type FilterMatcherDataType = {
    name: string;
    label: string;
    impl: (...args: unknown[]) => boolean;
};
export type FilterDefineType = {
    type: TFunction;
} & Omit<FilterMatcherDataType, 'name'>;
export declare const filterMatcher: Matcher<FilterMatcherDataType, TFunction>;
//# sourceMappingURL=matcher.d.ts.map