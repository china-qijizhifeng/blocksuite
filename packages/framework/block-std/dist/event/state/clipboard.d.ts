import { UIEventState } from '../base.js';
type ClipboardEventStateOptions = {
    event: ClipboardEvent;
};
export declare class ClipboardEventState extends UIEventState {
    type: string;
    raw: ClipboardEvent;
    constructor({ event }: ClipboardEventStateOptions);
}
declare global {
    interface BlockSuiteUIEventState {
        clipboardState: ClipboardEventState;
    }
}
export {};
//# sourceMappingURL=clipboard.d.ts.map