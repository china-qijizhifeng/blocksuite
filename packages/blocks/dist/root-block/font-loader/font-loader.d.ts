export interface FontConfig {
    font: string;
    weight: string;
    url: string;
    style: string;
}
export declare class FontLoader {
    readonly fontFaces: FontFace[];
    get ready(): Promise<FontFace[]>;
    load(fonts: FontConfig[]): void;
    clear(): void;
}
//# sourceMappingURL=font-loader.d.ts.map