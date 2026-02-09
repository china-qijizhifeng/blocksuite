import './open-ai.js';
import './fal.js';
import './llama2.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type VendorConfig } from './copilot-config.js';
import { type AllServiceKind, type ServiceImpl, type Vendor } from './service-base.js';
export declare const allVendor: Vendor<any>[];
declare const CreateNewService_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CreateNewService extends CreateNewService_base {
    get serviceKind(): import("./service-base.js").ServiceKind<{
        generateText(messages: import("../chat/logic.js").ChatMessage[]): Promise<string>;
    }> | import("./service-base.js").ServiceKind<{
        chat(messages: import("../chat/logic.js").ChatMessage[]): AsyncIterable<string>;
    }> | import("./service-base.js").ServiceKind<{
        generateImage(prompt: string): Promise<File>;
    }> | import("./service-base.js").ServiceKind<{
        generateText(messages: import("openai/resources/index.mjs").ChatCompletionMessageParam[]): Promise<string>;
    }> | import("./service-base.js").ServiceKind<{
        generateImage(prompt: string, image: string): Promise<string>;
    }> | import("./service-base.js").ServiceKind<{
        createFastRequest(): (prompt: string, image: string) => Promise<string>;
    }> | import("./service-base.js").ServiceKind<{
        generateEmbedding(text: string): Promise<number[]>;
        generateEmbeddings(textList: string[]): Promise<number[][]>;
    }> | undefined;
    accessor type: string;
    accessor onSave: (config: VendorConfig) => void;
    accessor key: string;
    accessor name: string;
    accessor data: unknown | undefined;
    protected render(): unknown;
    changeKeyByEvent(e: Event): void;
    changeKey(key: string): void;
    changeName(e: Event): void;
    save(): void;
    close(): void;
    list(): Vendor<unknown>[];
}
declare const VendorServiceSelect_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class VendorServiceSelect extends VendorServiceSelect_base {
    static styles: import("lit").CSSResult;
    accessor featureKey: string;
    accessor service: AllServiceKind;
    protected render(): unknown;
    changeService(e: Event): void;
}
declare const VendorServiceOptions_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class VendorServiceOptions extends VendorServiceOptions_base {
    static styles: import("lit").CSSResult;
    accessor featureKey: string;
    accessor service: AllServiceKind;
    accessor close: () => void;
    protected render(): unknown;
    select(vendor: VendorConfig, impl: ServiceImpl<unknown, unknown>): void;
}
export {};
//# sourceMappingURL=index.d.ts.map