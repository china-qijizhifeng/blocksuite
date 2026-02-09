import { EdgelessTextBlockSpec } from '../edgeless-text/edgeless-text-spec.js';
import { FrameBlockSpec } from '../frame-block/frame-spec.js';
import { EdgelessRootBlockSpec, PreviewEdgelessRootBlockSpec, } from '../root-block/edgeless/edgeless-root-spec.js';
import { EdgelessSurfaceBlockSpec } from '../surface-block/surface-spec.js';
import { EdgelessSurfaceRefBlockSpec } from '../surface-ref-block/surface-ref-spec.js';
import { CommonFirstPartyBlockSpecs } from './common.js';
export const EdgelessEditorBlockSpecs = [
    EdgelessRootBlockSpec,
    ...CommonFirstPartyBlockSpecs,
    EdgelessSurfaceBlockSpec,
    EdgelessSurfaceRefBlockSpec,
    FrameBlockSpec,
    EdgelessTextBlockSpec,
];
export const PreviewEdgelessEditorBlockSpecs = [
    PreviewEdgelessRootBlockSpec,
    ...CommonFirstPartyBlockSpecs,
    EdgelessSurfaceBlockSpec,
    EdgelessSurfaceRefBlockSpec,
    FrameBlockSpec,
];
//# sourceMappingURL=edgeless-specs.js.map