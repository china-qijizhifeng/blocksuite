export declare const basic1: () => {
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
                delta: {
                    insert: string;
                }[];
            };
        };
        children: ({
            type: string;
            id: string;
            flavour: string;
            version: number;
            props: {
                elements: {
                    lGcs_jsyUu: {
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
                xywh?: undefined;
                background?: undefined;
                index?: undefined;
                hidden?: undefined;
                displayMode?: undefined;
                edgeless?: undefined;
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
        } | {
            type: string;
            id: string;
            flavour: string;
            version: number;
            props: {
                xywh: string;
                background: string;
                index: string;
                hidden: boolean;
                displayMode: string;
                edgeless: {
                    style: {
                        borderRadius: number;
                        borderSize: number;
                        borderStyle: string;
                        shadowType: string;
                    };
                    scale: number;
                    collapse: boolean;
                    collapsedHeight: number;
                };
                elements?: undefined;
            };
            children: {
                type: string;
                id: string;
                flavour: string;
                version: number;
                props: {
                    type: string;
                    text: {
                        '$blocksuite:internal:text$': boolean;
                        delta: {
                            insert: string;
                        }[];
                    };
                };
                children: never[];
            }[];
        })[];
    };
};
//# sourceMappingURL=basic1.d.ts.map