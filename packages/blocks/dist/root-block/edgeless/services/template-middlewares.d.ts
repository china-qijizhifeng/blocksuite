import { Bound } from '../../../surface-block/utils/bound.js';
import type { TemplateJob } from './template.js';
export declare const replaceIdMiddleware: (job: TemplateJob) => void;
export declare const createInsertPlaceMiddleware: (targetPlace: Bound) => (job: TemplateJob) => void;
export declare const createStickerMiddleware: (center: {
    x: number;
    y: number;
}, getIndex: () => string) => (job: TemplateJob) => void;
export declare const createRegenerateIndexMiddleware: (generateIndex: (type: string) => string) => (job: TemplateJob) => void;
//# sourceMappingURL=template-middlewares.d.ts.map