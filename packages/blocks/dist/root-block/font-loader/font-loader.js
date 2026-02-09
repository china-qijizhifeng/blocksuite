import { IS_FIREFOX } from '@blocksuite/global/env';
const initFontFace = IS_FIREFOX
    ? ({ font, weight, url, style }) => new FontFace(`"${font}"`, `url(${url})`, {
        weight,
        style,
    })
    : ({ font, weight, url, style }) => new FontFace(font, `url(${url})`, {
        weight,
        style,
    });
export class FontLoader {
    constructor() {
        this.fontFaces = [];
    }
    get ready() {
        return Promise.all(this.fontFaces.map(fontFace => fontFace.loaded));
    }
    load(fonts) {
        this.fontFaces.push(...fonts.map(font => {
            const fontFace = initFontFace(font);
            document.fonts.add(fontFace);
            fontFace.load().catch(console.error);
            return fontFace;
        }));
    }
    clear() {
        this.fontFaces.forEach(fontFace => document.fonts.delete(fontFace));
        this.fontFaces.splice(0, this.fontFaces.length);
    }
}
//# sourceMappingURL=font-loader.js.map