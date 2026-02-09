import type { TType } from '../logical/typesystem.js';
import type { UniComponent } from '../utils/uni-component/uni-component.js';
export type Variable = {
    name: string;
    type: TType;
    id: string;
    icon?: UniComponent;
};
export type FilterGroup = {
    type: 'group';
    op: 'and' | 'or';
    conditions: Filter[];
};
export type VariableRef = {
    type: 'ref';
    name: string;
};
export type Property = {
    type: 'property';
    ref: VariableRef;
    propertyFuncName: string;
};
export type VariableOrProperty = VariableRef | Property;
export type Literal = {
    type: 'literal';
    value: unknown;
};
export type Value = Literal;
export type SingleFilter = {
    type: 'filter';
    left: VariableOrProperty;
    function?: string;
    args: Value[];
};
export type Filter = SingleFilter | FilterGroup;
export type SortExp = {
    left: VariableOrProperty;
    type: 'asc' | 'desc';
};
export type SortGroup = SortExp[];
export type GroupExp = {
    left: VariableOrProperty;
    type: 'asc' | 'desc';
};
export type GroupList = GroupExp[];
export declare const getRefType: (vars: Variable[], ref: VariableOrProperty) => TType | undefined;
export declare const firstFilterName: (vars: Variable[], ref: VariableOrProperty) => string | undefined;
export declare const firstFilterByRef: (vars: Variable[], ref: VariableOrProperty) => SingleFilter;
export declare const firstFilter: (vars: Variable[]) => SingleFilter;
export declare const firstFilterInGroup: (vars: Variable[]) => FilterGroup;
//# sourceMappingURL=ast.d.ts.map