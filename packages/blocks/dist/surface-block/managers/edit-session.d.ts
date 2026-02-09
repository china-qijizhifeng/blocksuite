import type { BlockService } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/global/utils';
import { z } from 'zod';
import { LineWidth, NoteDisplayMode } from '../../_common/types.js';
import { FontFamily, FontStyle, FontWeight, ShapeStyle, StrokeStyle, TextAlign, TextVerticalAlign } from '../consts.js';
import { SHAPE_TEXT_FONT_SIZE, ShapeType } from '../elements/shape/consts.js';
declare const LastPropsSchema: z.ZodObject<{
    connector: z.ZodObject<{
        frontEndpointStyle: z.ZodEnum<["None", "Arrow", "Triangle", "Circle", "Diamond"]>;
        rearEndpointStyle: z.ZodEnum<["None", "Arrow", "Triangle", "Circle", "Diamond"]>;
        strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
        stroke: z.ZodUnion<readonly [z.ZodLiteral<"--affine-palette-transparent">, z.ZodLiteral<"--affine-palette-line-yellow">, z.ZodLiteral<"--affine-palette-line-orange">, z.ZodLiteral<"--affine-palette-line-red">, z.ZodLiteral<"--affine-palette-line-magenta">, z.ZodLiteral<"--affine-palette-line-purple">, z.ZodLiteral<"--affine-palette-line-blue">, z.ZodLiteral<"--affine-palette-line-teal">, z.ZodLiteral<"--affine-palette-line-green">, z.ZodLiteral<"--affine-palette-line-black">, z.ZodLiteral<"--affine-palette-line-grey">, z.ZodLiteral<"--affine-palette-line-white">]>;
        strokeWidth: z.ZodNativeEnum<typeof LineWidth>;
        rough: z.ZodBoolean;
        mode: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        stroke: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        strokeWidth: LineWidth;
        strokeStyle: StrokeStyle;
        rough: boolean;
        frontEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        rearEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        mode?: number | undefined;
    }, {
        stroke: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        strokeWidth: LineWidth;
        strokeStyle: StrokeStyle;
        rough: boolean;
        frontEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        rearEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        mode?: number | undefined;
    }>;
    brush: z.ZodObject<{
        color: z.ZodUnion<readonly [z.ZodLiteral<"--affine-palette-transparent">, z.ZodLiteral<"--affine-palette-line-yellow">, z.ZodLiteral<"--affine-palette-line-orange">, z.ZodLiteral<"--affine-palette-line-red">, z.ZodLiteral<"--affine-palette-line-magenta">, z.ZodLiteral<"--affine-palette-line-purple">, z.ZodLiteral<"--affine-palette-line-blue">, z.ZodLiteral<"--affine-palette-line-teal">, z.ZodLiteral<"--affine-palette-line-green">, z.ZodLiteral<"--affine-palette-line-black">, z.ZodLiteral<"--affine-palette-line-grey">, z.ZodLiteral<"--affine-palette-line-white">]>;
        lineWidth: z.ZodNativeEnum<typeof LineWidth>;
    }, "strip", z.ZodTypeAny, {
        color: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        lineWidth: LineWidth;
    }, {
        color: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        lineWidth: LineWidth;
    }>;
    shape: z.ZodObject<{
        shapeType: z.ZodNativeEnum<typeof ShapeType>;
        fillColor: z.ZodUnion<readonly [z.ZodLiteral<"--affine-palette-transparent">, z.ZodLiteral<"--affine-palette-shape-yellow">, z.ZodLiteral<"--affine-palette-shape-orange">, z.ZodLiteral<"--affine-palette-shape-red">, z.ZodLiteral<"--affine-palette-shape-magenta">, z.ZodLiteral<"--affine-palette-shape-purple">, z.ZodLiteral<"--affine-palette-shape-blue">, z.ZodLiteral<"--affine-palette-shape-teal">, z.ZodLiteral<"--affine-palette-shape-green">, z.ZodLiteral<"--affine-palette-shape-black">, z.ZodLiteral<"--affine-palette-shape-grey">, z.ZodLiteral<"--affine-palette-shape-white">]>;
        strokeColor: z.ZodUnion<readonly [z.ZodLiteral<"--affine-palette-transparent">, z.ZodLiteral<"--affine-palette-line-yellow">, z.ZodLiteral<"--affine-palette-line-orange">, z.ZodLiteral<"--affine-palette-line-red">, z.ZodLiteral<"--affine-palette-line-magenta">, z.ZodLiteral<"--affine-palette-line-purple">, z.ZodLiteral<"--affine-palette-line-blue">, z.ZodLiteral<"--affine-palette-line-teal">, z.ZodLiteral<"--affine-palette-line-green">, z.ZodLiteral<"--affine-palette-line-black">, z.ZodLiteral<"--affine-palette-line-grey">, z.ZodLiteral<"--affine-palette-line-white">]>;
        shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        strokeWidth: z.ZodOptional<z.ZodNumber>;
        strokeStyle: z.ZodOptional<z.ZodNativeEnum<typeof StrokeStyle>>;
        color: z.ZodOptional<z.ZodString>;
        fontSize: z.ZodOptional<z.ZodNativeEnum<typeof SHAPE_TEXT_FONT_SIZE>>;
        fontFamily: z.ZodOptional<z.ZodNativeEnum<typeof FontFamily>>;
        fontWeight: z.ZodOptional<z.ZodNativeEnum<typeof FontWeight>>;
        fontStyle: z.ZodOptional<z.ZodNativeEnum<typeof FontStyle>>;
        textAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
        roughness: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        radius: number;
        shapeType: ShapeType;
        filled: boolean;
        fillColor: "--affine-palette-transparent" | "--affine-palette-shape-yellow" | "--affine-palette-shape-orange" | "--affine-palette-shape-red" | "--affine-palette-shape-magenta" | "--affine-palette-shape-purple" | "--affine-palette-shape-blue" | "--affine-palette-shape-teal" | "--affine-palette-shape-green" | "--affine-palette-shape-black" | "--affine-palette-shape-grey" | "--affine-palette-shape-white";
        strokeColor: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        shapeStyle: ShapeStyle;
        fontSize?: SHAPE_TEXT_FONT_SIZE | undefined;
        color?: string | undefined;
        fontFamily?: FontFamily | undefined;
        fontStyle?: FontStyle | undefined;
        fontWeight?: FontWeight | undefined;
        textAlign?: TextAlign | undefined;
        strokeWidth?: number | undefined;
        strokeStyle?: StrokeStyle | undefined;
        roughness?: number | undefined;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }, {
        radius: number;
        shapeType: ShapeType;
        filled: boolean;
        fillColor: "--affine-palette-transparent" | "--affine-palette-shape-yellow" | "--affine-palette-shape-orange" | "--affine-palette-shape-red" | "--affine-palette-shape-magenta" | "--affine-palette-shape-purple" | "--affine-palette-shape-blue" | "--affine-palette-shape-teal" | "--affine-palette-shape-green" | "--affine-palette-shape-black" | "--affine-palette-shape-grey" | "--affine-palette-shape-white";
        strokeColor: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        shapeStyle: ShapeStyle;
        fontSize?: SHAPE_TEXT_FONT_SIZE | undefined;
        color?: string | undefined;
        fontFamily?: FontFamily | undefined;
        fontStyle?: FontStyle | undefined;
        fontWeight?: FontWeight | undefined;
        textAlign?: TextAlign | undefined;
        strokeWidth?: number | undefined;
        strokeStyle?: StrokeStyle | undefined;
        roughness?: number | undefined;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }>;
    text: z.ZodObject<{
        color: z.ZodString;
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
        fontSize: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: string;
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    }, {
        fontSize: number;
        color: string;
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    }>;
    'affine:note': z.ZodObject<{
        background: z.ZodUnion<readonly [z.ZodLiteral<"--affine-palette-transparent">, z.ZodLiteral<"--affine-note-background-yellow">, z.ZodLiteral<"--affine-note-background-orange">, z.ZodLiteral<"--affine-note-background-red">, z.ZodLiteral<"--affine-note-background-magenta">, z.ZodLiteral<"--affine-note-background-purple">, z.ZodLiteral<"--affine-note-background-blue">, z.ZodLiteral<"--affine-note-background-teal">, z.ZodLiteral<"--affine-note-background-green">, z.ZodLiteral<"--affine-note-background-black">, z.ZodLiteral<"--affine-note-background-grey">, z.ZodLiteral<"--affine-note-background-white">]>;
        displayMode: z.ZodOptional<z.ZodNativeEnum<typeof NoteDisplayMode>>;
        edgeless: z.ZodObject<{
            style: z.ZodObject<{
                borderRadius: z.ZodNumber;
                borderSize: z.ZodNumber;
                borderStyle: z.ZodNativeEnum<typeof StrokeStyle>;
                shadowType: z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodLiteral<"--affine-note-shadow-box">, z.ZodLiteral<"--affine-note-shadow-sticker">, z.ZodLiteral<"--affine-note-shadow-paper">, z.ZodLiteral<"--affine-note-shadow-float">, z.ZodLiteral<"--affine-note-shadow-film">]>;
            }, "strip", z.ZodTypeAny, {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            }, {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            }>;
        }, "strip", z.ZodTypeAny, {
            style: {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            };
        }, {
            style: {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        background: "--affine-note-background-blue" | "--affine-palette-transparent" | "--affine-note-background-yellow" | "--affine-note-background-orange" | "--affine-note-background-red" | "--affine-note-background-magenta" | "--affine-note-background-purple" | "--affine-note-background-teal" | "--affine-note-background-green" | "--affine-note-background-black" | "--affine-note-background-grey" | "--affine-note-background-white";
        edgeless: {
            style: {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            };
        };
        displayMode?: NoteDisplayMode | undefined;
    }, {
        background: "--affine-note-background-blue" | "--affine-palette-transparent" | "--affine-note-background-yellow" | "--affine-note-background-orange" | "--affine-note-background-red" | "--affine-note-background-magenta" | "--affine-note-background-purple" | "--affine-note-background-teal" | "--affine-note-background-green" | "--affine-note-background-black" | "--affine-note-background-grey" | "--affine-note-background-white";
        edgeless: {
            style: {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            };
        };
        displayMode?: NoteDisplayMode | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    'affine:note': {
        background: "--affine-note-background-blue" | "--affine-palette-transparent" | "--affine-note-background-yellow" | "--affine-note-background-orange" | "--affine-note-background-red" | "--affine-note-background-magenta" | "--affine-note-background-purple" | "--affine-note-background-teal" | "--affine-note-background-green" | "--affine-note-background-black" | "--affine-note-background-grey" | "--affine-note-background-white";
        edgeless: {
            style: {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            };
        };
        displayMode?: NoteDisplayMode | undefined;
    };
    text: {
        fontSize: number;
        color: string;
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    };
    connector: {
        stroke: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        strokeWidth: LineWidth;
        strokeStyle: StrokeStyle;
        rough: boolean;
        frontEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        rearEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        mode?: number | undefined;
    };
    brush: {
        color: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        lineWidth: LineWidth;
    };
    shape: {
        radius: number;
        shapeType: ShapeType;
        filled: boolean;
        fillColor: "--affine-palette-transparent" | "--affine-palette-shape-yellow" | "--affine-palette-shape-orange" | "--affine-palette-shape-red" | "--affine-palette-shape-magenta" | "--affine-palette-shape-purple" | "--affine-palette-shape-blue" | "--affine-palette-shape-teal" | "--affine-palette-shape-green" | "--affine-palette-shape-black" | "--affine-palette-shape-grey" | "--affine-palette-shape-white";
        strokeColor: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        shapeStyle: ShapeStyle;
        fontSize?: SHAPE_TEXT_FONT_SIZE | undefined;
        color?: string | undefined;
        fontFamily?: FontFamily | undefined;
        fontStyle?: FontStyle | undefined;
        fontWeight?: FontWeight | undefined;
        textAlign?: TextAlign | undefined;
        strokeWidth?: number | undefined;
        strokeStyle?: StrokeStyle | undefined;
        roughness?: number | undefined;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    };
}, {
    'affine:note': {
        background: "--affine-note-background-blue" | "--affine-palette-transparent" | "--affine-note-background-yellow" | "--affine-note-background-orange" | "--affine-note-background-red" | "--affine-note-background-magenta" | "--affine-note-background-purple" | "--affine-note-background-teal" | "--affine-note-background-green" | "--affine-note-background-black" | "--affine-note-background-grey" | "--affine-note-background-white";
        edgeless: {
            style: {
                borderRadius: number;
                borderStyle: StrokeStyle;
                borderSize: number;
                shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
            };
        };
        displayMode?: NoteDisplayMode | undefined;
    };
    text: {
        fontSize: number;
        color: string;
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    };
    connector: {
        stroke: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        strokeWidth: LineWidth;
        strokeStyle: StrokeStyle;
        rough: boolean;
        frontEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        rearEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
        mode?: number | undefined;
    };
    brush: {
        color: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        lineWidth: LineWidth;
    };
    shape: {
        radius: number;
        shapeType: ShapeType;
        filled: boolean;
        fillColor: "--affine-palette-transparent" | "--affine-palette-shape-yellow" | "--affine-palette-shape-orange" | "--affine-palette-shape-red" | "--affine-palette-shape-magenta" | "--affine-palette-shape-purple" | "--affine-palette-shape-blue" | "--affine-palette-shape-teal" | "--affine-palette-shape-green" | "--affine-palette-shape-black" | "--affine-palette-shape-grey" | "--affine-palette-shape-white";
        strokeColor: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
        shapeStyle: ShapeStyle;
        fontSize?: SHAPE_TEXT_FONT_SIZE | undefined;
        color?: string | undefined;
        fontFamily?: FontFamily | undefined;
        fontStyle?: FontStyle | undefined;
        fontWeight?: FontWeight | undefined;
        textAlign?: TextAlign | undefined;
        strokeWidth?: number | undefined;
        strokeStyle?: StrokeStyle | undefined;
        roughness?: number | undefined;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    };
}>;
export type LastProps = z.infer<typeof LastPropsSchema>;
declare const SessionPropsSchema: z.ZodObject<{
    viewport: z.ZodUnion<[z.ZodObject<{
        centerX: z.ZodNumber;
        centerY: z.ZodNumber;
        zoom: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        centerX: number;
        zoom: number;
        centerY: number;
    }, {
        centerX: number;
        zoom: number;
        centerY: number;
    }>, z.ZodObject<{
        xywh: z.ZodString;
        padding: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>>;
    }, "strip", z.ZodTypeAny, {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    }, {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    }>]>;
    templateCache: z.ZodString;
    remoteColor: z.ZodString;
    showBidirectional: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    viewport: {
        centerX: number;
        zoom: number;
        centerY: number;
    } | {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    };
    templateCache: string;
    remoteColor: string;
    showBidirectional: boolean;
}, {
    viewport: {
        centerX: number;
        zoom: number;
        centerY: number;
    } | {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    };
    templateCache: string;
    remoteColor: string;
    showBidirectional: boolean;
}>;
declare const LocalPropsSchema: z.ZodObject<{
    presentBlackBackground: z.ZodBoolean;
    presentFillScreen: z.ZodBoolean;
    presentHideToolbar: z.ZodBoolean;
    autoHideEmbedHTMLFullScreenToolbar: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    presentBlackBackground: boolean;
    presentFillScreen: boolean;
    presentHideToolbar: boolean;
    autoHideEmbedHTMLFullScreenToolbar: boolean;
}, {
    presentBlackBackground: boolean;
    presentFillScreen: boolean;
    presentHideToolbar: boolean;
    autoHideEmbedHTMLFullScreenToolbar: boolean;
}>;
type SessionProps = z.infer<typeof SessionPropsSchema>;
type LocalProps = z.infer<typeof LocalPropsSchema>;
type StorageProps = SessionProps & LocalProps;
export type SerializedViewport = z.infer<typeof SessionPropsSchema.shape.viewport>;
export declare class EditPropsStore {
    private _service;
    private _lastProps;
    private _disposables;
    slots: {
        lastPropsUpdated: Slot<{
            type: keyof LastProps;
            props: Record<string, unknown>;
        }>;
        itemUpdated: Slot<{
            key: keyof StorageProps;
            value: StorageProps[keyof StorageProps];
        }>;
    };
    constructor(_service: BlockService);
    private _getKey;
    private _getStorage;
    getLastProps<T extends keyof LastProps>(type: T): {
        'affine:note': {
            background: "--affine-note-background-blue" | "--affine-palette-transparent" | "--affine-note-background-yellow" | "--affine-note-background-orange" | "--affine-note-background-red" | "--affine-note-background-magenta" | "--affine-note-background-purple" | "--affine-note-background-teal" | "--affine-note-background-green" | "--affine-note-background-black" | "--affine-note-background-grey" | "--affine-note-background-white";
            edgeless: {
                style: {
                    borderRadius: number;
                    borderStyle: StrokeStyle;
                    borderSize: number;
                    shadowType: "" | "--affine-note-shadow-box" | "--affine-note-shadow-sticker" | "--affine-note-shadow-paper" | "--affine-note-shadow-float" | "--affine-note-shadow-film";
                };
            };
            displayMode?: NoteDisplayMode | undefined;
        };
        text: {
            fontSize: number;
            color: string;
            fontFamily: FontFamily;
            fontStyle: FontStyle;
            fontWeight: FontWeight;
            textAlign: TextAlign;
        };
        connector: {
            stroke: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
            strokeWidth: LineWidth;
            strokeStyle: StrokeStyle;
            rough: boolean;
            frontEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
            rearEndpointStyle: "None" | "Arrow" | "Triangle" | "Circle" | "Diamond";
            mode?: number | undefined;
        };
        brush: {
            color: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
            lineWidth: LineWidth;
        };
        shape: {
            radius: number;
            shapeType: ShapeType;
            filled: boolean;
            fillColor: "--affine-palette-transparent" | "--affine-palette-shape-yellow" | "--affine-palette-shape-orange" | "--affine-palette-shape-red" | "--affine-palette-shape-magenta" | "--affine-palette-shape-purple" | "--affine-palette-shape-blue" | "--affine-palette-shape-teal" | "--affine-palette-shape-green" | "--affine-palette-shape-black" | "--affine-palette-shape-grey" | "--affine-palette-shape-white";
            strokeColor: "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
            shapeStyle: ShapeStyle;
            fontSize?: SHAPE_TEXT_FONT_SIZE | undefined;
            color?: string | undefined;
            fontFamily?: FontFamily | undefined;
            fontStyle?: FontStyle | undefined;
            fontWeight?: FontWeight | undefined;
            textAlign?: TextAlign | undefined;
            strokeWidth?: number | undefined;
            strokeStyle?: StrokeStyle | undefined;
            roughness?: number | undefined;
            textHorizontalAlign?: TextAlign | undefined;
            textVerticalAlign?: TextVerticalAlign | undefined;
        };
    }[T];
    record(type: BlockSuite.EdgelessModelKeyType, recordProps: Partial<LastProps[keyof LastProps]>): void;
    apply(type: BlockSuite.EdgelessModelKeyType, props: Record<string, unknown>): void;
    setItem<T extends keyof StorageProps>(key: T, value: StorageProps[T]): void;
    getItem<T extends keyof StorageProps>(key: T): StorageProps[T] | null;
    dispose(): void;
}
export {};
//# sourceMappingURL=edit-session.d.ts.map