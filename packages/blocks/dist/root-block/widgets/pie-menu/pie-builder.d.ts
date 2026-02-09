import type { CssVariableName } from '../../../_common/theme/css-variables.js';
import type { ActionFunction, PieColorNodeModel, PieCommandNodeModel, PieMenuContext, PieMenuSchema, PieNodeModel, PieSubmenuNodeModel } from './base.js';
export interface IPieColorPickerNodeProps {
    label: string;
    active: (ctx: PieMenuContext) => CssVariableName;
    onChange: PieColorNodeModel['onChange'];
    openOnHover?: PieSubmenuNodeModel['openOnHover'];
    hollow?: boolean;
    colors: {
        color: CssVariableName;
    }[];
}
type PieBuilderConstructorProps = Omit<PieMenuSchema, 'root' | 'angle' | 'startAngle' | 'endAngle' | 'disabled'> & {
    icon: PieNodeModel['icon'];
};
export declare class PieMenuBuilder {
    private _schema;
    private _stack;
    constructor(base: PieBuilderConstructorProps);
    private _computeAngles;
    private _currentNode;
    command(node: Omit<PieCommandNodeModel, 'type'>): this;
    expandableCommand(node: Omit<PieSubmenuNodeModel, 'type' | 'children' | 'role'> & {
        action: ActionFunction;
        submenus: (pie: PieMenuBuilder) => void;
    }): void;
    colorPicker(props: IPieColorPickerNodeProps): void;
    beginSubmenu(node: Omit<PieSubmenuNodeModel, 'type' | 'children' | 'role'>, action?: PieSubmenuNodeModel['action']): this;
    endSubmenu(): this;
    reset(base: PieBuilderConstructorProps): void;
    build(): PieMenuSchema;
}
export {};
//# sourceMappingURL=pie-builder.d.ts.map