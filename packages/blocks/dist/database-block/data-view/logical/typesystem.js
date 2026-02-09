export const tUnion = (list) => ({
    type: 'union',
    title: 'union',
    list,
});
export const tArray = (ele) => {
    return {
        type: 'array',
        title: 'array',
        ele,
    };
};
export const isTArray = (type) => {
    return type.type === 'array';
};
export const tTypeVar = (name, bound) => {
    return {
        type: 'typeVar',
        title: 'typeVar',
        name,
        bound,
    };
};
export const tTypeRef = (name) => {
    return {
        type: 'typeRef',
        title: 'typeRef',
        name,
    };
};
export const tFunction = (fn) => {
    return {
        type: 'function',
        title: 'function',
        typeVars: fn.typeVars ?? [],
        args: fn.args,
        rt: fn.rt,
    };
};
export class DataDefine {
    constructor(config, dataMap) {
        this.config = config;
        this.dataMap = dataMap;
    }
    isByName(name) {
        return name === this.config.name;
    }
    isSubOfByName(superType) {
        if (this.isByName(superType)) {
            return true;
        }
        return this.config.supers.some(sup => sup.isSubOfByName(superType));
    }
    create(data) {
        return {
            type: 'data',
            name: this.config.name,
            data,
        };
    }
    is(data) {
        if (data.type !== 'data') {
            return false;
        }
        return data.name === this.config.name;
    }
    isSubOf(superType) {
        if (this.is(superType)) {
            return true;
        }
        return this.config.supers.some(sup => sup.isSubOf(superType));
    }
    isSuperOf(subType) {
        const dataDefine = this.dataMap.get(subType.name);
        if (!dataDefine) {
            throw new Error('bug');
        }
        return dataDefine.isSubOfByName(this.config.name);
    }
}
const createDataHelper = (...supers) => {
    return {
        create(name) {
            return {
                name,
                supers,
            };
        },
        extends(dataDefine) {
            return createDataHelper(...supers, dataDefine);
        },
    };
};
const DataHelper = createDataHelper();
export class Typesystem {
    constructor() {
        this.dataMap = new Map();
    }
    defineData(config) {
        const result = new DataDefine(config, this.dataMap);
        this.dataMap.set(config.name, result);
        return result;
    }
    isDataType(t) {
        return t.type === 'data';
    }
    isSubtype(superType, sub, context) {
        if (superType.type === 'typeRef') {
            // TODO both are ref
            if (context && sub.type != 'typeRef') {
                context[superType.name] = sub;
            }
            // TODO bound
            return true;
        }
        if (sub.type === 'typeRef') {
            // TODO both are ref
            if (context) {
                context[sub.name] = superType;
            }
            return true;
        }
        if (tUnknown.is(superType)) {
            return true;
        }
        if (superType.type === 'union') {
            return superType.list.some(type => this.isSubtype(type, sub, context));
        }
        if (sub.type === 'union') {
            return sub.list.every(type => this.isSubtype(superType, type, context));
        }
        if (this.isDataType(sub)) {
            const dataDefine = this.dataMap.get(sub.name);
            if (!dataDefine) {
                throw new Error('bug');
            }
            if (!this.isDataType(superType)) {
                return false;
            }
            return dataDefine.isSubOf(superType);
        }
        if (superType.type === 'array' || sub.type === 'array') {
            if (superType.type !== 'array' || sub.type !== 'array') {
                return false;
            }
            return this.isSubtype(superType.ele, sub.ele, context);
        }
        return false;
    }
    subst(context, template) {
        const subst = (type) => {
            if (this.isDataType(type)) {
                return type;
            }
            switch (type.type) {
                case 'typeRef':
                    return { ...context[type.name] };
                case 'union':
                    return tUnion(type.list.map(type => subst(type)));
                case 'array':
                    return tArray(subst(type.ele));
                case 'function':
                    throw new Error('TODO');
            }
        };
        const result = tFunction({
            args: template.args.map(type => subst(type)),
            rt: subst(template.rt),
        });
        return result;
    }
    instance(context, realArgs, realRt, template) {
        const ctx = { ...context };
        template.args.forEach((arg, i) => {
            const realArg = realArgs[i];
            if (realArg) {
                this.isSubtype(arg, realArg, ctx);
            }
        });
        this.isSubtype(realRt, template.rt);
        return this.subst(ctx, template);
    }
}
export const typesystem = new Typesystem();
export const tUnknown = typesystem.defineData(DataHelper.create('Unknown'));
//# sourceMappingURL=typesystem.js.map