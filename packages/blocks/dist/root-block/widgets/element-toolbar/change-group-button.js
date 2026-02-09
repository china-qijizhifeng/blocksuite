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
import { NoteIcon, RenameIcon, UngroupButtonIcon, } from '../../../_common/icons/index.js';
import { NoteDisplayMode } from '../../../_common/types.js';
import { matchFlavours } from '../../../_common/utils/model.js';
import { deserializeXYWH, serializeXYWH, } from '../../../surface-block/index.js';
import { renderMenuDivider } from '../../edgeless/components/buttons/menu-button.js';
import { DEFAULT_NOTE_HEIGHT } from '../../edgeless/utils/consts.js';
import { mountGroupTitleEditor } from '../../edgeless/utils/text.js';
let EdgelessChangeGroupButton = (() => {
    let _classDecorators = [customElement('edgeless-change-group-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _groups_decorators;
    let _groups_initializers = [];
    let _groups_extraInitializers = [];
    var EdgelessChangeGroupButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _edgeless_decorators = [property({ attribute: false })];
            _groups_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _groups_decorators, { kind: "accessor", name: "groups", static: false, private: false, access: { has: obj => "groups" in obj, get: obj => obj.groups, set: (obj, value) => { obj.groups = value; } }, metadata: _metadata }, _groups_initializers, _groups_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeGroupButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #groups_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _groups_initializers, void 0));
        get groups() { return this.#groups_accessor_storage; }
        set groups(value) { this.#groups_accessor_storage = value; }
        _insertIntoPage() {
            if (!this.edgeless.doc.root)
                return;
            const rootModel = this.edgeless.doc.root;
            const notes = rootModel.children.filter(model => matchFlavours(model, ['affine:note']) &&
                model.displayMode !== NoteDisplayMode.EdgelessOnly);
            const lastNote = notes[notes.length - 1];
            const referenceGroup = this.groups[0];
            let targetParent = lastNote?.id;
            if (!lastNote) {
                const targetXYWH = deserializeXYWH(referenceGroup.xywh);
                targetXYWH[1] = targetXYWH[1] + targetXYWH[3];
                targetXYWH[3] = DEFAULT_NOTE_HEIGHT;
                const newAddedNote = this.edgeless.doc.addBlock('affine:note', {
                    xywh: serializeXYWH(...targetXYWH),
                }, rootModel.id);
                targetParent = newAddedNote;
            }
            this.edgeless.doc.addBlock('affine:surface-ref', {
                reference: this.groups[0].id,
                refFlavour: 'group',
            }, targetParent);
            toast(this.edgeless.host, 'Group has been inserted into page');
        }
        render() {
            const { groups } = this;
            const onlyOne = groups.length === 1;
            return join([
                onlyOne
                    ? html `
              <edgeless-tool-icon-button
                aria-label="Insert into Page"
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
                class=${'edgeless-component-toolbar-group-rename-button'}
                aria-label="Rename"
                .tooltip=${'Rename'}
                .iconSize=${'20px'}
                @click=${() => mountGroupTitleEditor(groups[0], this.edgeless)}
              >
                ${RenameIcon}
              </edgeless-tool-icon-button>
            `
                    : nothing,
                html `
          <edgeless-tool-icon-button
            class=${'edgeless-component-toolbar-ungroup-button'}
            aria-label="Ungroup"
            .tooltip=${'Ungroup'}
            .iconSize=${'20px'}
            @click=${() => groups.forEach(group => this.edgeless.service.ungroup(group))}
          >
            ${UngroupButtonIcon}
          </edgeless-tool-icon-button>
        `,
            ].filter(button => button !== nothing), renderMenuDivider);
        }
        createRenderRoot() {
            return this;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _groups_extraInitializers);
        }
    };
    return EdgelessChangeGroupButton = _classThis;
})();
export { EdgelessChangeGroupButton };
export function renderGroupButton(edgeless, groups) {
    if (!groups?.length)
        return nothing;
    return html `
    <edgeless-change-group-button .edgeless=${edgeless} .groups=${groups}>
    </edgeless-change-group-button>
  `;
}
//# sourceMappingURL=change-group-button.js.map