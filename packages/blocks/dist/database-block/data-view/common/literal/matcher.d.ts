import { Matcher } from '../../logical/matcher.js';
import type { TType } from '../../logical/typesystem.js';
import { type UniComponent } from '../../utils/uni-component/uni-component.js';
export declare const renderLiteral: (type: TType, value: unknown, onChange: (value: unknown) => void) => import("lit").TemplateResult | undefined;
export declare const popLiteralEdit: (target: HTMLElement, type: TType, value: unknown, onChange: (value: unknown) => void) => void;
export type LiteralViewProps<Value = unknown, Type extends TType = TType> = {
    type: Type;
    value?: Value;
    onChange: (value?: Value) => void;
};
export type LiteralData<Value = unknown> = {
    view: UniComponent<LiteralViewProps<Value>>;
    popEdit: (position: HTMLElement, props: LiteralViewProps<Value>) => void;
};
export declare const literalMatcher: Matcher<LiteralData<unknown>, TType>;
//# sourceMappingURL=matcher.d.ts.map