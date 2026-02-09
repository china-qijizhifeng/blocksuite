import { beforeEach, describe, expect, test } from 'vitest';
import { getDocRootBlock } from '../utils/edgeless.js';
import { setupEditor } from '../utils/setup.js';
describe('apply last props', () => {
    let edgelessRoot;
    let service;
    beforeEach(async () => {
        sessionStorage.removeItem('blocksuite:prop:record');
        const cleanup = await setupEditor('edgeless');
        edgelessRoot = getDocRootBlock(window.doc, window.editor, 'edgeless');
        service = edgelessRoot.service;
        return cleanup;
    });
    test('shape', () => {
        const id = service.addElement('shape', { shapeType: 'rect' });
        const shape = service.getElementById(id);
        expect(shape.fillColor).toBe('--affine-palette-shape-yellow');
        expect(shape.strokeColor).toBe('--affine-palette-line-yellow');
        expect(shape.shapeStyle).toBe('General');
        service.updateElement(id, { fillColor: '--affine-palette-shape-orange' });
        const secondShape = service.getElementById(service.addElement('shape', { shapeType: 'rect' }));
        expect(secondShape.fillColor).toBe('--affine-palette-shape-orange');
    });
    test('connector', () => {
        const id = service.addElement('connector', { mode: 0 });
        const connector = service.getElementById(id);
        expect(connector.stroke).toBe('--affine-palette-line-grey');
        expect(connector.strokeWidth).toBe(2);
        expect(connector.strokeStyle).toBe('solid');
        expect(connector.frontEndpointStyle).toBe('None');
        expect(connector.rearEndpointStyle).toBe('Arrow');
        service.updateElement(id, { strokeWidth: 10 });
        const secondConnector = service.getElementById(service.addElement('connector', { mode: 1 }));
        expect(secondConnector.strokeWidth).toBe(10);
    });
    test('brush', () => {
        const id = service.addElement('brush', {});
        const brush = service.getElementById(id);
        expect(brush.color).toBe('--affine-palette-line-black');
        expect(brush.lineWidth).toBe(4);
        service.updateElement(id, { lineWidth: 10 });
        const secondBrush = service.getElementById(service.addElement('brush', {}));
        expect(secondBrush.lineWidth).toBe(10);
    });
    test('text', () => {
        const id = service.addElement('text', {});
        const text = service.getElementById(id);
        expect(text.fontSize).toBe(24);
        service.updateElement(id, { fontSize: 36 });
        const secondText = service.getElementById(service.addElement('text', {}));
        expect(secondText.fontSize).toBe(36);
    });
});
//# sourceMappingURL=last-props.spec.js.map