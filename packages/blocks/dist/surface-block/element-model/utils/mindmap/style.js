import { last } from '../../../../_common/utils/iterable.js';
import { fitContent } from '../../../canvas-renderer/element-renderer/shape/utils.js';
import { FontFamily, FontWeight, StrokeStyle } from '../../../consts.js';
import { ConnectorMode } from '../../connector.js';
export class MindmapStyleGetter {
}
export class StyleOne extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._colorOrders = [
            '--affine-palette-line-purple',
            '--affine-palette-line-magenta',
            '--affine-palette-line-orange',
            '--affine-palette-line-yellow',
            '--affine-palette-line-green',
            '#7ae2d5',
        ];
        this.root = {
            radius: 8,
            strokeWidth: 4,
            strokeColor: '#84CFFF',
            fontFamily: FontFamily.Poppins,
            fontSize: 20,
            fontWeight: FontWeight.SemiBold,
            color: '--affine-black',
            filled: true,
            fillColor: '--affine-white',
            padding: [11, 22],
            shadow: {
                offsetX: 0,
                offsetY: 6,
                blur: 12,
                color: 'rgba(0, 0, 0, 0.14)',
            },
        };
    }
    _getColor(number) {
        return this._colorOrders[number % this._colorOrders.length];
    }
    getNodeStyle(_, path) {
        const color = this._getColor(path[1] ?? 0);
        return {
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke: color,
                strokeWidth: 3,
                mode: ConnectorMode.Curve,
            },
            node: {
                radius: 8,
                strokeWidth: 3,
                strokeColor: color,
                fontFamily: FontFamily.Poppins,
                fontSize: 16,
                fontWeight: FontWeight.Medium,
                color: '--affine-black',
                filled: true,
                fillColor: '--affine-white',
                padding: [6, 22],
                shadow: {
                    offsetX: 0,
                    offsetY: 6,
                    blur: 12,
                    color: 'rgba(0, 0, 0, 0.14)',
                },
            },
        };
    }
}
export const styleOne = new StyleOne();
export class StyleTwo extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._colorOrders = [
            '--affine-palette-shape-blue',
            '#7ae2d5',
            '--affine-palette-shape-yellow',
        ];
        this.root = {
            radius: 3,
            strokeWidth: 3,
            strokeColor: '--affine-black',
            fontFamily: FontFamily.Poppins,
            fontSize: 18,
            fontWeight: FontWeight.SemiBold,
            color: '--affine-palette-shape-black',
            filled: true,
            fillColor: '--affine-palette-shape-orange',
            padding: [11, 22],
            shadow: {
                blur: 0,
                offsetX: 3,
                offsetY: 3,
                color: '--affine-black',
            },
        };
    }
    _getColor(number) {
        return number >= this._colorOrders.length
            ? last(this._colorOrders)
            : this._colorOrders[number];
    }
    getNodeStyle(_, path) {
        const color = this._getColor(path.length - 2);
        return {
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke: '--affine-black',
                strokeWidth: 3,
                mode: ConnectorMode.Orthogonal,
            },
            node: {
                radius: 3,
                strokeWidth: 3,
                strokeColor: '--affine-black',
                fontFamily: FontFamily.Poppins,
                fontSize: 16,
                fontWeight: FontWeight.SemiBold,
                color: '--affine-palette-shape-black',
                filled: true,
                fillColor: color,
                padding: [6, 22],
                shadow: {
                    blur: 0,
                    offsetX: 3,
                    offsetY: 3,
                    color: '--affine-black',
                },
            },
        };
    }
}
export const styleTwo = new StyleTwo();
export class StyleThree extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._strokeColor = [
            '--affine-palette-line-yellow',
            '--affine-palette-line-green',
            '--affine-palette-line-teal',
        ];
        this.root = {
            radius: 10,
            strokeWidth: 0,
            strokeColor: 'transparent',
            fontFamily: FontFamily.Poppins,
            fontSize: 16,
            fontWeight: FontWeight.Medium,
            color: '--affine-palette-shape-black',
            filled: true,
            fillColor: '--affine-palette-shape-yellow',
            padding: [10, 22],
            shadow: {
                blur: 12,
                offsetX: 0,
                offsetY: 0,
                color: 'rgba(66, 65, 73, 0.18)',
            },
        };
    }
    _getColor(number) {
        return this._strokeColor[number % this._strokeColor.length];
    }
    getNodeStyle(_, path) {
        const strokeColor = this._getColor(path.length - 2);
        return {
            node: {
                radius: 10,
                strokeWidth: 0,
                strokeColor: 'transparent',
                fontFamily: FontFamily.Poppins,
                fontSize: 16,
                fontWeight: FontWeight.Medium,
                color: '--affine-palette-shape-black',
                filled: true,
                fillColor: '--affine-palette-shape-white',
                padding: [6, 22],
                shadow: {
                    blur: 12,
                    offsetX: 0,
                    offsetY: 0,
                    color: 'rgba(66, 65, 73, 0.18)',
                },
            },
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke: strokeColor,
                strokeWidth: 2,
                mode: ConnectorMode.Curve,
            },
        };
    }
}
export const styleThree = new StyleThree();
export class StyleFour extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._colors = [
            '--affine-palette-shape-purple',
            '--affine-palette-shape-magenta',
            '--affine-palette-shape-orange',
            '--affine-palette-shape-yellow',
            '--affine-palette-shape-green',
            '--affine-palette-shape-blue',
        ];
        this.root = {
            radius: 0,
            strokeWidth: 0,
            strokeColor: 'transparent',
            fontFamily: FontFamily.Kalam,
            fontSize: 22,
            fontWeight: FontWeight.Bold,
            color: '--affine-black',
            filled: true,
            fillColor: 'transparent',
            padding: [0, 10],
        };
    }
    _getColor(order) {
        return this._colors[order % this._colors.length];
    }
    getNodeStyle(_, path) {
        const stroke = this._getColor(path[1] ?? 0);
        return {
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke,
                strokeWidth: 3,
                mode: ConnectorMode.Curve,
            },
            node: {
                ...this.root,
                fontSize: 18,
                padding: [1.5, 10],
            },
        };
    }
}
export const styleFour = new StyleFour();
export var MindmapStyle;
(function (MindmapStyle) {
    MindmapStyle[MindmapStyle["ONE"] = 1] = "ONE";
    MindmapStyle[MindmapStyle["TWO"] = 2] = "TWO";
    MindmapStyle[MindmapStyle["THREE"] = 3] = "THREE";
    MindmapStyle[MindmapStyle["FOUR"] = 4] = "FOUR";
})(MindmapStyle || (MindmapStyle = {}));
export const mindmapStyleGetters = {
    [MindmapStyle.ONE]: styleOne,
    [MindmapStyle.TWO]: styleTwo,
    [MindmapStyle.THREE]: styleThree,
    [MindmapStyle.FOUR]: styleFour,
};
export const applyNodeStyle = (node, nodeStyle, shouldFitContent = false) => {
    Object.entries(nodeStyle).forEach(([key, value]) => {
        // @ts-ignore
        if (node.element[key] !== value) {
            // @ts-ignore
            node.element[key] = value;
        }
    });
    shouldFitContent && fitContent(node.element);
};
//# sourceMappingURL=style.js.map