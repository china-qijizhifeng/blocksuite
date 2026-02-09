import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { ThemeObserver } from '../_common/theme/theme-observer.js';
import { Renderer } from '../surface-block/index.js';
import { getSurfaceBlock } from './utils.js';
export class SurfaceRefRenderer {
    get surfaceService() {
        return this.std.spec.getService('affine:surface');
    }
    get surfaceRenderer() {
        return this._surfaceRenderer;
    }
    get surfaceModel() {
        return this._surfaceModel;
    }
    constructor(id, doc, std, options = {
        enableStackingCanvas: false,
    }) {
        this.id = id;
        this.doc = doc;
        this.std = std;
        this._surfaceModel = null;
        this._disposables = new DisposableGroup();
        this.slots = {
            surfaceRendererInit: new Slot(),
            surfaceRendererRefresh: new Slot(),
            surfaceModelChanged: new Slot(),
            mounted: new Slot(),
            unmounted: new Slot(),
        };
        const themeObserver = new ThemeObserver();
        const renderer = new Renderer({
            layerManager: this.surfaceService.layer,
            enableStackingCanvas: options.enableStackingCanvas,
            provider: {
                getVariableColor: (variable) => themeObserver.getVariableValue(variable),
            },
        });
        themeObserver.observe(document.documentElement);
        this._surfaceRenderer = renderer;
        this.slots.unmounted.once(() => {
            themeObserver.dispose();
        });
    }
    _initSurfaceRenderer() {
        this.slots.surfaceRendererInit.emit();
    }
    _initSurfaceModel() {
        const init = () => {
            const model = getSurfaceBlock(this.doc);
            this._surfaceModel = model;
            if (!model)
                return;
            this.slots.surfaceModelChanged.emit(model);
        };
        init();
        if (!this._surfaceModel) {
            this._disposables.add(this.doc.slots.blockUpdated.on(({ type }) => {
                if (type === 'add' &&
                    !this._surfaceModel &&
                    getSurfaceBlock(this.doc)) {
                    init();
                }
            }));
        }
    }
    mount() {
        if (this._disposables.disposed) {
            this._disposables = new DisposableGroup();
        }
        this._initSurfaceModel();
        this._initSurfaceRenderer();
        this.slots.mounted.emit();
    }
    unmount() {
        this._disposables.dispose();
        this.slots.unmounted.emit();
    }
    getModel(id) {
        return (this.doc.getBlockById(id) ??
            this._surfaceModel?.getElementById(id) ??
            null);
    }
}
//# sourceMappingURL=surface-ref-renderer.js.map