import type { EditorHost } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
export interface AIUserInfo {
    id: string;
    email: string;
    name: string;
    avatarUrl: string | null;
}
export type ActionEventType = 'started' | 'finished' | 'error' | 'aborted:paywall' | 'aborted:login-required' | 'aborted:server-error' | 'aborted:stop' | 'result:insert' | 'result:replace' | 'result:use-as-caption' | 'result:add-page' | 'result:add-note' | 'result:continue-in-chat' | 'result:discard' | 'result:retry';
/**
 * AI provider for the block suite
 *
 * To use it, downstream (affine) has to provide AI actions implementation,
 * user info etc
 *
 * todo: breakdown into different parts?
 */
export declare class AIProvider {
    static get slots(): {
        requestContinueInChat: Slot<{
            host: EditorHost;
            show: boolean;
        }>;
        requestLogin: Slot<{
            host: EditorHost;
        }>;
        requestUpgradePlan: Slot<{
            host: EditorHost;
        }>;
        requestRunInEdgeless: Slot<{
            host: EditorHost;
        }>;
        actions: Slot<{
            action: keyof BlockSuitePresets.AIActions;
            options: BlockSuitePresets.AITextActionOptions;
            event: ActionEventType;
        }>;
        userInfo: Slot<AIUserInfo | null>;
    };
    static get actions(): Partial<BlockSuitePresets.AIActions>;
    static get userInfo(): AIUserInfo | Promise<AIUserInfo> | null;
    static get photoEngine(): BlockSuitePresets.AIPhotoEngineService | null;
    static get histories(): BlockSuitePresets.AIHistoryService | null;
    static get actionHistory(): {
        action: keyof BlockSuitePresets.AIActions;
        options: BlockSuitePresets.AITextActionOptions;
    }[];
    static get toggleGeneralAIOnboarding(): ((value: boolean) => void) | null;
    private static readonly instance;
    static LAST_ACTION_SESSIONID: string;
    static MAX_LOCAL_HISTORY: number;
    private readonly actions;
    private photoEngine;
    private histories;
    private toggleGeneralAIOnboarding;
    private readonly slots;
    private readonly actionHistory;
    private userInfoFn;
    private provideAction;
    static provide(id: 'userInfo', fn: () => AIUserInfo | Promise<AIUserInfo> | null): void;
    static provide(id: 'histories', service: BlockSuitePresets.AIHistoryService): void;
    static provide(id: 'photoEngine', engine: BlockSuitePresets.AIPhotoEngineService): void;
    static provide(id: 'onboarding', fn: (value: boolean) => void): void;
    static provide<T extends keyof BlockSuitePresets.AIActions>(id: T, action: (...options: Parameters<BlockSuitePresets.AIActions[T]>) => ReturnType<BlockSuitePresets.AIActions[T]>): void;
}
//# sourceMappingURL=provider.d.ts.map