import { ShadowlessElement } from '@blocksuite/block-std';
import type { LitElement, PropertyValues, TemplateResult } from 'lit';
import type { Ref } from 'lit/directives/ref.js';
import { type StyleInfo } from 'lit/directives/style-map.js';
export type UniComponentReturn<Props = NonNullable<unknown>, Expose extends NonNullable<unknown> = NonNullable<unknown>> = {
    update: (props: Props) => void;
    unmount: () => void;
    expose: Expose;
};
export type UniComponent<Props = NonNullable<unknown>, Expose extends NonNullable<unknown> = NonNullable<unknown>> = (ele: HTMLElement, props: Props) => UniComponentReturn<Props, Expose>;
export declare const renderUniLit: <Props, Expose extends {}>(uni: UniComponent<Props, Expose> | undefined, props: Props, options?: {
    ref?: Ref<Expose>;
    style?: Readonly<StyleInfo>;
    class?: string;
}) => TemplateResult;
export declare class UniLit<Props, Expose extends NonNullable<unknown> = NonNullable<unknown>> extends ShadowlessElement {
    get expose(): Expose | undefined;
    static styles: import("lit").CSSResult;
    accessor uni: UniComponent<Props, Expose> | undefined;
    accessor props: Props;
    accessor ref: Ref<Expose> | undefined;
    uniReturn?: UniComponentReturn<Props, Expose>;
    private mount;
    private unmount;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): unknown;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export declare const createUniComponentFromWebComponent: <T, Expose extends {} = {}>(component: typeof LitElement) => UniComponent<T, Expose>;
export declare const defineUniComponent: <T, Expose extends {}>(renderTemplate: (props: T, expose: Expose) => TemplateResult) => UniComponent<T, Expose>;
//# sourceMappingURL=uni-component.d.ts.map