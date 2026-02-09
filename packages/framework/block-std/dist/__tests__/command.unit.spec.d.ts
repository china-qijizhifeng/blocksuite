import type { Command } from '../command/index.js';
type Command1 = Command<never, 'commandData1', {
    command1Option?: string;
}>;
type Command2 = Command<'commandData1', 'commandData2'>;
type Command3 = Command<'commandData1' | 'commandData2', 'commandData3'>;
declare global {
    namespace BlockSuite {
        interface CommandContext {
            commandData1?: string;
            commandData2?: string;
            commandData3?: string;
        }
        interface Commands {
            command1: Command1;
            command2: Command2;
            command3: Command3;
            command4: Command;
        }
    }
}
export {};
//# sourceMappingURL=command.unit.spec.d.ts.map