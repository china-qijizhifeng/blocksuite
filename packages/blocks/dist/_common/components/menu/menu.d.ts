import { ShadowlessElement } from '@blocksuite/block-std';
import type { Middleware, Placement, VirtualElement } from '@floating-ui/dom';
import type { TemplateResult } from 'lit';
type MenuCommon = {
    hide?: () => boolean;
};
type GroupMenu = MenuCommon & {
    type: 'group';
    name: string;
    children: () => NormalMenu[];
};
type MenuClass = (string & {}) | 'delete-item';
type NormalMenu = MenuCommon & ({
    type: 'action';
    name: string;
    isSelected?: boolean;
    label?: TemplateResult;
    icon?: TemplateResult;
    postfix?: TemplateResult;
    select: () => void;
    onHover?: (hover: boolean) => void;
    class?: MenuClass;
} | {
    type: 'checkbox';
    name: string;
    checked: boolean;
    postfix?: TemplateResult;
    label?: TemplateResult;
    select: (checked: boolean) => boolean;
    class?: string;
} | {
    type: 'toggle-switch';
    name: string;
    on: boolean;
    postfix?: TemplateResult;
    label?: TemplateResult;
    onChange: (on: boolean) => void;
    class?: string;
} | {
    type: 'sub-menu';
    name: string;
    label?: TemplateResult;
    postfix?: TemplateResult;
    icon?: TemplateResult;
    options: MenuOptions;
    select?: () => void;
    isSelected?: boolean;
} | {
    type: 'custom';
    render: TemplateResult;
});
export type Menu = GroupMenu | NormalMenu;
export type MenuOptions = {
    onComplete?: () => void;
    onClose?: () => void;
    style?: string;
    input?: {
        search?: boolean;
        placeholder?: string;
        initValue?: string;
        onComplete?: (text: string) => void;
        left?: TemplateResult;
        right?: TemplateResult;
    };
    items: Menu[];
};
declare const MenuComponent_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class MenuComponent<_T> extends MenuComponent_base {
    private get minIndex();
    private get selectedIndex();
    private set selectedIndex(value);
    private get text();
    private set text(value);
    private get selectedItem();
    private get isSearchMode();
    static styles: import("lit").CSSResult;
    private accessor _text;
    private accessor _selectedIndex;
    private subMenu?;
    private inputRef;
    private allItems;
    private selectableItems;
    private _checked;
    private processMap;
    private initTime;
    accessor options: MenuOptions;
    private setChecked;
    private getChecked;
    private close;
    private _inputText;
    private show;
    private process;
    private _complete;
    private focusInput;
    private _clickContainer;
    private _mouseEnter;
    private _isConsciousChoice;
    private clearSubMenu;
    private showHeader;
    firstUpdated(): void;
    disconnectedCallback(): void;
    mouseEnterHeader: () => void;
    processItems(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-menu': MenuComponent<unknown>;
    }
}
export declare const getDefaultModalRoot: (ele: HTMLElement) => HTMLElement;
export declare const createModal: (container?: HTMLElement) => HTMLDivElement;
export declare const positionToVRect: (x: number, y: number) => VirtualElement;
export declare const createPopup: (target: HTMLElement, content: HTMLElement, options?: {
    onClose?: () => void;
    middleware?: Array<Middleware | null | undefined | false>;
    placement?: Placement;
    container?: HTMLElement;
}) => () => void;
export type MenuHandler = {
    close: () => void;
};
export declare const popMenu: <T>(target: HTMLElement, props: {
    options: MenuOptions;
    placement?: Placement;
    middleware?: Array<Middleware | null | undefined | false>;
    container?: HTMLElement;
}) => MenuHandler;
export declare const popFilterableSimpleMenu: (target: HTMLElement, options: Menu[], onClose?: () => void) => void;
export {};
//# sourceMappingURL=menu.d.ts.map