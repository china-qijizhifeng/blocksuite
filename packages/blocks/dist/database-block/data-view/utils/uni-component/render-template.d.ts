import { ShadowlessElement } from '@blocksuite/block-std';
import type { TemplateResult } from 'lit';
export declare class AnyRender<T> extends ShadowlessElement {
    accessor props: T;
    accessor renderTemplate: (props: T) => TemplateResult | symbol;
    render(): symbol | TemplateResult;
}
export declare const renderTemplate: <T>(renderTemplate: (props: T) => TemplateResult | symbol) => AnyRender<T>;
//# sourceMappingURL=render-template.d.ts.map