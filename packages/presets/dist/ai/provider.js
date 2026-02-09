import { PaymentRequiredError, UnauthorizedError } from '@blocksuite/blocks';
import { Slot } from '@blocksuite/store';
/**
 * AI provider for the block suite
 *
 * To use it, downstream (affine) has to provide AI actions implementation,
 * user info etc
 *
 * todo: breakdown into different parts?
 */
export class AIProvider {
    constructor() {
        this.actions = {};
        this.photoEngine = null;
        this.histories = null;
        this.toggleGeneralAIOnboarding = null;
        this.slots = {
            // use case: when user selects "continue in chat" in an ask ai result panel
            // do we need to pass the context to the chat panel?
            requestContinueInChat: new Slot(),
            requestLogin: new Slot(),
            requestUpgradePlan: new Slot(),
            // when an action is requested to run in edgeless mode (show a toast in affine)
            requestRunInEdgeless: new Slot(),
            // stream of AI actions triggered by users
            actions: new Slot(),
            // downstream can emit this slot to notify ai presets that user info has been updated
            userInfo: new Slot(),
            // add more if needed
        };
        // track the history of triggered actions (in memory only)
        this.actionHistory = [];
        this.userInfoFn = () => null;
    }
    static get slots() {
        return AIProvider.instance.slots;
    }
    static get actions() {
        return AIProvider.instance.actions;
    }
    static get userInfo() {
        return AIProvider.instance.userInfoFn();
    }
    static get photoEngine() {
        return AIProvider.instance.photoEngine;
    }
    static get histories() {
        return AIProvider.instance.histories;
    }
    static get actionHistory() {
        return AIProvider.instance.actionHistory;
    }
    static get toggleGeneralAIOnboarding() {
        return AIProvider.instance.toggleGeneralAIOnboarding;
    }
    static { this.instance = new AIProvider(); }
    static { this.LAST_ACTION_SESSIONID = ''; }
    static { this.MAX_LOCAL_HISTORY = 10; }
    provideAction(id, action) {
        if (this.actions[id]) {
            console.warn(`AI action ${id} is already provided`);
        }
        // @ts-expect-error todo: maybe fix this
        this.actions[id] = (...args) => {
            const options = args[0];
            const slots = this.slots;
            slots.actions.emit({
                action: id,
                options,
                event: 'started',
            });
            this.actionHistory.push({ action: id, options });
            if (this.actionHistory.length > AIProvider.MAX_LOCAL_HISTORY) {
                this.actionHistory.shift();
            }
            // wrap the action with slot actions
            const result = action(...args);
            const isTextStream = (m) => Reflect.has(m, Symbol.asyncIterator);
            if (isTextStream(result)) {
                return {
                    [Symbol.asyncIterator]: async function* () {
                        try {
                            yield* result;
                            slots.actions.emit({
                                action: id,
                                options,
                                event: 'finished',
                            });
                        }
                        catch (err) {
                            slots.actions.emit({
                                action: id,
                                options,
                                event: 'error',
                            });
                            if (err instanceof PaymentRequiredError) {
                                slots.actions.emit({
                                    action: id,
                                    options,
                                    event: 'aborted:paywall',
                                });
                            }
                            else if (err instanceof UnauthorizedError) {
                                slots.actions.emit({
                                    action: id,
                                    options,
                                    event: 'aborted:login-required',
                                });
                            }
                            else {
                                slots.actions.emit({
                                    action: id,
                                    options,
                                    event: 'aborted:server-error',
                                });
                            }
                            throw err;
                        }
                    },
                };
            }
            else {
                return result
                    .then(result => {
                    slots.actions.emit({
                        action: id,
                        options,
                        event: 'finished',
                    });
                    return result;
                })
                    .catch(err => {
                    slots.actions.emit({
                        action: id,
                        options,
                        event: 'error',
                    });
                    if (err instanceof PaymentRequiredError) {
                        slots.actions.emit({
                            action: id,
                            options,
                            event: 'aborted:paywall',
                        });
                    }
                    throw err;
                });
            }
        };
    }
    static provide(id, action) {
        if (id === 'userInfo') {
            AIProvider.instance.userInfoFn = action;
        }
        else if (id === 'histories') {
            AIProvider.instance.histories =
                action;
        }
        else if (id === 'photoEngine') {
            AIProvider.instance.photoEngine =
                action;
        }
        else if (id === 'onboarding') {
            AIProvider.instance.toggleGeneralAIOnboarding = action;
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            AIProvider.instance.provideAction(id, action);
        }
    }
}
//# sourceMappingURL=provider.js.map