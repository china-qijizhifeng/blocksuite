import { assertExists } from '@blocksuite/global/utils';
import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import { html } from 'lit';
import { ref } from 'lit/directives/ref.js';
import { whenHover } from '../../../../../_common/components/hover/index.js';
import { ArrowDownIcon, HighLightDuotoneIcon, TextBackgroundDuotoneIcon, TextForegroundDuotoneIcon, } from '../../../../../_common/icons/index.js';
import { backgroundConfig, foregroundConfig } from './consts.js';
var HighlightType;
(function (HighlightType) {
    HighlightType[HighlightType["Foreground"] = 0] = "Foreground";
    HighlightType[HighlightType["Background"] = 1] = "Background";
})(HighlightType || (HighlightType = {}));
let lastUsedColor = null;
let lastUsedHighlightType = HighlightType.Background;
const updateHighlight = (host, color, highlightType) => {
    lastUsedColor = color;
    lastUsedHighlightType = highlightType;
    const payload = {
        styles: {
            color: highlightType === HighlightType.Foreground ? color : null,
            background: highlightType === HighlightType.Background ? color : null,
        },
    };
    host.std.command
        .chain()
        .try(chain => [
        chain.getTextSelection().formatText(payload),
        chain.getBlockSelections().formatBlock(payload),
        chain.formatNative(payload),
    ])
        .run();
};
const HighlightPanel = (formatBar, containerRef) => {
    return html `<div ${ref(containerRef)} class="highlight-panel">
    <!-- Text Color Highlight -->
    <div class="highligh-panel-heading">颜色</div>
    ${foregroundConfig.map(({ name, color }) => html `<icon-button
          width="100%"
          height="32px"
          style="padding-left: 4px; justify-content: flex-start; gap: 8px;"
          text="${name}"
          data-testid="${color ?? 'unset'}"
          @click="${() => {
        updateHighlight(formatBar.host, color, HighlightType.Foreground);
        formatBar.requestUpdate();
    }}"
        >
          <span style="color: ${color}; display: flex; align-items: center;">
            ${TextForegroundDuotoneIcon}
          </span>
        </icon-button>`)}

    <!-- Text Background Highlight -->
    <div class="highligh-panel-heading">背景</div>
    ${backgroundConfig.map(({ name, color }) => html `<icon-button
          width="100%"
          height="32px"
          style="padding-left: 4px; justify-content: flex-start; gap: 8px;"
          text="${name}"
          @click="${() => {
        updateHighlight(formatBar.host, color, HighlightType.Background);
        formatBar.requestUpdate();
    }}"
        >
          <span
            style="color: ${color ??
        'rgba(0,0,0,0)'}; display: flex; align-items: center;"
          >
            ${TextBackgroundDuotoneIcon}
          </span>
        </icon-button>`)}
  </div>`;
};
export const HighlightButton = (formatBar) => {
    const editorHost = formatBar.host;
    const { setFloating, setReference } = whenHover(isHover => {
        if (!isHover) {
            const panel = formatBar.shadowRoot?.querySelector('.highlight-panel');
            if (!panel)
                return;
            panel.style.display = 'none';
            return;
        }
        const button = formatBar.shadowRoot?.querySelector('.highlight-button');
        const panel = formatBar.shadowRoot?.querySelector('.highlight-panel');
        assertExists(button);
        assertExists(panel);
        panel.style.display = 'block';
        computePosition(button, panel, {
            placement: 'bottom',
            middleware: [
                flip(),
                offset(10),
                shift({
                    padding: 6,
                }),
            ],
        })
            .then(({ x, y }) => {
            panel.style.left = `${x}px`;
            panel.style.top = `${y}px`;
        })
            .catch(console.error);
    });
    const highlightPanel = HighlightPanel(formatBar, setFloating);
    return html `<div ${ref(setReference)} class="highlight-button">
    <icon-button
      class="highlight-icon"
      data-last-used="${lastUsedColor ?? 'unset'}"
      width="52px"
      height="32px"
      @click="${() => updateHighlight(editorHost, lastUsedColor, lastUsedHighlightType)}"
    >
      <span
        style="color: ${lastUsedColor}; display: flex; align-items: center; "
        >${HighLightDuotoneIcon}</span
      >
      ${ArrowDownIcon}</icon-button
    >
    ${highlightPanel}
  </div>`;
};
//# sourceMappingURL=highlight-button.js.map