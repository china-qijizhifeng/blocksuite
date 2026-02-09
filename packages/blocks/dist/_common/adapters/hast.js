export const hastGetTextContent = (ast, defaultStr = '') => {
    if (!ast) {
        return defaultStr;
    }
    switch (ast.type) {
        case 'text': {
            return ast.value.replace(/\s+/g, ' ');
        }
        case 'element': {
            switch (ast.tagName) {
                case 'br': {
                    return '\n';
                }
            }
            return ast.children.map(child => hastGetTextContent(child)).join('');
        }
    }
    return defaultStr;
};
export const hastGetElementChildren = (ast) => {
    if (!ast) {
        return [];
    }
    if (ast.type === 'element') {
        return ast.children.filter(child => child.type === 'element');
    }
    return [];
};
export const hastGetTextChildren = (ast) => {
    if (!ast) {
        return [];
    }
    if (ast.type === 'element') {
        return ast.children.filter(child => child.type === 'text');
    }
    return [];
};
export const hastGetTextChildrenOnlyAst = (ast) => {
    return {
        ...ast,
        children: hastGetTextChildren(ast),
    };
};
const querySelectorTag = (ast, tagName) => {
    if (ast.type === 'element') {
        if (ast.tagName === tagName) {
            return ast;
        }
        for (const child of ast.children) {
            const result = querySelectorTag(child, tagName);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
};
const querySelectorClass = (ast, className) => {
    if (ast.type === 'element') {
        if (Array.isArray(ast.properties?.className) &&
            ast.properties.className.includes(className)) {
            return ast;
        }
        for (const child of ast.children) {
            const result = querySelectorClass(child, className);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
};
const querySelectorId = (ast, id) => {
    if (ast.type === 'element') {
        if (ast.properties.id === id) {
            return ast;
        }
        for (const child of ast.children) {
            const result = querySelectorId(child, id);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
};
export const hastQuerySelector = (ast, selector) => {
    if (ast.type === 'root') {
        for (const child of ast.children) {
            const result = hastQuerySelector(child, selector);
            if (result) {
                return result;
            }
        }
    }
    else if (ast.type === 'element') {
        if (selector.startsWith('.')) {
            return querySelectorClass(ast, selector.slice(1));
        }
        else if (selector.startsWith('#')) {
            return querySelectorId(ast, selector.slice(1));
        }
        else {
            return querySelectorTag(ast, selector);
        }
    }
    return undefined;
};
export const hastFlatNodes = (ast, expression) => {
    if (ast.type === 'element') {
        const children = ast.children.map(child => hastFlatNodes(child, expression));
        return {
            ...ast,
            children: children.flatMap(child => {
                if (child.type === 'element') {
                    if (expression(child.tagName)) {
                        return child.children;
                    }
                }
                return child;
            }),
        };
    }
    return ast;
};
//# sourceMappingURL=hast.js.map