import { typesystem } from './typesystem.js';
export const tNumber = typesystem.defineData({
    name: 'Number',
    supers: [],
});
export const tString = typesystem.defineData({
    name: 'String',
    supers: [],
});
export const tRichText = typesystem.defineData({
    name: 'RichText',
    supers: [tString],
});
export const tBoolean = typesystem.defineData({
    name: 'Boolean',
    supers: [],
});
export const tDate = typesystem.defineData({
    name: 'Date',
    supers: [],
});
export const tURL = typesystem.defineData({
    name: 'URL',
    supers: [tString],
});
export const tImage = typesystem.defineData({
    name: 'Image',
    supers: [],
});
export const tEmail = typesystem.defineData({
    name: 'Email',
    supers: [tString],
});
export const tPhone = typesystem.defineData({
    name: 'Phone',
    supers: [tString],
});
export const tTag = typesystem.defineData({
    name: 'Tag',
    supers: [],
});
//# sourceMappingURL=data-type.js.map