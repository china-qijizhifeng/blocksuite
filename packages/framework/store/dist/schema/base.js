var _a;
import { Slot } from '@blocksuite/global/utils';
import { z } from 'zod';
import { Boxed } from '../reactive/boxed.js';
import { Text } from '../reactive/text.js';
const FlavourSchema = z.string();
const ParentSchema = z.array(z.string()).optional();
const ContentSchema = z.array(z.string()).optional();
const role = ['root', 'hub', 'content'];
const RoleSchema = z.enum(role);
export const internalPrimitives = Object.freeze({
    Text: (input = '') => new Text(input),
    Boxed: (input) => new Boxed(input),
});
export const BlockSchema = z.object({
    version: z.number(),
    model: z.object({
        role: RoleSchema,
        flavour: FlavourSchema,
        parent: ParentSchema,
        children: ContentSchema,
        props: z
            .function()
            .args(z.custom())
            .returns(z.record(z.any()))
            .optional(),
        toModel: z.function().args().returns(z.custom()).optional(),
    }),
    transformer: z
        .function()
        .args()
        .returns(z.custom())
        .optional(),
    onUpgrade: z
        .function()
        .args(z.any(), z.number(), z.number())
        .returns(z.void())
        .optional(),
});
export function defineBlockSchema({ flavour, props, metadata, onUpgrade, toModel, transformer, }) {
    const schema = {
        version: metadata.version,
        model: {
            role: metadata.role,
            parent: metadata.parent,
            children: metadata.children,
            flavour,
            props,
            toModel,
        },
        onUpgrade,
        transformer,
    };
    BlockSchema.parse(schema);
    return schema;
}
/**
 * The MagicProps function is used to append the props to the class.
 * For example:
 *
 * ```ts
 * class MyBlock extends MagicProps()<{ foo: string }> {}
 * const myBlock = new MyBlock();
 * // You'll get type checking for the foo prop
 * myBlock.foo = 'bar';
 * ```
 */
function MagicProps() {
    return class {
    };
}
const modelLabel = Symbol('model_label');
// @ts-ignore
export class BlockModel extends MagicProps() {
    constructor() {
        super(...arguments);
        // This is used to avoid https://stackoverflow.com/questions/55886792/infer-typescript-generic-class-type
        this[_a] = 'type_info_label';
        this.created = new Slot();
        this.deleted = new Slot();
        this.propsUpdated = new Slot();
        this.childrenUpdated = new Slot();
    }
    static { _a = modelLabel; }
    get doc() {
        return this.page;
    }
    set doc(doc) {
        this.page = doc;
    }
    get childMap() {
        return this.children.reduce((map, child, index) => {
            map.set(child.id, index);
            return map;
        }, new Map());
    }
    get children() {
        const block = this.yBlock.get('sys:children');
        if (!block) {
            return [];
        }
        const children = [];
        block.forEach(id => {
            const child = this.doc.getBlockById(id);
            if (!child) {
                return;
            }
            children.push(child);
        });
        return children;
    }
    isEmpty() {
        return this.children.length === 0;
    }
    firstChild() {
        return this.children[0] || null;
    }
    lastChild() {
        if (!this.children.length) {
            return this;
        }
        return this.children[this.children.length - 1].lastChild();
    }
    dispose() {
        this.created.dispose();
        this.deleted.dispose();
        this.propsUpdated.dispose();
        this.childrenUpdated.dispose();
    }
}
//# sourceMappingURL=base.js.map