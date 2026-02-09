import type { TemplateResult } from 'lit';
import type { BaseTextAttributes } from './utils/index.js';
export type DeltaInsert<TextAttributes extends BaseTextAttributes = BaseTextAttributes> = {
    insert: string;
    attributes?: TextAttributes;
};
export type AttributeRenderer<TextAttributes extends BaseTextAttributes = BaseTextAttributes> = (delta: DeltaInsert<TextAttributes>, selected: boolean) => TemplateResult<1>;
export interface InlineRange {
    index: number;
    length: number;
}
export type InlineRangeUpdatedProp = [range: InlineRange | null, sync: boolean];
export type DeltaEntry<TextAttributes extends BaseTextAttributes = BaseTextAttributes> = [delta: DeltaInsert<TextAttributes>, range: InlineRange];
export type NativePoint = readonly [node: Node, offset: number];
export type TextPoint = readonly [text: Text, offset: number];
export interface DomPoint {
    text: Text;
    index: number;
}
//# sourceMappingURL=types.d.ts.map