import { ShadowlessElement } from '@blocksuite/block-std';
import type { TType } from '../../../logical/typesystem.js';
import type { LiteralViewProps } from '../matcher.js';
declare const LiteralElement_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare abstract class LiteralElement<T = unknown, Type extends TType = TType> extends LiteralElement_base implements LiteralViewProps<T, Type> {
    accessor type: Type;
    accessor value: T | undefined;
    accessor onChange: (value?: T) => void;
}
export declare class BooleanLiteral extends LiteralElement<boolean> {
    render(): "True" | "False";
}
export declare class NumberLiteral extends LiteralElement<number> {
    static styles: import("lit").CSSResult;
    render(): string | import("lit").TemplateResult<1>;
}
export declare class StringLiteral extends LiteralElement<string> {
    static styles: import("lit").CSSResult;
    render(): string | import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=literal-element.d.ts.map