const defaultOptions = {
    gapHorizontal: 130,
    gapVertical: 10,
    x: 0,
    y: 0,
};
const sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
const computeBoxHeight = (node, options) => {
    const { height } = node;
    const children = node.children.map(child => computeBoxHeight(child, options));
    return {
        self: node,
        height: Math.max(height, children.reduce((prev, cur) => prev + cur.height, 0) +
            options.gapVertical * (children.length - 1)),
        children,
    };
};
const computePositionRight = (node, x, y, options) => {
    const { self, children, height } = node;
    const result = {
        self: {
            x: x,
            y: y - self.height / 2,
            width: self.width,
            height: self.height,
        },
        children: [],
    };
    let top = y - height / 2;
    children.forEach(child => {
        const { height } = child;
        const childY = top + height / 2;
        top += height + options.gapVertical;
        result.children.push(computePositionRight(child, x + node.self.width + options.gapHorizontal, childY, options));
    });
    return result;
};
const rightLayout = (node, options) => {
    const realOptions = { ...defaultOptions, ...options };
    const box = computeBoxHeight(node, realOptions);
    return computePositionRight(box, realOptions.x, realOptions.y, realOptions);
};
const computePositionLeft = (node, x, y, options) => {
    const { self, children, height } = node;
    const result = {
        self: {
            x: x - self.width,
            y: y - self.height / 2,
            width: self.width,
            height: self.height,
        },
        children: [],
    };
    let top = y - height / 2;
    children.forEach(child => {
        const { height } = child;
        const childY = top + height / 2;
        top += height + options.gapVertical;
        result.children.push(computePositionLeft(child, x - node.self.width - options.gapHorizontal, childY, options));
    });
    return result;
};
const leftLayout = (node, options) => {
    const realOptions = { ...defaultOptions, ...options };
    const box = computeBoxHeight(node, realOptions);
    return computePositionLeft(box, 0, 0, realOptions);
};
const leftRightLayout = (node, options) => {
    const realOptions = { ...defaultOptions, ...options };
    const boxList = node.children.map(child => computeBoxHeight(child, realOptions));
    const mid = boxList.reduce((prev, cur) => Math.max(prev, cur.height), 0) / 2;
    const leftBox = [];
    const rightBox = [];
    let left = true;
    let currentTop = 0;
    boxList.forEach(box => {
        if (left) {
            leftBox.push(box);
        }
        else {
            rightBox.push(box);
        }
        currentTop += box.height;
        if (left && currentTop > mid) {
            left = false;
            currentTop = 0;
        }
    });
    let rightTop = 0 -
        (sum(rightBox.map(v => v.height)) +
            realOptions.gapVertical * (rightBox.length - 1)) /
            2;
    let leftTop = 0 -
        (leftBox.reduce((prev, cur) => prev + cur.height, 0) +
            realOptions.gapVertical * (leftBox.length - 1)) /
            2;
    const root = {
        self: {
            x: 0 - node.width / 2,
            y: 0 - node.height / 2,
            width: node.width,
            height: node.height,
        },
        children: [],
    };
    leftBox.forEach(box => {
        root.children.push(computePositionLeft(box, 0 - (node.width / 2 + realOptions.gapHorizontal), leftTop + box.height / 2, realOptions));
        leftTop += box.height + realOptions.gapVertical;
    });
    rightBox.forEach(box => {
        root.children.push(computePositionRight(box, node.width / 2 + realOptions.gapHorizontal, rightTop + box.height / 2, realOptions));
        rightTop += box.height + realOptions.gapVertical;
    });
    return root;
};
const computeBoxWidth = (node, options) => {
    const { width } = node;
    const children = node.children.map(child => computeBoxWidth(child, options));
    return {
        self: node,
        width: Math.max(width, children.reduce((prev, cur) => prev + cur.width, 0) +
            options.gapHorizontal * (children.length - 1)),
        children,
    };
};
const computePositionTop = (node, x, y, options) => {
    const { self, children, width } = node;
    const result = {
        self: {
            x,
            y,
            width: self.width,
            height: self.height,
        },
        children: [],
    };
    let left = x - width / 2;
    children.forEach(child => {
        const { self, width } = child;
        const childX = left + width / 2;
        left += width + options.gapHorizontal;
        result.children.push(computePositionTop(child, childX, y - self.height - options.gapVertical, options));
    });
    return result;
};
const topLayout = (node, options) => {
    const realOptions = { ...defaultOptions, ...options };
    const box = computeBoxWidth(node, realOptions);
    return computePositionTop(box, 0, 0, realOptions);
};
const computePositionBottom = (node, x, y, options) => {
    const { self, children, width } = node;
    const result = {
        self: {
            x,
            y,
            width: self.width,
            height: self.height,
        },
        children: [],
    };
    let left = x - width / 2;
    children.forEach(child => {
        const { self, width } = child;
        const childX = left + width / 2;
        left += width + options.gapHorizontal;
        result.children.push(computePositionBottom(child, childX, y + self.height + options.gapVertical, options));
    });
    return result;
};
const bottomLayout = (node, options) => {
    const realOptions = { ...defaultOptions, ...options };
    const box = computeBoxWidth(node, realOptions);
    return computePositionBottom(box, 0, 0, realOptions);
};
const topBottomLayout = (node, options) => {
    const realOptions = { ...defaultOptions, ...options };
    const boxList = node.children.map(child => computeBoxWidth(child, realOptions));
    const mid = boxList.reduce((prev, cur) => Math.max(prev, cur.width), 0) / 2;
    const topBox = [];
    const bottomBox = [];
    let top = true;
    let currentLeft = 0;
    boxList.forEach(box => {
        if (top) {
            topBox.push(box);
        }
        else {
            bottomBox.push(box);
        }
        currentLeft += box.width;
        if (top && currentLeft > mid) {
            top = false;
            currentLeft = 0;
        }
    });
    let topLeft = 0 -
        (sum(topBox.map(v => v.width)) +
            realOptions.gapHorizontal * (topBox.length - 1)) /
            2;
    let bottomLeft = 0 -
        (bottomBox.reduce((prev, cur) => prev + cur.width, 0) +
            realOptions.gapHorizontal * (bottomBox.length - 1)) /
            2;
    const root = {
        self: {
            x: 0,
            y: 0,
            width: node.width,
            height: node.height,
        },
        children: [],
    };
    topBox.forEach(box => {
        root.children.push(computePositionTop(box, topLeft + box.width / 2, 0 - (node.height / 2 + realOptions.gapVertical), realOptions));
        topLeft += box.width + realOptions.gapHorizontal;
    });
    bottomBox.forEach(box => {
        root.children.push(computePositionBottom(box, bottomLeft + box.width / 2, node.height / 2 + realOptions.gapVertical, realOptions));
        bottomLeft += box.width + realOptions.gapHorizontal;
    });
    return root;
};
export const layout = {
    right: rightLayout,
    left: leftLayout,
    leftRight: leftRightLayout,
    top: topLayout,
    bottom: bottomLayout,
    topBottom: topBottomLayout,
};
//# sourceMappingURL=layout.js.map