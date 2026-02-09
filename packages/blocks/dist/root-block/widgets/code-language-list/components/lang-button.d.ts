import { LitElement } from 'lit';
import type { CodeBlockComponent } from '../../../../code-block/code-block.js';
export declare class LanguageListButton extends LitElement {
    static styles: import("lit").CSSResult;
    private accessor _currentLanguage;
    private accessor _langButton;
    private _abortController?;
    accessor blockElement: CodeBlockComponent;
    accessor onActiveStatusChange: (active: boolean) => void;
    private _updateLanguage;
    private _clickLangBtn;
    connectedCallback(): void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'language-list-button': LanguageListButton;
    }
}
//# sourceMappingURL=lang-button.d.ts.map