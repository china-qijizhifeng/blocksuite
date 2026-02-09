import { literal } from 'lit/static-html.js';
import { CodeBlockSchema } from './code-model.js';
export const CodeBlockSpec = {
    schema: CodeBlockSchema,
    view: {
        component: literal `affine-code`,
        widgets: {
            codeToolbar: literal `affine-code-toolbar-widget`,
            codeLangList: literal `affine-code-language-list-widget`,
        },
    },
};
//# sourceMappingURL=code-block-spec.js.map