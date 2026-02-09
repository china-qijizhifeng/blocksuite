import { ShadowlessElement } from '@blocksuite/block-std';
export type SelectTag = {
    id: string;
    color: string;
    value: string;
    parentId?: string;
};
declare const MultiTagSelect_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class MultiTagSelect extends MultiTagSelect_base {
    private get color();
    get isSingleMode(): boolean;
    private get selectedTag();
    static styles: import("lit").CSSResult;
    private filteredOptions;
    private accessor _selectInput;
    private accessor text;
    private accessor selectedIndex;
    private _currentColor;
    accessor mode: 'multi' | 'single';
    accessor options: SelectTag[];
    accessor onOptionsChange: (options: SelectTag[]) => void;
    accessor value: string[];
    accessor onChange: (value: string[]) => void;
    accessor editComplete: () => void;
    private clearColor;
    private _onDeleteSelected;
    private _onInput;
    private optionsIdMap;
    private getTagGroup;
    private _onInputKeydown;
    private setSelectedOption;
    private _onSelect;
    private _createOption;
    private _clickItemOption;
    private getTagFullName;
    private getGroupInfoByFullName;
    private _filterOptions;
    protected firstUpdated(): void;
    newTags: (tags: SelectTag[]) => void;
    deleteTag: (id: string) => void;
    changeTag: (tag: SelectTag) => void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-multi-tag-select': MultiTagSelect;
    }
}
export declare const popTagSelect: (target: HTMLElement, ops: {
    mode?: 'single' | 'multi';
    value: string[];
    onChange: (value: string[]) => void;
    options: SelectTag[];
    onOptionsChange: (options: SelectTag[]) => void;
    onComplete?: () => void;
    minWidth?: number;
    container?: HTMLElement;
}) => () => void;
export {};
//# sourceMappingURL=multi-tag-select.d.ts.map