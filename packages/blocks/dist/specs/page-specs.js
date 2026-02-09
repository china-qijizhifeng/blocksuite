import { PageRootBlockSpec } from '../root-block/page/page-root-spec.js';
import { PageSurfaceBlockSpec } from '../surface-block/surface-spec.js';
import { PageSurfaceRefBlockSpec } from '../surface-ref-block/surface-ref-spec.js';
import { CommonFirstPartyBlockSpecs } from './common.js';
export const PageEditorBlockSpecs = [
    PageRootBlockSpec,
    ...CommonFirstPartyBlockSpecs,
    PageSurfaceBlockSpec,
    PageSurfaceRefBlockSpec,
];
//# sourceMappingURL=page-specs.js.map