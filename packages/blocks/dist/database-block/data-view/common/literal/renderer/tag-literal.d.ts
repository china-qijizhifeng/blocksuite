import { tTag } from '../../../logical/data-type.js';
import type { TArray, TypeOfData } from '../../../logical/typesystem.js';
import { LiteralElement } from './literal-element.js';
export declare class TagLiteral extends LiteralElement<string, TypeOfData<typeof tTag>> {
    static styles: import("lit").CSSResult;
    tags(): import("@blocksuite/blocks").SelectTag[];
    render(): string | import("lit").TemplateResult<1>;
}
export declare class MultiTagLiteral extends LiteralElement<string[], TArray<TypeOfData<typeof tTag>>> {
    static styles: import("lit").CSSResult;
    tags(): import("@blocksuite/blocks").SelectTag[];
    render(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=tag-literal.d.ts.map