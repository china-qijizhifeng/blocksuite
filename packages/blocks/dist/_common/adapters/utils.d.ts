import type { DeltaInsert } from '@blocksuite/inline';
export declare const fetchImage: (url: string, init?: RequestInit, proxy?: string) => Promise<Response>;
export declare const mergeDeltas: (acc: DeltaInsert[], cur: DeltaInsert, options?: {
    force?: boolean;
}) => DeltaInsert[];
export declare const isNullish: (value: unknown) => boolean;
export declare const fetchable: (url: string) => boolean;
export declare const createText: (s: string) => {
    '$blocksuite:internal:text$': boolean;
    delta: {
        insert: string;
    }[];
};
export declare const isText: (o: unknown) => boolean;
//# sourceMappingURL=utils.d.ts.map