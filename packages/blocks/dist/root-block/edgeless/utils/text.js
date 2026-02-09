import { assertExists, assertInstanceOf } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { getCursorByCoord } from '../../../surface-block/canvas-renderer/element-renderer/text/utils.js';
import { FontFamily } from '../../../surface-block/consts.js';
import { ShapeElementModel } from '../../../surface-block/element-model/shape.js';
import { TextElementModel } from '../../../surface-block/element-model/text.js';
import { Bound, CanvasElementType, } from '../../../surface-block/index.js';
import { GET_DEFAULT_LINE_COLOR, isTransparent, } from '../components/panel/color-panel.js';
import { EdgelessConnectorLabelEditor } from '../components/text/edgeless-connector-label-editor.js';
import { EdgelessFrameTitleEditor } from '../components/text/edgeless-frame-title-editor.js';
import { EdgelessGroupTitleEditor } from '../components/text/edgeless-group-title-editor.js';
import { EdgelessShapeTextEditor } from '../components/text/edgeless-shape-text-editor.js';
import { EdgelessTextEditor } from '../components/text/edgeless-text-editor.js';
import { SHAPE_FILL_COLOR_BLACK, SHAPE_TEXT_COLOR_PURE_BLACK, SHAPE_TEXT_COLOR_PURE_WHITE, } from './consts.js';
export function mountTextElementEditor(textElement, edgeless, focusCoord) {
    let cursorIndex = textElement.text.length;
    if (focusCoord) {
        cursorIndex = Math.min(getCursorByCoord(textElement, focusCoord), cursorIndex);
    }
    const textEditor = new EdgelessTextEditor();
    textEditor.edgeless = edgeless;
    textEditor.element = textElement;
    const rootElementContainer = edgeless.rootElementContainer;
    rootElementContainer.append(textEditor);
    textEditor.updateComplete
        .then(() => {
        textEditor.inlineEditor?.focusIndex(cursorIndex);
    })
        .catch(console.error);
    edgeless.tools.switchToDefaultMode({
        elements: [textElement.id],
        editing: true,
    });
}
export function mountShapeTextEditor(shapeElement, edgeless) {
    if (!shapeElement.text) {
        const text = new DocCollection.Y.Text();
        const { fillColor } = shapeElement;
        const color = isTransparent(fillColor)
            ? GET_DEFAULT_LINE_COLOR()
            : fillColor === SHAPE_FILL_COLOR_BLACK
                ? SHAPE_TEXT_COLOR_PURE_WHITE
                : SHAPE_TEXT_COLOR_PURE_BLACK;
        edgeless.service.updateElement(shapeElement.id, {
            text,
            color,
            fontFamily: shapeElement.shapeStyle === 'General'
                ? FontFamily.Inter
                : FontFamily.Kalam,
        });
    }
    const updatedElement = edgeless.service.getElementById(shapeElement.id);
    assertInstanceOf(updatedElement, ShapeElementModel);
    const shapeEditor = new EdgelessShapeTextEditor();
    shapeEditor.element = updatedElement;
    shapeEditor.edgeless = edgeless;
    shapeEditor.mountEditor = mountShapeTextEditor;
    const rootElementContainer = edgeless.rootElementContainer;
    rootElementContainer.append(shapeEditor);
    edgeless.tools.switchToDefaultMode({
        elements: [shapeElement.id],
        editing: true,
    });
}
export function mountFrameTitleEditor(frame, edgeless) {
    const frameEditor = new EdgelessFrameTitleEditor();
    frameEditor.frameModel = frame;
    frameEditor.edgeless = edgeless;
    edgeless.rootElementContainer.append(frameEditor);
    edgeless.tools.switchToDefaultMode({
        elements: [frame.id],
        editing: true,
    });
}
export function mountGroupTitleEditor(group, edgeless) {
    const groupEditor = new EdgelessGroupTitleEditor();
    groupEditor.group = group;
    groupEditor.edgeless = edgeless;
    edgeless.rootElementContainer.append(groupEditor);
    edgeless.tools.switchToDefaultMode({
        elements: [group.id],
        editing: true,
    });
}
/**
 * @deprecated
 *
 * Canvas Text has been deprecated
 */
export function addText(edgeless, event) {
    const [x, y] = edgeless.service.viewport.toModelCoord(event.x, event.y);
    const selected = edgeless.service.pickElement(x, y);
    if (!selected) {
        const [modelX, modelY] = edgeless.service.viewport.toModelCoord(event.x, event.y);
        const id = edgeless.service.addElement(CanvasElementType.TEXT, {
            xywh: new Bound(modelX, modelY, 32, 32).serialize(),
            text: new DocCollection.Y.Text(),
        });
        edgeless.doc.captureSync();
        const textElement = edgeless.service.getElementById(id);
        assertExists(textElement);
        if (textElement instanceof TextElementModel) {
            mountTextElementEditor(textElement, edgeless);
        }
    }
}
export function mountConnectorLabelEditor(connector, edgeless, point) {
    let text = connector.text;
    if (!text) {
        text = new DocCollection.Y.Text();
        connector.text = text;
        connector.labelStyle.color = GET_DEFAULT_LINE_COLOR();
        if (point) {
            const center = connector.getNearestPoint(point);
            const distance = connector.getOffsetDistanceByPoint(center);
            const bounds = Bound.fromXYWH(connector.labelXYWH || [0, 0, 16, 16]);
            bounds.center = center;
            connector.labelOffset.distance = distance;
            connector.labelXYWH = bounds.toXYWH();
        }
    }
    const editor = new EdgelessConnectorLabelEditor();
    editor.connector = connector;
    editor.edgeless = edgeless;
    edgeless.rootElementContainer.append(editor);
    editor.updateComplete
        .then(() => {
        editor.inlineEditor?.focusEnd();
    })
        .catch(console.error);
    edgeless.tools.switchToDefaultMode({
        elements: [connector.id],
        editing: true,
    });
}
//# sourceMappingURL=text.js.map