export declare const basicCover: () => {
    type: string;
    meta: {
        id: string;
        title: string;
        createDate: number;
        tags: never[];
    };
    blocks: {
        type: string;
        id: string;
        flavour: string;
        version: number;
        props: {
            title: {
                '$blocksuite:internal:text$': boolean;
                delta: never[];
            };
        };
        children: {
            type: string;
            id: string;
            flavour: string;
            version: number;
            props: {
                elements: {
                    DcoFASHQKI: {
                        index: string;
                        seed: number;
                        xywh: string;
                        rotate: number;
                        text: {
                            'affine:surface:text': boolean;
                            delta: {
                                insert: string;
                            }[];
                        };
                        color: string;
                        fontSize: number;
                        fontFamily: string;
                        fontWeight: string;
                        fontStyle: string;
                        textAlign: string;
                        type: string;
                        id: string;
                        hasMaxWidth: boolean;
                    };
                };
            };
            children: ({
                type: string;
                id: string;
                flavour: string;
                version: number;
                props: {
                    caption: string;
                    sourceId: string;
                    width: number;
                    height: number;
                    index: string;
                    xywh: string;
                    rotate: number;
                    size: number;
                    title?: undefined;
                    background?: undefined;
                };
                children: never[];
            } | {
                type: string;
                id: string;
                flavour: string;
                version: number;
                props: {
                    title: {
                        '$blocksuite:internal:text$': boolean;
                        delta: {
                            insert: string;
                        }[];
                    };
                    background: string;
                    xywh: string;
                    index: string;
                    caption?: undefined;
                    sourceId?: undefined;
                    width?: undefined;
                    height?: undefined;
                    rotate?: undefined;
                    size?: undefined;
                };
                children: never[];
            })[];
        }[];
    };
};
//# sourceMappingURL=basic-cover.d.ts.map