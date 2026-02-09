import { UIEventState, UIEventStateContext } from '../base.js';
import { EventScopeSourceType, EventSourceState } from '../state/source.js';
export class RangeControl {
    constructor(_dispatcher) {
        this._dispatcher = _dispatcher;
        this._prev = null;
        this._compositionUpdate = (event) => {
            const scope = this._buildScope('compositionUpdate');
            this._dispatcher.run('compositionUpdate', this._createContext(event), scope);
        };
        this._compositionStart = (event) => {
            const scope = this._buildScope('compositionStart');
            this._dispatcher.run('compositionStart', this._createContext(event), scope);
        };
        this._compositionEnd = (event) => {
            const scope = this._buildScope('compositionEnd');
            this._dispatcher.run('compositionEnd', this._createContext(event), scope);
        };
        this._selectionChange = (event) => {
            const selection = document.getSelection();
            if (!selection)
                return;
            if (!selection.containsNode(this._dispatcher.host, true))
                return;
            if (selection.containsNode(this._dispatcher.host))
                return;
            const scope = this._buildScope('selectionChange');
            this._dispatcher.run('selectionChange', this._createContext(event), scope);
        };
        this._buildScope = (eventName) => {
            let scope;
            const selection = document.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                scope = this._buildEventScopeByNativeRange(eventName, range);
                this._prev = range;
            }
            else if (this._prev !== null) {
                scope = this._buildEventScopeByNativeRange(eventName, this._prev);
                this._prev = null;
            }
            return scope;
        };
    }
    _createContext(event) {
        return UIEventStateContext.from(new UIEventState(event), new EventSourceState({
            event,
            sourceType: EventScopeSourceType.Selection,
        }));
    }
    _buildEventScopeByNativeRange(name, range) {
        const blocks = this._findBlockElementPath(range);
        const paths = blocks
            .map(blockView => {
            return blockView;
        })
            .filter((path) => !!path);
        const flavours = Array.from(new Set(paths
            .flatMap(path => {
            return path.map(blockId => {
                return this._dispatcher.std.doc.getBlockById(blockId)?.flavour;
            });
        })
            .filter((flavour) => {
            return !!flavour;
        }))).reverse();
        return this._dispatcher.buildEventScope(name, flavours, paths);
    }
    _findBlockElementPath(range) {
        const start = range.startContainer;
        const end = range.endContainer;
        const ancestor = range.commonAncestorContainer;
        const getBlockView = (node) => {
            const el = node instanceof Element ? node : node.parentElement;
            // TODO(mirone/#6534): find a better way to get block element from a node
            return el?.closest('[data-block-id]');
        };
        if (ancestor.nodeType === Node.TEXT_NODE) {
            const leaf = getBlockView(ancestor);
            if (leaf) {
                return [leaf.path];
            }
        }
        const nodes = new Set();
        let startRecorded = false;
        const dfsDOMSearch = (current, ancestor) => {
            if (!current) {
                return;
            }
            if (current === ancestor) {
                return;
            }
            if (current === end) {
                nodes.add(current);
                startRecorded = false;
                return;
            }
            if (current === start) {
                startRecorded = true;
            }
            if (startRecorded) {
                if (current.nodeType === Node.TEXT_NODE ||
                    current.nodeType === Node.ELEMENT_NODE) {
                    nodes.add(current);
                }
            }
            dfsDOMSearch(current.firstChild, ancestor);
            dfsDOMSearch(current.nextSibling, ancestor);
        };
        dfsDOMSearch(ancestor.firstChild, ancestor);
        const blocks = new Set();
        nodes.forEach(node => {
            const blockView = getBlockView(node);
            if (!blockView) {
                return;
            }
            if (blocks.has(blockView.path)) {
                return;
            }
            blocks.add(blockView.path);
        });
        return Array.from(blocks);
    }
    listen() {
        this._dispatcher.disposables.addFromEvent(document, 'selectionchange', this._selectionChange);
        this._dispatcher.disposables.addFromEvent(this._dispatcher.host, 'compositionstart', this._compositionStart);
        this._dispatcher.disposables.addFromEvent(this._dispatcher.host, 'compositionend', this._compositionEnd);
        this._dispatcher.disposables.addFromEvent(this._dispatcher.host, 'compositionupdate', this._compositionUpdate);
    }
}
//# sourceMappingURL=range.js.map