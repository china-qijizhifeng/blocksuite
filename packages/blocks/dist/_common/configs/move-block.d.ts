import type { BlockElement } from '@blocksuite/block-std';
interface MoveBlockConfig {
    name: string;
    hotkey: string[];
    action: (blockElement: BlockElement) => void;
}
export declare const moveBlockConfigs: MoveBlockConfig[];
export {};
//# sourceMappingURL=move-block.d.ts.map