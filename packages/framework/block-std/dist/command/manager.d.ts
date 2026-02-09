import type { Chain, ExecCommandResult, IfAllKeysOptional, InDataOfCommand, InitCommandCtx } from './types.js';
export declare class CommandManager {
    std: BlockSuite.Std;
    private _commands;
    constructor(std: BlockSuite.Std);
    private _getCommandCtx;
    private _createChain;
    add<N extends BlockSuite.CommandName>(name: N, command: BlockSuite.Commands[N]): CommandManager;
    chain: () => Chain<InitCommandCtx>;
    exec<K extends keyof BlockSuite.Commands>(command: K, ...args: IfAllKeysOptional<Omit<InDataOfCommand<BlockSuite.Commands[K]>, keyof InitCommandCtx>, [
        inData: void | Omit<InDataOfCommand<BlockSuite.Commands[K]>, keyof InitCommandCtx>
    ], [
        inData: Omit<InDataOfCommand<BlockSuite.Commands[K]>, keyof InitCommandCtx>
    ]>): ExecCommandResult<K>;
}
//# sourceMappingURL=manager.d.ts.map