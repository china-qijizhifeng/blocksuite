import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { isPlainObject, recursive } from 'merge';
import { z } from 'zod';
import { DEFAULT_NOTE_BACKGROUND_COLOR, DEFAULT_NOTE_SHADOW, NoteBackgroundColorsSchema, NoteShadowsSchema, } from '../../_common/edgeless/note/consts.js';
import { LineWidth, NoteDisplayMode } from '../../_common/types.js';
import { DEFAULT_CONNECTOR_COLOR, GET_DEFAULT_LINE_COLOR, GET_DEFAULT_TEXT_COLOR, LineColorsSchema, } from '../../root-block/edgeless/components/panel/color-panel.js';
import { FontFamily, FontStyle, FontWeight, ShapeStyle, StrokeStyle, TextAlign, TextVerticalAlign, } from '../consts.js';
import { ConnectorMode, DEFAULT_FRONT_END_POINT_STYLE, DEFAULT_REAR_END_POINT_STYLE, } from '../element-model/connector.js';
import { DEFAULT_SHAPE_FILL_COLOR, DEFAULT_SHAPE_STROKE_COLOR, DEFAULT_SHAPE_TEXT_COLOR, FillColorsSchema, SHAPE_TEXT_FONT_SIZE, ShapeType, StrokeColorsSchema, } from '../elements/shape/consts.js';
const ConnectorEndpointSchema = z.enum([
    'None',
    'Arrow',
    'Triangle',
    'Circle',
    'Diamond',
]);
const StrokeStyleSchema = z.nativeEnum(StrokeStyle);
const LineWidthSchema = z.nativeEnum(LineWidth);
const ShapeStyleSchema = z.nativeEnum(ShapeStyle);
const ShapeTextFontSizeSchema = z.nativeEnum(SHAPE_TEXT_FONT_SIZE);
const FontFamilySchema = z.nativeEnum(FontFamily);
const FontWeightSchema = z.nativeEnum(FontWeight);
const FontStyleSchema = z.nativeEnum(FontStyle);
const TextAlignSchema = z.nativeEnum(TextAlign);
const TextVerticalAlignSchema = z.nativeEnum(TextVerticalAlign);
const ShapeTypeSchema = z.nativeEnum(ShapeType);
const NoteDisplayModeSchema = z.nativeEnum(NoteDisplayMode);
const LastPropsSchema = z.object({
    connector: z.object({
        frontEndpointStyle: ConnectorEndpointSchema,
        rearEndpointStyle: ConnectorEndpointSchema,
        strokeStyle: StrokeStyleSchema,
        stroke: LineColorsSchema,
        strokeWidth: LineWidthSchema,
        rough: z.boolean(),
        mode: z.number().optional(),
    }),
    brush: z.object({
        color: LineColorsSchema,
        lineWidth: LineWidthSchema,
    }),
    shape: z.object({
        shapeType: ShapeTypeSchema,
        fillColor: FillColorsSchema,
        strokeColor: StrokeColorsSchema,
        shapeStyle: ShapeStyleSchema,
        filled: z.boolean(),
        radius: z.number(),
        strokeWidth: z.number().optional(),
        strokeStyle: StrokeStyleSchema.optional(),
        color: z.string().optional(),
        fontSize: ShapeTextFontSizeSchema.optional(),
        fontFamily: FontFamilySchema.optional(),
        fontWeight: FontWeightSchema.optional(),
        fontStyle: FontStyleSchema.optional(),
        textAlign: TextAlignSchema.optional(),
        textHorizontalAlign: TextAlignSchema.optional(),
        textVerticalAlign: TextVerticalAlignSchema.optional(),
        roughness: z.number().optional(),
    }),
    text: z.object({
        color: z.string(),
        fontFamily: FontFamilySchema,
        textAlign: TextAlignSchema,
        fontWeight: FontWeightSchema,
        fontStyle: FontStyleSchema,
        fontSize: z.number(),
    }),
    'affine:note': z.object({
        background: NoteBackgroundColorsSchema,
        displayMode: NoteDisplayModeSchema.optional(),
        edgeless: z.object({
            style: z.object({
                borderRadius: z.number(),
                borderSize: z.number(),
                borderStyle: StrokeStyleSchema,
                shadowType: NoteShadowsSchema,
            }),
        }),
    }),
});
const SESSION_PROP_KEY = 'blocksuite:prop:record';
const SessionPropsSchema = z.object({
    viewport: z.union([
        z.object({
            centerX: z.number(),
            centerY: z.number(),
            zoom: z.number(),
        }),
        z.object({
            xywh: z.string(),
            padding: z
                .tuple([z.number(), z.number(), z.number(), z.number()])
                .optional(),
        }),
    ]),
    templateCache: z.string(),
    remoteColor: z.string(),
    showBidirectional: z.boolean(),
});
const LocalPropsSchema = z.object({
    presentBlackBackground: z.boolean(),
    presentFillScreen: z.boolean(),
    presentHideToolbar: z.boolean(),
    autoHideEmbedHTMLFullScreenToolbar: z.boolean(),
});
function isLocalProp(key) {
    return key in LocalPropsSchema.shape;
}
function isSessionProp(key) {
    return key in SessionPropsSchema.shape;
}
export class EditPropsStore {
    constructor(_service) {
        this._service = _service;
        this._lastProps = {
            connector: {
                frontEndpointStyle: DEFAULT_FRONT_END_POINT_STYLE,
                rearEndpointStyle: DEFAULT_REAR_END_POINT_STYLE,
                stroke: DEFAULT_CONNECTOR_COLOR,
                strokeStyle: StrokeStyle.Solid,
                strokeWidth: LineWidth.Two,
                rough: false,
                mode: ConnectorMode.Curve,
            },
            brush: {
                color: GET_DEFAULT_LINE_COLOR(),
                lineWidth: LineWidth.Four,
            },
            shape: {
                color: DEFAULT_SHAPE_TEXT_COLOR,
                shapeType: ShapeType.Rect,
                fillColor: DEFAULT_SHAPE_FILL_COLOR,
                strokeColor: DEFAULT_SHAPE_STROKE_COLOR,
                strokeStyle: StrokeStyle.Solid,
                strokeWidth: LineWidth.Two,
                shapeStyle: ShapeStyle.General,
                filled: true,
                radius: 0,
            },
            text: {
                color: GET_DEFAULT_TEXT_COLOR(),
                fontFamily: FontFamily.Inter,
                textAlign: TextAlign.Left,
                fontWeight: FontWeight.Regular,
                fontStyle: FontStyle.Normal,
                fontSize: 24,
            },
            'affine:note': {
                background: DEFAULT_NOTE_BACKGROUND_COLOR,
                displayMode: NoteDisplayMode.DocAndEdgeless,
                edgeless: {
                    style: {
                        borderRadius: 0,
                        borderSize: 4,
                        borderStyle: StrokeStyle.None,
                        shadowType: DEFAULT_NOTE_SHADOW,
                    },
                },
            },
        };
        this._disposables = new DisposableGroup();
        this.slots = {
            lastPropsUpdated: new Slot(),
            itemUpdated: new Slot(),
        };
        const props = sessionStorage.getItem(SESSION_PROP_KEY);
        if (props) {
            const result = LastPropsSchema.safeParse(JSON.parse(props));
            if (result.success) {
                this._lastProps = result.data;
            }
        }
    }
    _getKey(key) {
        const id = this._service.doc.id;
        switch (key) {
            case 'viewport':
                return 'blocksuite:' + id + ':edgelessViewport';
            case 'presentBlackBackground':
                return 'blocksuite:presentation:blackBackground';
            case 'presentFillScreen':
                return 'blocksuite:presentation:fillScreen';
            case 'presentHideToolbar':
                return 'blocksuite:presentation:hideToolbar';
            case 'templateCache':
                return 'blocksuite:' + id + ':templateTool';
            case 'remoteColor':
                return 'blocksuite:remote-color';
            case 'showBidirectional':
                return 'blocksuite:' + id + ':showBidirectional';
            case 'autoHideEmbedHTMLFullScreenToolbar':
                return 'blocksuite:embedHTML:autoHideFullScreenToolbar';
            default:
                return key;
        }
    }
    _getStorage(key) {
        return isSessionProp(key) ? sessionStorage : localStorage;
    }
    getLastProps(type) {
        return this._lastProps[type];
    }
    record(type, recordProps) {
        if (!isLastPropType(type))
            return;
        const props = this._lastProps[type];
        const overrideProps = extractProps(recordProps, LastPropsSchema.shape[type]);
        if (Object.keys(overrideProps).length === 0)
            return;
        recursive(props, overrideProps);
        this.slots.lastPropsUpdated.emit({ type, props: overrideProps });
    }
    apply(type, props) {
        if (!isLastPropType(type))
            return;
        const lastProps = this._lastProps[type];
        deepAssign(props, lastProps);
    }
    setItem(key, value) {
        const oldValue = this.getItem(key);
        this._getStorage(key).setItem(this._getKey(key), JSON.stringify(value));
        if (oldValue === value)
            return;
        this.slots.itemUpdated.emit({ key, value });
    }
    getItem(key) {
        try {
            const storage = this._getStorage(key);
            const value = storage.getItem(this._getKey(key));
            if (!value)
                return null;
            if (isLocalProp(key)) {
                return LocalPropsSchema.shape[key].parse(JSON.parse(value));
            }
            else if (isSessionProp(key)) {
                return SessionPropsSchema.shape[key].parse(JSON.parse(value));
            }
            else {
                return null;
            }
        }
        catch {
            return null;
        }
    }
    dispose() {
        this._disposables.dispose();
        this.slots.lastPropsUpdated.dispose();
    }
}
function extractProps(props, ref) {
    const result = {};
    Object.entries(props).forEach(([key, value]) => {
        if (!(key in ref.shape))
            return;
        if (isPlainObject(value)) {
            result[key] = extractProps(props[key], ref.shape[key]);
        }
        else {
            result[key] = value;
        }
    });
    return result;
}
function isLastPropType(type) {
    return Object.keys(LastPropsSchema.shape).includes(type);
}
function deepAssign(target, source) {
    Object.keys(source).forEach(key => {
        if (source[key] === undefined)
            return;
        if (!(key in target))
            target[key] = undefined;
        if (target[key] !== undefined)
            return;
        if (isPlainObject(source[key])) {
            target[key] = target[key] ?? {};
            deepAssign(target[key], source[key]);
        }
        else {
            target[key] = source[key];
        }
    });
    return target;
}
//# sourceMappingURL=edit-session.js.map