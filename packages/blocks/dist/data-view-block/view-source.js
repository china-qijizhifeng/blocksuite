import { Slot } from '@blocksuite/global/utils';
import { blockQueryViewMap, blockQueryViews } from './views/index.js';
export class BlockQueryViewSource {
    get currentViewId() {
        return this.currentId ?? this.model.views[0].id;
    }
    get views() {
        return this.model.views.map(v => this.viewGet(v.id));
    }
    get currentView() {
        return this.viewGet(this.currentViewId);
    }
    get readonly() {
        return this.model.doc.readonly;
    }
    get allViewMeta() {
        return blockQueryViews;
    }
    constructor(model) {
        this.model = model;
        this.viewMap = new Map();
        this.updateSlot = new Slot();
        this.viewInit = {
            table: () => {
                return {
                    id: this.model.doc.generateBlockId(),
                    name: 'Table View',
                    mode: 'table',
                    columns: [],
                    filter: {
                        type: 'group',
                        op: 'and',
                        conditions: [],
                    },
                };
            },
            kanban: () => {
                return {
                    id: this.model.doc.generateBlockId(),
                    name: 'Kanban View',
                    mode: 'kanban',
                    columns: [],
                    filter: {
                        type: 'group',
                        op: 'and',
                        conditions: [],
                    },
                    header: {
                        iconColumn: 'type',
                    },
                    groupProperties: [],
                };
            },
        };
    }
    checkViewDataUpdate() {
        this.model.views.forEach(v => {
            this.updateSlot.emit({ viewId: v.id });
        });
    }
    selectView(id) {
        this.currentId = id;
        this.updateSlot.emit({});
    }
    viewAdd(viewType) {
        this.model.doc.captureSync();
        const view = this.viewInit[viewType]();
        this.model.doc.transact(() => {
            this.model.views.push(view);
        });
        this.model.applyViewsUpdate();
        return view.id;
    }
    viewGet(id) {
        let result = this.viewMap.get(id);
        if (!result) {
            const getView = () => {
                return this.model.views.find(v => v.id === id);
            };
            const view = getView();
            if (!view) {
                throw new Error('view not found');
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            const slot = new Slot();
            this.updateSlot
                .flatMap(data => {
                if (data.viewId === id) {
                    return { viewId: id };
                }
                return [];
            })
                .pipe(slot);
            result = {
                duplicate() {
                    self.duplicate(id);
                },
                get view() {
                    const view = getView();
                    if (!view) {
                        throw new Error('view not found');
                    }
                    return view;
                },
                updateView: updater => {
                    this.model.doc.captureSync();
                    this.model.updateView(id, updater);
                    this.model.applyViewsUpdate();
                },
                delete: () => {
                    this.model.doc.captureSync();
                    if (this.model.views.length === 1) {
                        this.model.doc.deleteBlock(this.model);
                        return;
                    }
                    this.model.deleteView(id);
                    this.currentId = undefined;
                    this.model.applyViewsUpdate();
                },
                get readonly() {
                    return self.model.doc.readonly;
                },
                updateSlot: slot,
                isDeleted() {
                    return self.model.views.every(v => v.id !== id);
                },
            };
            this.viewMap.set(id, result);
        }
        return result;
    }
    duplicate(id) {
        const newId = this.model.duplicateView(id);
        this.selectView(newId);
    }
    moveTo(id, position) {
        this.model.moveViewTo(id, position);
    }
    getViewMeta(type) {
        return blockQueryViewMap[type];
    }
}
//# sourceMappingURL=view-source.js.map