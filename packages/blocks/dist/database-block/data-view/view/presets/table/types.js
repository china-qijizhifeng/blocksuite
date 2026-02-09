import { assertExists } from '@blocksuite/global/utils';
export const getTableContainer = (ele) => {
    const element = ele.closest('.affine-database-table-container');
    assertExists(element);
    return element;
};
//# sourceMappingURL=types.js.map