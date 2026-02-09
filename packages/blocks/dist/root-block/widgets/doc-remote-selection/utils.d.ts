import type { DirectiveResult } from 'lit/directive.js';
import { type StyleMapDirective } from 'lit/directives/style-map.js';
import type { SelectionRect } from './doc-remote-selection.js';
export declare function selectionStyle(rect: SelectionRect, color: string): DirectiveResult<typeof StyleMapDirective>;
export declare function cursorStyle(rect: SelectionRect, color: string): DirectiveResult<typeof StyleMapDirective>;
export declare function filterCoveringRects(rects: SelectionRect[]): SelectionRect[];
//# sourceMappingURL=utils.d.ts.map