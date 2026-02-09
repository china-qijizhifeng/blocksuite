import { AIProvider } from '../provider.js';
export function reportResponse(event) {
    const lastAction = AIProvider.actionHistory.at(-1);
    if (!lastAction)
        return;
    AIProvider.slots.actions.emit({
        action: lastAction.action,
        options: lastAction.options,
        event,
    });
}
//# sourceMappingURL=action-reporter.js.map