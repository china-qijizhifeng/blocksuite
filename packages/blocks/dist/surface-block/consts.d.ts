import type { FontConfig } from '../root-block/font-loader/font-loader.js';
export declare const ZOOM_MAX = 6;
export declare const ZOOM_MIN = 0.1;
export declare const ZOOM_STEP = 0.25;
export declare const ZOOM_INITIAL = 1;
export declare const GRID_SIZE = 3000;
export declare const GRID_GAP_MIN = 10;
export declare const GRID_GAP_MAX = 50;
export declare const DEFAULT_ROUGHNESS = 1.4;
export declare const DEFAULT_CENTRAL_AREA_RATIO = 0.3;
export interface IBound {
    x: number;
    y: number;
    w: number;
    h: number;
    rotate?: number;
}
export declare enum ShapeStyle {
    General = "General",
    Scribbled = "Scribbled"
}
export declare enum StrokeStyle {
    Solid = "solid",
    Dash = "dash",
    None = "none"
}
export interface IModelCoord {
    x: number;
    y: number;
}
export declare enum TextAlign {
    Left = "left",
    Center = "center",
    Right = "right"
}
export declare enum TextVerticalAlign {
    Top = "top",
    Center = "center",
    Bottom = "bottom"
}
export declare enum TextResizing {
    AUTO_WIDTH = 0,
    AUTO_HEIGHT = 1
}
export type TextStyleProps = {
    color: string;
    fontFamily: FontFamily;
    fontSize: number;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
};
export declare enum FontWeight {
    Light = "300",
    Regular = "400",
    Medium = "500",
    SemiBold = "600",
    Bold = "700"
}
export declare enum FontStyle {
    Normal = "normal",
    Italic = "italic"
}
export declare enum FontFamily {
    Inter = "blocksuite:surface:Inter",
    Kalam = "blocksuite:surface:Kalam",
    Satoshi = "blocksuite:surface:Satoshi",
    Poppins = "blocksuite:surface:Poppins",
    Lora = "blocksuite:surface:Lora",
    BebasNeue = "blocksuite:surface:BebasNeue",
    OrelegaOne = "blocksuite:surface:OrelegaOne"
}
export declare const FontFamilyMap: {
    readonly "blocksuite:surface:Inter": "Inter";
    readonly "blocksuite:surface:Kalam": "Kalam";
    readonly "blocksuite:surface:Satoshi": "Satoshi";
    readonly "blocksuite:surface:Poppins": "Poppins";
    readonly "blocksuite:surface:Lora": "Lora";
    readonly "blocksuite:surface:BebasNeue": "Bebas Neue";
    readonly "blocksuite:surface:OrelegaOne": "Orelega One";
};
export declare const FontFamilyList: ([FontFamily.Inter, "Inter"] | [FontFamily.Kalam, "Kalam"] | [FontFamily.Satoshi, "Satoshi"] | [FontFamily.Poppins, "Poppins"] | [FontFamily.Lora, "Lora"] | [FontFamily.BebasNeue, "Bebas Neue"] | [FontFamily.OrelegaOne, "Orelega One"])[];
export declare const AffineCanvasTextFonts: FontConfig[];
export declare const CommunityCanvasTextFonts: FontConfig[];
//# sourceMappingURL=consts.d.ts.map