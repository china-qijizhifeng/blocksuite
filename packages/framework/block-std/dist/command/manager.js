import { cmdSymbol } from './consts.js';
export class CommandManager {
    constructor(std) {
        this.std = std;
        this._commands = new Map();
        this._getCommandCtx = () => {
            return {
                std: this.std,
            };
        };
        this._createChain = (methods, _cmds) => {
            const getCommandCtx = this._getCommandCtx;
            const createChain = this._createChain;
            const chain = this.chain;
            return {
                [cmdSymbol]: _cmds,
                run: function () {
                    let ctx = getCommandCtx();
                    let success = false;
                    try {
                        const cmds = this[cmdSymbol];
                        ctx = runCmds(ctx, [
                            ...cmds,
                            (_, next) => {
                                success = true;
                                next();
                            },
                        ]);
                    }
                    catch (err) {
                        console.error(err);
                    }
                    return [success, ctx];
                },
                with: function (value) {
                    const cmds = this[cmdSymbol];
                    return createChain(methods, [
                        ...cmds,
                        (_, next) => next(value),
                    ]);
                },
                inline: function (command) {
                    const cmds = this[cmdSymbol];
                    return createChain(methods, [...cmds, command]);
                },
                try: function (fn) {
                    const cmds = this[cmdSymbol];
                    return createChain(methods, [
                        ...cmds,
                        (beforeCtx, next) => {
                            let ctx = beforeCtx;
                            const chains = fn(chain());
                            chains.some(chain => {
                                // inject ctx in the beginning
                                chain[cmdSymbol] = [
                                    (_, next) => {
                                        next(ctx);
                                    },
                                    ...chain[cmdSymbol],
                                ];
                                const [success] = chain
                                    .inline((branchCtx, next) => {
                                    ctx = { ...ctx, ...branchCtx };
                                    next();
                                })
                                    .run();
                                if (success) {
                                    next(ctx);
                                    return true;
                                }
                                return false;
                            });
                        },
                    ]);
                },
                tryAll: function (fn) {
                    const cmds = this[cmdSymbol];
                    return createChain(methods, [
                        ...cmds,
                        (beforeCtx, next) => {
                            let ctx = beforeCtx;
                            const chains = fn(chain());
                            let allFail = true;
                            chains.forEach(chain => {
                                // inject ctx in the beginning
                                chain[cmdSymbol] = [
                                    (_, next) => {
                                        next(ctx);
                                    },
                                    ...chain[cmdSymbol],
                                ];
                                const [success] = chain
                                    .inline((branchCtx, next) => {
                                    ctx = { ...ctx, ...branchCtx };
                                    next();
                                })
                                    .run();
                                if (success) {
                                    allFail = false;
                                }
                            });
                            if (!allFail) {
                                next(ctx);
                            }
                        },
                    ]);
                },
                ...methods,
            };
        };
        this.chain = () => {
            const methods = {};
            const createChain = this._createChain;
            for (const [name, command] of this._commands.entries()) {
                methods[name] = function (data) {
                    const cmds = this[cmdSymbol];
                    return createChain(methods, [
                        ...cmds,
                        (ctx, next) => command({ ...ctx, ...data }, next),
                    ]);
                };
            }
            return createChain(methods, []);
        };
    }
    add(name, command) {
        this._commands.set(name, command);
        return this;
    }
    exec(command, ...args) {
        const cmdFunc = this._commands.get(command);
        if (!cmdFunc) {
            throw new Error(`The command "${command}" not found`);
        }
        const inData = args[0];
        const ctx = {
            ...this._getCommandCtx(),
            ...inData,
        };
        let execResult = {};
        cmdFunc(ctx, result => {
            // @ts-ignore
            execResult = result ?? {};
        });
        return execResult;
    }
}
function runCmds(ctx, [cmd, ...rest]) {
    let _ctx = ctx;
    if (cmd) {
        cmd(ctx, data => {
            _ctx = runCmds({ ...ctx, ...data }, rest);
        });
    }
    return _ctx;
}
//# sourceMappingURL=manager.js.map