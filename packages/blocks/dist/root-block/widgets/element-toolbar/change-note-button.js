var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/note-shadow-panel.js';
import '../../edgeless/components/panel/note-display-mode-panel.js';
import '../../edgeless/components/panel/scale-panel.js';
import '../../edgeless/components/panel/size-panel.js';
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { NOTE_BACKGROUND_COLORS } from '../../../_common/edgeless/note/consts.js';
import { ExpandIcon, LineStyleIcon, NoteCornerIcon, NoteShadowIcon, ScissorsIcon, ShrinkIcon, SmallArrowDownIcon, } from '../../../_common/icons/index.js';
import { NoteDisplayMode } from '../../../_common/types.js';
import { matchFlavours } from '../../../_common/utils/model.js';
import { Bound } from '../../../surface-block/index.js';
import { renderMenuDivider, } from '../../edgeless/components/buttons/menu-button.js';
import { LineStylesPanel, } from '../../edgeless/components/panel/line-styles-panel.js';
import { getTooltipWithShortcut } from '../../edgeless/components/utils.js';
const SIZE_LIST = [
    {
        name: 'None',
        value: 0,
    },
    {
        name: 'Small',
        value: 8,
    },
    {
        name: 'Medium',
        value: 16,
    },
    {
        name: 'Large',
        value: 24,
    },
    {
        name: 'Huge',
        value: 32,
    },
];
const DisplayModeMap = {
    [NoteDisplayMode.DocAndEdgeless]: 'Both',
    [NoteDisplayMode.EdgelessOnly]: 'Edgeless',
    [NoteDisplayMode.DocOnly]: 'Page',
};
let EdgelessChangeNoteButton = (() => {
    let _classDecorators = [customElement('edgeless-change-note-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _notes_decorators;
    let _notes_initializers = [];
    let _notes_extraInitializers = [];
    let _enableNoteSlicer_decorators;
    let _enableNoteSlicer_initializers = [];
    let _enableNoteSlicer_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _quickConnectButton_decorators;
    let _quickConnectButton_initializers = [];
    let _quickConnectButton_extraInitializers = [];
    var EdgelessChangeNoteButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_scalePanelRef_accessor_storage = createRef();
            this.#_cornersPanelRef_accessor_storage = createRef();
            this.#notes_accessor_storage = __runInitializers(this, _notes_initializers, []);
            this.#enableNoteSlicer_accessor_storage = (__runInitializers(this, _notes_extraInitializers), __runInitializers(this, _enableNoteSlicer_initializers, void 0));
            this.#edgeless_accessor_storage = (__runInitializers(this, _enableNoteSlicer_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#quickConnectButton_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _quickConnectButton_initializers, void 0));
            this._setBorderRadius = (__runInitializers(this, _quickConnectButton_extraInitializers), (size) => {
                this.notes.forEach(note => {
                    this.doc.updateBlock(note, () => {
                        note.edgeless.style.borderRadius = size;
                    });
                });
            });
            this._setNoteScale = (scale) => {
                this.notes.forEach(note => {
                    this.doc.updateBlock(note, () => {
                        const bound = Bound.deserialize(note.xywh);
                        const oldScale = note.edgeless.scale ?? 1;
                        const ratio = scale / oldScale;
                        bound.w *= ratio;
                        bound.h *= ratio;
                        const xywh = bound.serialize();
                        note.xywh = xywh;
                        note.edgeless.scale = scale;
                    });
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _notes_decorators = [property({ attribute: false })];
            _enableNoteSlicer_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _quickConnectButton_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _notes_decorators, { kind: "accessor", name: "notes", static: false, private: false, access: { has: obj => "notes" in obj, get: obj => obj.notes, set: (obj, value) => { obj.notes = value; } }, metadata: _metadata }, _notes_initializers, _notes_extraInitializers);
            __esDecorate(this, null, _enableNoteSlicer_decorators, { kind: "accessor", name: "enableNoteSlicer", static: false, private: false, access: { has: obj => "enableNoteSlicer" in obj, get: obj => obj.enableNoteSlicer, set: (obj, value) => { obj.enableNoteSlicer = value; } }, metadata: _metadata }, _enableNoteSlicer_initializers, _enableNoteSlicer_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _quickConnectButton_decorators, { kind: "accessor", name: "quickConnectButton", static: false, private: false, access: { has: obj => "quickConnectButton" in obj, get: obj => obj.quickConnectButton, set: (obj, value) => { obj.quickConnectButton = value; } }, metadata: _metadata }, _quickConnectButton_initializers, _quickConnectButton_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeNoteButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get doc() {
            return this.edgeless.doc;
        }
        #_scalePanelRef_accessor_storage;
        get _scalePanelRef() { return this.#_scalePanelRef_accessor_storage; }
        set _scalePanelRef(value) { this.#_scalePanelRef_accessor_storage = value; }
        #_cornersPanelRef_accessor_storage;
        get _cornersPanelRef() { return this.#_cornersPanelRef_accessor_storage; }
        set _cornersPanelRef(value) { this.#_cornersPanelRef_accessor_storage = value; }
        #notes_accessor_storage;
        get notes() { return this.#notes_accessor_storage; }
        set notes(value) { this.#notes_accessor_storage = value; }
        #enableNoteSlicer_accessor_storage;
        get enableNoteSlicer() { return this.#enableNoteSlicer_accessor_storage; }
        set enableNoteSlicer(value) { this.#enableNoteSlicer_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #quickConnectButton_accessor_storage;
        get quickConnectButton() { return this.#quickConnectButton_accessor_storage; }
        set quickConnectButton(value) { this.#quickConnectButton_accessor_storage = value; }
        _setBackground(background) {
            this.notes.forEach(note => {
                this.doc.updateBlock(note, { background });
            });
            this.edgeless.service.editPropsStore.record('affine:note', {
                background,
            });
        }
        _setShadowType(shadowType) {
            this.notes.forEach(note => {
                this.doc.updateBlock(note, () => {
                    note.edgeless.style.shadowType = shadowType;
                });
            });
        }
        _setDisplayMode(note, newMode) {
            const { displayMode: currentMode } = note;
            if (newMode === currentMode) {
                return;
            }
            this.doc.updateBlock(note, { displayMode: newMode });
            const noteParent = this.doc.getParent(note);
            assertExists(noteParent);
            const noteParentChildNotes = noteParent.children.filter(block => matchFlavours(block, ['affine:note']));
            const noteParentLastNote = noteParentChildNotes[noteParentChildNotes.length - 1];
            if (currentMode === NoteDisplayMode.EdgelessOnly &&
                newMode !== NoteDisplayMode.EdgelessOnly &&
                note !== noteParentLastNote) {
                // move to the end
                this.doc.moveBlocks([note], noteParent, noteParentLastNote, false);
            }
            // if change note to page only, should clear the selection
            if (newMode === NoteDisplayMode.DocOnly) {
                this.edgeless.service.selection.clear();
            }
        }
        _setStrokeWidth(borderSize) {
            this.notes.forEach(note => {
                this.doc.updateBlock(note, () => {
                    note.edgeless.style.borderSize = borderSize;
                });
            });
        }
        _setStrokeStyle(borderStyle) {
            this.notes.forEach(note => {
                this.doc.updateBlock(note, () => {
                    note.edgeless.style.borderStyle = borderStyle;
                });
            });
        }
        _setStyles({ type, value }) {
            if (type === 'size') {
                this._setStrokeWidth(value);
                return;
            }
            if (type === 'lineStyle') {
                this._setStrokeStyle(value);
            }
        }
        _setCollapse() {
            this.notes.forEach(note => {
                const { collapse, collapsedHeight } = note.edgeless;
                if (collapse) {
                    this.doc.updateBlock(note, () => {
                        note.edgeless.collapse = false;
                    });
                }
                else if (collapsedHeight) {
                    const { xywh, edgeless } = note;
                    const bound = Bound.deserialize(xywh);
                    bound.h = collapsedHeight * (edgeless.scale ?? 1);
                    this.doc.updateBlock(note, () => {
                        note.edgeless.collapse = true;
                        note.xywh = bound.serialize();
                    });
                }
            });
            this.requestUpdate();
        }
        _handleNoteSlicerButtonClick() {
            const surfaceService = this.edgeless.service;
            if (!surfaceService)
                return;
            this.edgeless.slots.toggleNoteSlicer.emit();
        }
        _getScaleLabel(scale) {
            return Math.round(scale * 100) + '%';
        }
        render() {
            const length = this.notes.length;
            const note = this.notes[0];
            const { background, edgeless, displayMode } = note;
            const { shadowType, borderRadius, borderSize, borderStyle } = edgeless.style;
            const { collapse } = edgeless;
            const scale = edgeless.scale ?? 1;
            const currentMode = DisplayModeMap[displayMode];
            const onlyOne = length === 1;
            const isDocOnly = displayMode === NoteDisplayMode.DocOnly;
            const buttons = [
                onlyOne
                    ? html `
            <span class="display-mode-button-label">Show in</span>
            <edgeless-menu-button
              .contentPadding=${'8px'}
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Mode"
                  .tooltip=${'Display mode'}
                  .justify=${'space-between'}
                  .withHover=${true}
                  .labelHeight=${'20px'}
                >
                  <span class="label">${currentMode}</span>
                  ${SmallArrowDownIcon}
                </edgeless-tool-icon-button>
              `}
            >
              <note-display-mode-panel
                slot
                .displayMode=${displayMode}
                .onSelect=${(newMode) => this._setDisplayMode(note, newMode)}
              >
              </note-display-mode-panel>
            </edgeless-menu-button>
          `
                    : nothing,
                isDocOnly
                    ? nothing
                    : html `
            <edgeless-menu-button
              .contentPadding=${'8px'}
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Background"
                  .tooltip=${'Background'}
                >
                  <edgeless-color-button
                    .color=${background}
                  ></edgeless-color-button>
                </edgeless-tool-icon-button>
              `}
            >
              <edgeless-color-panel
                slot
                .value=${background}
                .options=${NOTE_BACKGROUND_COLORS}
                @select=${(e) => this._setBackground(e.detail)}
              >
              </edgeless-color-panel>
            </edgeless-menu-button>
          `,
                isDocOnly
                    ? nothing
                    : html `
            <edgeless-menu-button
              .contentPadding=${'6px'}
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Shadow style"
                  .tooltip=${'Shadow style'}
                >
                  ${NoteShadowIcon}${SmallArrowDownIcon}
                </edgeless-tool-icon-button>
              `}
            >
              <edgeless-note-shadow-panel
                slot
                .value=${shadowType}
                .background=${background}
                .onSelect=${(value) => this._setShadowType(value)}
              >
              </edgeless-note-shadow-panel>
            </edgeless-menu-button>

            <edgeless-menu-button
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Border style"
                  .tooltip=${'Border style'}
                >
                  ${LineStyleIcon}${SmallArrowDownIcon}
                </edgeless-tool-icon-button>
              `}
            >
              <div slot data-orientation="horizontal">
                ${LineStylesPanel({
                        selectedLineSize: borderSize,
                        selectedLineStyle: borderStyle,
                        onClick: event => this._setStyles(event),
                    })}
              </div>
            </edgeless-menu-button>

            <edgeless-menu-button
              ${ref(this._cornersPanelRef)}
              .contentPadding=${'8px'}
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Corners"
                  .tooltip=${'Corners'}
                >
                  ${NoteCornerIcon}${SmallArrowDownIcon}
                </edgeless-tool-icon-button>
              `}
            >
              <edgeless-size-panel
                slot
                .size=${borderRadius}
                .sizeList=${SIZE_LIST}
                .minSize=${0}
                .onSelect=${(size) => this._setBorderRadius(size)}
                .onPopperCose=${() => this._cornersPanelRef.value?.close()}
              >
              </edgeless-size-panel>
            </edgeless-menu-button>
          `,
                onlyOne
                    ? html `
            <edgeless-tool-icon-button
              aria-label="Slicer"
              .tooltip=${getTooltipWithShortcut('Cutting mode', '-')}
              .active=${this.enableNoteSlicer}
              @click=${() => this._handleNoteSlicerButtonClick()}
            >
              ${ScissorsIcon}
            </edgeless-tool-icon-button>
          `
                    : nothing,
                onlyOne ? this.quickConnectButton : nothing,
                html `
        <edgeless-tool-icon-button
          aria-label="Size"
          .tooltip=${collapse ? 'Auto height' : 'Customized height'}
          @click=${() => this._setCollapse()}
        >
          ${collapse ? ExpandIcon : ShrinkIcon}
        </edgeless-tool-icon-button>

        <edgeless-menu-button
          ${ref(this._scalePanelRef)}
          .contentPadding=${'8px'}
          .button=${html `
            <edgeless-tool-icon-button
              aria-label="Scale"
              .tooltip=${'Scale'}
              .justify=${'space-between'}
              .labelHeight=${'20px'}
              .iconContainerWidth=${'65px'}
            >
              <span class="label">${this._getScaleLabel(scale)}</span
              >${SmallArrowDownIcon}
            </edgeless-tool-icon-button>
          `}
        >
          <edgeless-scale-panel
            slot
            .scale=${Math.round(scale * 100)}
            .onSelect=${(scale) => this._setNoteScale(scale)}
            .onPopperCose=${() => this._scalePanelRef.value?.close()}
          ></edgeless-scale-panel>
        </edgeless-menu-button>
      `,
            ];
            return join(buttons.filter(button => button !== nothing), renderMenuDivider);
        }
    };
    return EdgelessChangeNoteButton = _classThis;
})();
export { EdgelessChangeNoteButton };
export function renderNoteButton(edgeless, notes, quickConnectButton) {
    if (!notes?.length)
        return nothing;
    return html `
    <edgeless-change-note-button
      .notes=${notes}
      .edgeless=${edgeless}
      .enableNoteSlicer=${false}
      .quickConnectButton=${quickConnectButton?.pop() ?? nothing}
    >
    </edgeless-change-note-button>
  `;
}
//# sourceMappingURL=change-note-button.js.map