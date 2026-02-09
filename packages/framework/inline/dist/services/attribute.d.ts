import type { z, ZodTypeDef } from 'zod';
import type { InlineEditor } from '../inline-editor.js';
import type { AttributeRenderer } from '../types.js';
import type { InlineRange } from '../types.js';
import type { BaseTextAttributes } from '../utils/index.js';
export declare class AttributeService<TextAttributes extends BaseTextAttributes> {
    readonly editor: InlineEditor<TextAttributes>;
    private _marks;
    private _attributeRenderer;
    private _attributeSchema;
    constructor(editor: InlineEditor<TextAttributes>);
    get marks(): TextAttributes | null;
    get attributeRenderer(): AttributeRenderer<TextAttributes>;
    setMarks: (marks: TextAttributes) => void;
    resetMarks: () => void;
    setAttributeSchema: (schema: z.ZodSchema<TextAttributes, ZodTypeDef, unknown>) => void;
    setAttributeRenderer: (renderer: AttributeRenderer<TextAttributes>) => void;
    getFormat: (inlineRange: InlineRange, loose?: boolean) => TextAttributes;
    normalizeAttributes: (textAttributes?: TextAttributes) => TextAttributes | undefined;
}
//# sourceMappingURL=attribute.d.ts.map