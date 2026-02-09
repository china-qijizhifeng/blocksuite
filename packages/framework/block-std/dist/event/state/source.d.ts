import { UIEventState } from '../base.js';
export declare enum EventScopeSourceType {
    Selection = "selection",
    Target = "target"
}
export type EventSourceStateOptions = {
    event: Event;
    sourceType: EventScopeSourceType;
};
export declare class EventSourceState extends UIEventState {
    type: string;
    readonly sourceType: EventScopeSourceType;
    constructor({ event, sourceType }: EventSourceStateOptions);
}
declare global {
    interface BlockSuiteUIEventState {
        sourceState: EventSourceState;
    }
}
//# sourceMappingURL=source.d.ts.map