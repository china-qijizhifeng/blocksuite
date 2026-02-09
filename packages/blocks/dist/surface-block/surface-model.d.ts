import { Slot } from '@blocksuite/global/utils';
import type { Y } from '@blocksuite/store';
import { BlockModel, Boxed } from '@blocksuite/store';
import { type IBaseProps, SurfaceGroupLikeModel } from './element-model/base.js';
import type { ConnectorElementModel } from './element-model/connector.js';
import { type ElementModelMap } from './element-model/index.js';
import { SurfaceBlockTransformer } from './surface-transformer.js';
export type SurfaceBlockProps = {
    elements: Boxed<Y.Map<Y.Map<unknown>>>;
};
export interface ElementUpdatedData {
    id: string;
    props: Record<string, unknown>;
    oldValues: Record<string, unknown>;
    local: boolean;
}
export declare const SurfaceBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<SurfaceBlockProps>;
        flavour: "affine:surface";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: SurfaceBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => SurfaceBlockTransformer) | undefined;
};
export type SurfaceMiddleware = (surface: SurfaceBlockModel, hooks: SurfaceBlockModel['hooks']) => () => void;
export declare class SurfaceBlockModel extends BlockModel<SurfaceBlockProps> {
    private _elementModels;
    private _disposables;
    private _groupToElements;
    private _elementToGroup;
    private _connectorToElements;
    private _elementToConnector;
    /**
     * Hooks is used to attach extra logic when calling `addElement`、`updateElement`(or assign property directly) and `removeElement`.
     * It's useful when dealing with relation between different model.
     */
    protected hooks: {
        update: Slot<Omit<ElementUpdatedData, "local">>;
        remove: Slot<{
            id: string;
            type: string;
            model: BlockSuite.SurfaceElementModelType;
        }>;
    };
    elementUpdated: Slot<ElementUpdatedData>;
    elementAdded: Slot<{
        id: string;
        local: boolean;
    }>;
    elementRemoved: Slot<{
        id: string;
        type: string;
        model: BlockSuite.SurfaceElementModelType;
        local: boolean;
    }>;
    get elementModels(): BlockSuite.SurfaceElementModelType[];
    constructor();
    private _init;
    private _applyMiddlewares;
    private _initElementModels;
    private _watchGroupRelationChange;
    private _watchConnectorRelationChange;
    dispose(): void;
    isInMindmap(id: string): boolean;
    getConnectors(id: string): ConnectorElementModel[];
    getGroup<T extends SurfaceGroupLikeModel<IBaseProps> = SurfaceGroupLikeModel<IBaseProps>>(id: string): T | null;
    getGroups(id: string): SurfaceGroupLikeModel<IBaseProps>[];
    getElementsByType<K extends keyof ElementModelMap>(type: K): ElementModelMap[K][];
    hasElementById(id: string): boolean;
    getElementById(id: string): BlockSuite.SurfaceElementModelType | null;
    addElement<T extends object = Record<string, unknown>>(props: Partial<T> & {
        type: string;
    }): string;
    removeElement(id: string): void;
    updateElement<T extends object = Record<string, unknown>>(id: string, props: Partial<T>): void;
}
//# sourceMappingURL=surface-model.d.ts.map