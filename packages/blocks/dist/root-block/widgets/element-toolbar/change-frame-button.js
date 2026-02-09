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
import { WithDisposable } from '@blocksuite/block-std';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { toast } from '../../../_common/components/toast.js';
import { NoteIcon, RenameIcon } from '../../../_common/icons/index.js';
import { NoteDisplayMode } from '../../../_common/types.js';
import { matchFlavours } from '../../../_common/utils/model.js';
import { deserializeXYWH, serializeXYWH, } from '../../../surface-block/index.js';
import { renderMenuDivider } from '../../edgeless/components/buttons/menu-button.js';
import { DEFAULT_NOTE_HEIGHT } from '../../edgeless/utils/consts.js';
import { mountFrameTitleEditor } from '../../edgeless/utils/text.js';
const FRAME_BACKGROUND = [
    '--affine-tag-gray',
    '--affine-tag-red',
    '--affine-tag-orange',
    '--affine-tag-yellow',
    '--affine-tag-green',
    '--affine-tag-teal',
    '--affine-tag-blue',
    '--affine-tag-purple',
    '--affine-tag-pink',
    '--affine-palette-transparent',
];
let EdgelessChangeFrameButton = (() => {
    let _classDecorators = [customElement('edgeless-change-frame-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _frames_decorators;
    let _frames_initializers = [];
    let _frames_extraInitializers = [];
    var EdgelessChangeFrameButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _edgeless_decorators = [property({ attribute: false })];
            _frames_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _frames_decorators, { kind: "accessor", name: "frames", static: false, private: false, access: { has: obj => "frames" in obj, get: obj => obj.frames, set: (obj, value) => { obj.frames = value; } }, metadata: _metadata }, _frames_initializers, _frames_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeFrameButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #frames_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _frames_initializers, []));
        get frames() { return this.#frames_accessor_storage; }
        set frames(value) { this.#frames_accessor_storage = value; }
        get service() {
            return this.edgeless.service;
        }
        _setFrameBackground(color) {
            this.frames.forEach(frame => {
                this.service.updateElement(frame.id, { background: color });
            });
        }
        _insertIntoPage() {
            if (!this.edgeless.doc.root)
                return;
            const rootModel = this.edgeless.doc.root;
            const notes = rootModel.children.filter(model => matchFlavours(model, ['affine:note']) &&
                model.displayMode !== NoteDisplayMode.EdgelessOnly);
            const lastNote = notes[notes.length - 1];
            const referenceFrame = this.frames[0];
            let targetParent = lastNote?.id;
            if (!lastNote) {
                const targetXYWH = deserializeXYWH(referenceFrame.xywh);
                targetXYWH[1] = targetXYWH[1] + targetXYWH[3];
                targetXYWH[3] = DEFAULT_NOTE_HEIGHT;
                const newAddedNote = this.edgeless.doc.addBlock('affine:note', {
                    xywh: serializeXYWH(...targetXYWH),
                }, rootModel.id);
                targetParent = newAddedNote;
            }
            this.edgeless.doc.addBlock('affine:surface-ref', {
                reference: this.frames[0].id,
                refFlavour: 'affine:frame',
            }, targetParent);
            toast(this.edgeless.host, 'Frame has been inserted into doc');
        }
        render() {
            const { frames } = this;
            const onlyOne = frames.length === 1;
            const background = frames[0].background;
            return join([
                onlyOne
                    ? html `
              <edgeless-tool-icon-button
                arai-label=${'Insert into Page'}
                .tooltip=${'Insert into Page'}
                .iconSize=${'20px'}
                .labelHeight=${'20px'}
                @click=${this._insertIntoPage}
              >
                ${NoteIcon}
                <span class="label">Insert into Page</span>
              </edgeless-tool-icon-button>
            `
                    : nothing,
                onlyOne
                    ? html `
              <edgeless-tool-icon-button
                aria-label="Rename"
                .tooltip=${'Rename'}
                .iconSize=${'20px'}
                @click=${() => mountFrameTitleEditor(this.frames[0], this.edgeless)}
              >
                ${RenameIcon}
              </edgeless-tool-icon-button>
            `
                    : nothing,
                html `
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
              .options=${FRAME_BACKGROUND}
              @select=${(e) => this._setFrameBackground(e.detail)}
            >
            </edgeless-color-panel>
          </edgeless-menu-button>
        `,
            ].filter(button => button !== nothing), renderMenuDivider);
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _frames_extraInitializers);
        }
    };
    return EdgelessChangeFrameButton = _classThis;
})();
export { EdgelessChangeFrameButton };
export function renderFrameButton(edgeless, frames) {
    if (!frames?.length)
        return nothing;
    return html `
    <edgeless-change-frame-button
      .edgeless=${edgeless}
      .frames=${frames}
    ></edgeless-change-frame-button>
  `;
}
//# sourceMappingURL=change-frame-button.js.map