import { defineBlockSchema } from '@blocksuite/store';
export const SurfaceRefBlockSchema = defineBlockSchema({
    flavour: 'affine:surface-ref',
    props: () => ({
        reference: '',
        caption: '',
    }),
    metadata: {
        version: 1,
        role: 'content',
        parent: ['affine:note'],
    },
});
//# sourceMappingURL=surface-ref-model.js.map