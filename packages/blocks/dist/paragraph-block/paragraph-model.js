import { defineBlockSchema } from '@blocksuite/store';
export const ParagraphBlockSchema = defineBlockSchema({
    flavour: 'affine:paragraph',
    props: internal => ({
        type: 'text',
        text: internal.Text(),
    }),
    metadata: {
        version: 1,
        role: 'content',
        parent: [
            'affine:note',
            'affine:database',
            'affine:paragraph',
            'affine:list',
            'affine:edgeless-text',
        ],
    },
});
//# sourceMappingURL=paragraph-model.js.map