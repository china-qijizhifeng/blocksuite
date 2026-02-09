import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
export interface DateCell {
    date: Date;
    label: string;
    isToday: boolean;
    notCurrentMonth: boolean;
    selected?: boolean;
    tabIndex?: number;
}
declare const DatePicker_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
/**
 * Date picker
 */
export declare class DatePicker extends DatePicker_base {
    get year(): number;
    get month(): number;
    get date(): number;
    get day(): number;
    get yearLabel(): number;
    get monthLabel(): string;
    get dayLabel(): string;
    get cardWidth(): number;
    get cardHeight(): number;
    get minHeight(): number;
    get _cardStyle(): {
        '--cell-size': string;
        '--gap-h': string;
        '--gap-v': string;
        'min-width': string;
        'min-height': string;
        padding: string;
    };
    static styles: import("lit").CSSResult;
    /** current active month */
    private _cursor;
    /** web-accessibility for month select */
    private accessor _monthCursor;
    private accessor _yearCursor;
    private accessor _monthPickYearCursor;
    /** date matrix */
    private accessor _matrix;
    private accessor _yearMatrix;
    private accessor _mode;
    private _maxYear;
    private _minYear;
    /** Checked date timestamp */
    accessor value: number | undefined;
    accessor onChange: ((value: Date) => void) | undefined;
    /** card padding in px */
    accessor padding: number;
    /** cell size in px */
    accessor size: number;
    /** horizontal gap between cells in px */
    accessor gapH: number;
    /** vertical gap between cells in px */
    accessor gapV: number;
    private _moveMonth;
    private _modeDecade;
    private _onChange;
    private _getMatrix;
    private _getYearMatrix;
    private _switchMode;
    /** Actions */
    private _navAction;
    /** Week header */
    private _dayHeaderRenderer;
    /** Cell */
    private _cellRenderer;
    private _dateContent;
    private _monthContent;
    private _yearContent;
    /**
     * Focus on date-cell
     */
    focusDateCell(): void;
    /**
     * check if date-cell is focused
     * @returns
     */
    isDateCellFocused(): boolean;
    focusMonthCell(): void;
    isMonthCellFocused(): boolean;
    focusYearCell(): void;
    isYearCellFocused(): boolean;
    openMonthSelector(): void;
    closeMonthSelector(): void;
    toggleMonthSelector(): void;
    openYearSelector(): void;
    closeYearSelector(): void;
    toggleYearSelector(): void;
    firstUpdated(): void;
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'date-picker': DatePicker;
    }
}
export {};
//# sourceMappingURL=date-picker.d.ts.map