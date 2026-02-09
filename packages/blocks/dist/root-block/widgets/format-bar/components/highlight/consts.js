const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'purple',
    'grey',
];
const colorNames = {
    red: '红色',
    orange: '橙色',
    yellow: '黄色',
    green: '绿色',
    teal: '青色',
    blue: '蓝色',
    purple: '紫色',
    grey: '灰色',
};
export const backgroundConfig = [
    {
        name: '默认背景',
        color: null,
        hotkey: null,
    },
    ...colors.map(color => ({
        name: `${colorNames[color]}背景`,
        color: `var(--affine-text-highlight-${color})`,
        hotkey: null,
    })),
];
export const foregroundConfig = [
    {
        name: '默认颜色',
        color: null,
        hotkey: null,
    },
    ...colors.map(color => ({
        name: colorNames[color],
        color: `var(--affine-text-highlight-foreground-${color})`,
        hotkey: null,
    })),
];
//# sourceMappingURL=consts.js.map