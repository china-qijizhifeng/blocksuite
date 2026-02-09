import { Slot } from '@blocksuite/global/utils';
import { type BlockSnapshot, type DocSnapshot, Job } from '@blocksuite/store';
import { Bound } from '../../../surface-block/index.js';
import type { SurfaceBlockModel } from '../../../surface-block/surface-model.js';
/**
 * Template type will affect the inserting behaviour
 */
declare const TEMPLATE_TYPES: readonly ["template", "sticker"];
type TemplateType = (typeof TEMPLATE_TYPES)[number];
export type SlotBlockPayload = {
    type: 'block';
    data: {
        blockJson: BlockSnapshot;
        parent?: string;
        index?: number;
    };
};
export type SlotPayload = SlotBlockPayload | {
    type: 'template';
    template: DocSnapshot;
    bound: Bound | null;
};
export type TemplateJobConfig = {
    model: SurfaceBlockModel;
    type: string;
    middlewares: ((job: TemplateJob) => void)[];
};
export declare class TemplateJob {
    static middlewares: ((job: TemplateJob) => void)[];
    private _template;
    job: Job;
    model: SurfaceBlockModel;
    type: TemplateType;
    slots: {
        beforeInsert: Slot<SlotBlockPayload | {
            type: 'template';
            template: DocSnapshot;
            bound: Bound | null;
        }>;
    };
    constructor({ model, type, middlewares }: TemplateJobConfig);
    private _mergeSurfaceElements;
    private _mergeProps;
    private _getMergeBlockId;
    private _getTemplateBound;
    private _jsonToModelData;
    private _insertToDoc;
    walk(callback: (block: BlockSnapshot, template: DocSnapshot) => void): void;
    insertTemplate(template: unknown): Promise<Bound | null>;
    static create(options: {
        model: SurfaceBlockModel;
        type: string;
        middlewares: ((job: TemplateJob) => void)[];
    }): TemplateJob;
}
export {};
//# sourceMappingURL=template.d.ts.map