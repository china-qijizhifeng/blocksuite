import { assertExists } from '@blocksuite/global/utils';
import type { BlockModel } from '@blocksuite/store';
import { Slice, Text } from '@blocksuite/store';
import type { TemplateResult } from 'lit';

import { toast } from '../../../_common/components/toast.js';
import { textConversionConfigs } from '../../../_common/configs/text-conversion.js';
import { textFormatConfigs } from '../../../_common/configs/text-format/config.js';
import {
  ArrowDownBigIcon,
  ArrowUpBigIcon,
  CopyIcon,
  DeleteIcon,
  HeadingIcon,
  NowIcon,
  PasteIcon,
  TodayIcon,
  TomorrowIcon,
  YesterdayIcon,
} from '../../../_common/icons/index.js';
import {
  getInlineEditorByModel,
} from '../../../_common/utils/index.js';
import { clearMarksOnDiscontinuousInput } from '../../../_common/utils/inline-editor.js';
import type { ParagraphBlockModel } from '../../../paragraph-block/index.js';
import { onModelTextUpdated } from '../../../root-block/utils/index.js';
import type { RootBlockComponent } from '../../types.js';
import { type SlashMenuTooltip, slashMenuToolTips } from './tooltips/index.js';
import {
  createConversionItem,
  formatDate,
  formatTime,
  insertContent,
  insideDatabase,
  insideEdgelessText,
} from './utils.js';

export type SlashMenuConfig = {
  triggerKeys: string[];
  ignoreBlockTypes: BlockSuite.Flavour[];
  items: SlashMenuItem[];
  maxHeight: number;
  tooltipTimeout: number;
};

export type SlashMenuStaticConfig = Omit<SlashMenuConfig, 'items'> & {
  items: SlashMenuStaticItem[];
};

export type SlashMenuItem = SlashMenuStaticItem | SlashMenuItemGenerator;

export type SlashMenuStaticItem =
  | SlashMenuGroupDivider
  | SlashMenuActionItem
  | SlashSubMenu;

export type SlashMenuGroupDivider = {
  groupName: string;
  showWhen?: (ctx: SlashMenuContext) => boolean;
};

export type SlashMenuActionItem = {
  name: string;
  description?: string;
  icon?: TemplateResult;
  tooltip?: SlashMenuTooltip;
  alias?: string[];
  showWhen?: (ctx: SlashMenuContext) => boolean;
  action: (ctx: SlashMenuContext) => void | Promise<void>;

  customTemplate?: TemplateResult<1>;
};

export type SlashSubMenu = {
  name: string;
  description?: string;
  icon?: TemplateResult;
  alias?: string[];
  showWhen?: (ctx: SlashMenuContext) => boolean;
  subMenu: SlashMenuStaticItem[];
};

export type SlashMenuItemGenerator = (
  ctx: SlashMenuContext
) => (SlashMenuGroupDivider | SlashMenuActionItem | SlashSubMenu)[];

export type SlashMenuContext = {
  rootElement: RootBlockComponent;
  model: BlockModel;
};

export const defaultSlashMenuConfig: SlashMenuConfig = {
  triggerKeys: ['/', '、'],
  ignoreBlockTypes: ['affine:code'],
  maxHeight: 344,
  tooltipTimeout: 800,
  items: [
    // ---------------------------------------------------------
    // AI 占位符（自定义内联组件）
    // 插入可交互的 AI 占位符，支持编辑、持久化
    // ---------------------------------------------------------
    { groupName: 'AI' },
    {
      name: 'AI 占位符',
      description: '插入 AI 占位符，让 AI 填充内容',
      icon: HeadingIcon,
      action: ({ rootElement, model }) => {
        // 获取内联编辑器
        const inlineEditor = getInlineEditorByModel(rootElement.host, model);
        if (!inlineEditor) {
          console.warn('[AI占位符] 无法获取内联编辑器');
          return;
        }
        
        // 获取当前光标位置
        const inlineRange = inlineEditor.getInlineRange();
        if (!inlineRange) {
          console.warn('[AI占位符] 无法获取光标位置');
          return;
        }
        
        // 插入带 aiPlaceholder 属性的占位字符
        // BlockSuite 会自动渲染为 <affine-ai-placeholder> 组件
        inlineEditor.insertText(inlineRange, ' ', {
          aiPlaceholder: { content: '输入要求' },
        });
        
        // 移动光标到占位符后面
        inlineEditor.setInlineRange({
          index: inlineRange.index + 1,
          length: 0,
        });
      },
    },

    // ---------------------------------------------------------
    { groupName: '基础' },
    ...textConversionConfigs
      .filter(i => i.type && ['text', 'h1', 'h2', 'h3'].includes(i.type))
      .map(createConversionItem),
    {
      name: 'Other Headings',
      icon: HeadingIcon,
      subMenu: [
        { groupName: 'Headings' },
        ...textConversionConfigs
          .filter(i => i.type && ['h4', 'h5', 'h6'].includes(i.type))
          .map<SlashMenuActionItem>(createConversionItem),
      ],
    },
    ...textConversionConfigs
      .filter(i => i.flavour === 'affine:code')
      .map<SlashMenuActionItem>(config => ({
        ...createConversionItem(config),
        showWhen: ({ model }) =>
          model.doc.schema.flavourSchemaMap.has(config.flavour) &&
          !insideDatabase(model),
        action: ({ rootElement }) => {
          const { flavour, type } = config;
          rootElement.host.std.command
            .chain()
            .updateBlockType({
              flavour,
              props: { type },
            })
            .inline((ctx, next) => {
              const newModels = ctx.updatedBlocks;
              if (!newModels) return false;

              // Reset selection if the target is code block
              if (flavour === 'affine:code') {
                if (newModels.length !== 1) {
                  console.error(
                    "Failed to reset selection! New model length isn't 1"
                  );
                  return false;
                }
                const codeModel = newModels[0];
                onModelTextUpdated(rootElement.host, codeModel, richText => {
                  const inlineEditor = richText.inlineEditor;
                  assertExists(inlineEditor);
                  inlineEditor.focusEnd();
                }).catch(console.error);
              }

              return next();
            })
            .run();
        },
      })),

    ...textConversionConfigs
      .filter(i => i.type && ['quote', 'divider'].includes(i.type))
      .map<SlashMenuActionItem>(config => ({
        ...createConversionItem(config),
        showWhen: ({ model }) =>
          model.doc.schema.flavourSchemaMap.has(config.flavour) &&
          !insideDatabase(model) &&
          !insideEdgelessText(model),
      })),

    // ---------------------------------------------------------
    { groupName: 'List' },
    ...textConversionConfigs
      .filter(i => i.flavour === 'affine:list')
      .map(createConversionItem),

    // ---------------------------------------------------------
    { groupName: 'Style' },
    ...textFormatConfigs
      .filter(i => !['Link', 'Code'].includes(i.name))
      .map<SlashMenuActionItem>(({ name, icon, id }) => ({
        name,
        icon,
        tooltip: slashMenuToolTips[name],
        action: ({ rootElement, model }) => {
          if (!model.text) {
            return;
          }
          const len = model.text.length;
          if (!len) {
            const inlineEditor = getInlineEditorByModel(
              rootElement.host,
              model
            );
            assertExists(
              inlineEditor,
              "Can't set style mark! Inline editor not found"
            );
            inlineEditor.setMarks({
              [id]: true,
            });
            clearMarksOnDiscontinuousInput(inlineEditor);
            return;
          }
          model.text.format(0, len, {
            [id]: true,
          });
        },
      })),

    // ---------------------------------------------------------
    // 【已移除】Page、Content & Media、Frame/Group 等复杂功能
    // 只保留纯文本编辑相关的功能
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    { groupName: 'Date' },
    () => {
      const now = new Date();
      const tomorrow = new Date();
      const yesterday = new Date();

      yesterday.setDate(yesterday.getDate() - 1);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return [
        {
          name: 'Today',
          icon: TodayIcon,
          tooltip: slashMenuToolTips['Today'],
          description: formatDate(now),
          action: ({ rootElement, model }) => {
            insertContent(rootElement.host, model, formatDate(now));
          },
        },
        {
          name: 'Tomorrow',
          icon: TomorrowIcon,
          tooltip: slashMenuToolTips['Tomorrow'],
          description: formatDate(tomorrow),
          action: ({ rootElement, model }) => {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            insertContent(rootElement.host, model, formatDate(tomorrow));
          },
        },
        {
          name: 'Yesterday',
          icon: YesterdayIcon,
          tooltip: slashMenuToolTips['Yesterday'],
          description: formatDate(yesterday),
          action: ({ rootElement, model }) => {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            insertContent(rootElement.host, model, formatDate(yesterday));
          },
        },
        {
          name: 'Now',
          icon: NowIcon,
          tooltip: slashMenuToolTips['Now'],
          description: formatTime(now),
          action: ({ rootElement, model }) => {
            insertContent(rootElement.host, model, formatTime(now));
          },
        },
      ];
    },

    // ---------------------------------------------------------
    // 【已移除】Database 相关功能（Table View, Kanban View, Todo）
    // ---------------------------------------------------------

    // ---------------------------------------------------------
    { groupName: 'Actions' },
    {
      name: 'Move Up',
      description: 'Shift this line up.',
      icon: ArrowUpBigIcon,
      tooltip: slashMenuToolTips['Move Up'],
      action: ({ rootElement, model }) => {
        const doc = rootElement.doc;
        const previousSiblingModel = doc.getPrev(model);
        if (!previousSiblingModel) return;

        const parentModel = doc.getParent(previousSiblingModel);
        if (!parentModel) return;

        doc.moveBlocks([model], parentModel, previousSiblingModel, true);
      },
    },
    {
      name: 'Move Down',
      description: 'Shift this line down.',
      icon: ArrowDownBigIcon,
      tooltip: slashMenuToolTips['Move Down'],
      action: ({ rootElement, model }) => {
        const doc = rootElement.doc;
        const nextSiblingModel = doc.getNext(model);
        if (!nextSiblingModel) return;

        const parentModel = doc.getParent(nextSiblingModel);
        if (!parentModel) return;

        doc.moveBlocks([model], parentModel, nextSiblingModel, false);
      },
    },
    {
      name: 'Copy',
      description: 'Copy this line to clipboard.',
      icon: PasteIcon,
      tooltip: slashMenuToolTips['Copy'],
      action: ({ rootElement, model }) => {
        const slice = Slice.fromModels(rootElement.std.doc, [model]);

        rootElement.std.clipboard
          .copy(slice)
          .then(() => {
            toast(rootElement.host, 'Copied to clipboard');
          })
          .catch(e => {
            console.error(e);
          });
      },
    },
    {
      name: 'Duplicate',
      description: 'Create a duplicate of this line.',
      icon: CopyIcon,
      tooltip: slashMenuToolTips['Copy'],
      action: ({ rootElement, model }) => {
        if (!model.text || !(model.text instanceof Text)) {
          throw new Error("Can't duplicate a block without text");
        }
        const parent = rootElement.doc.getParent(model);
        if (!parent) {
          throw new Error('Failed to duplicate block! Parent not found');
        }
        const index = parent.children.indexOf(model);

        // TODO add clone model util
        rootElement.doc.addBlock(
          model.flavour as never,
          {
            type: (model as ParagraphBlockModel).type,
            text: rootElement.doc.Text.fromDelta(model.text.toDelta()),
            // @ts-expect-error
            checked: model.checked,
          },
          rootElement.doc.getParent(model),
          index
        );
      },
    },
    {
      name: 'Delete',
      description: 'Remove this line permanently.',
      alias: ['remove'],
      icon: DeleteIcon,
      tooltip: slashMenuToolTips['Delete'],
      action: ({ rootElement, model }) => {
        rootElement.doc.deleteBlock(model);
      },
    },
  ],
};
