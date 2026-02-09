import type { EdgelessRootBlockComponent, PageRootBlockComponent, SurfaceBlockComponent } from '@blocksuite/blocks';
import type { Doc } from '@blocksuite/store';
import type { AffineEditorContainer } from '../../index.js';
export declare function getSurface(doc: Doc, editor: AffineEditorContainer): SurfaceBlockComponent;
export declare function getDocRootBlock(doc: Doc, editor: AffineEditorContainer, mode: 'page'): PageRootBlockComponent;
export declare function getDocRootBlock(doc: Doc, editor: AffineEditorContainer, mode: 'edgeless'): EdgelessRootBlockComponent;
export declare function addNote(doc: Doc, props?: Record<string, any>): string;
//# sourceMappingURL=edgeless.d.ts.map