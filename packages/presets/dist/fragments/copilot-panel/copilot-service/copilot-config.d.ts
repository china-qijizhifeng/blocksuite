import type { AllServiceKind, GetMethod, ServiceImpl } from './service-base.js';
export type VendorConfig = {
    id: string;
    vendorKey: string;
    name: string;
    data: unknown;
};
type ServiceType = string;
export type ServiceConfigMap = Record<ServiceType, {
    vendorId: string;
    implName: string;
}>;
export type CopilotConfigDataType = {
    feature: Record<string, ServiceConfigMap>;
    vendors: VendorConfig[];
};
type VendorPack<T extends AllServiceKind> = {
    vendor: VendorConfig;
    impl: ServiceImpl<GetMethod<T>, unknown>;
};
export declare class CopilotConfig {
    _config?: CopilotConfigDataType;
    loadFromLocalStorage(): any;
    loadVendorFromUrl(): VendorConfig[];
    get config(): CopilotConfigDataType;
    save(): void;
    changeService(featureKey: string, serviceType: string, vendorId: string, implName: string): void;
    addVendor(config: VendorConfig): void;
    getVendor<T extends AllServiceKind>(featureKey: string, serviceKind: T): VendorPack<T> | undefined;
    getService<T extends AllServiceKind>(featureKey: string, serviceKind: T): GetMethod<T>;
    getVendorsByService<T extends AllServiceKind>(serviceKind: T): VendorPack<T>[];
}
export declare const copilotConfig: CopilotConfig;
export {};
//# sourceMappingURL=copilot-config.d.ts.map