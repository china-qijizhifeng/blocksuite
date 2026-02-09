export const createVendor = (config) => {
    return config;
};
const createServiceKind = (config) => {
    const implList = [];
    return {
        type: config.type,
        title: config.title,
        getImpl: implName => {
            return implList.find(v => v.name === implName);
        },
        implList,
        implService: impl => {
            implList.push(impl);
        },
    };
};
export const TextServiceKind = createServiceKind({
    type: 'text-service',
    title: 'Text service',
});
export const ChatServiceKind = createServiceKind({
    type: 'chat-service',
    title: 'Chat service',
});
export const Text2ImageServiceKind = createServiceKind({
    type: 'text-to-image-service',
    title: 'Text to image service',
});
export const EmbeddingServiceKind = createServiceKind({
    type: 'embedding-service',
    title: 'Embedding service',
});
export const Image2TextServiceKind = createServiceKind({
    type: 'image-to-text-service',
    title: 'Image to text service',
});
export const Image2ImageServiceKind = createServiceKind({
    type: 'image-to-image-service',
    title: 'Image to image service',
});
export const FastImage2ImageServiceKind = createServiceKind({
    type: 'fast-image-to-image-service',
    title: 'Fast image to image service',
});
export const allKindService = [
    TextServiceKind,
    ChatServiceKind,
    Text2ImageServiceKind,
    Image2TextServiceKind,
    Image2ImageServiceKind,
    FastImage2ImageServiceKind,
    EmbeddingServiceKind,
];
//# sourceMappingURL=service-base.js.map