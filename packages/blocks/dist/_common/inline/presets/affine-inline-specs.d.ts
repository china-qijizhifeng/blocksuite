import './nodes/index.js';
import type { InlineEditor, InlineRootElement } from '@blocksuite/inline';
import type { InlineSpecs } from '../inline-manager.js';
import type { ReferenceNodeConfig } from './nodes/reference-node/reference-config.js';
export type AffineInlineEditor = InlineEditor<AffineTextAttributes>;
export type AffineInlineRootElement = InlineRootElement<AffineTextAttributes>;
export interface AffineTextAttributes {
    bold?: true | null;
    italic?: true | null;
    underline?: true | null;
    strike?: true | null;
    code?: true | null;
    link?: string | null;
    reference?: {
        type: 'Subpage' | 'LinkedPage';
        pageId: string;
    } | null;
    background?: string | null;
    color?: string | null;
    aiPlaceholder?: {
        content: string;
    } | null;
    comment?: {
        id: string;
        content?: string;
        selectedText?: string;
    } | null;
    aiDiff?: {
        id: string;
        type: 'delete' | 'insert';
        originalText?: string;
        newText?: string;
    } | null;
}
export declare const affineInlineSpecsWithoutReference: InlineSpecs<AffineTextAttributes>[];
export declare function getAffineInlineSpecsWithReference(referenceNodeConfig: ReferenceNodeConfig): InlineSpecs<AffineTextAttributes>[];
//# sourceMappingURL=affine-inline-specs.d.ts.map