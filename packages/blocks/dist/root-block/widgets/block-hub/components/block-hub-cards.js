import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
export function BlockHubCards(blockHubItems, type, title, maxHeight, shouldDisplayCard, isGrabbing, showTooltip) {
    const shouldScroll = maxHeight < 800;
    const styles = styleMap({
        maxHeight: `${maxHeight}px`,
        overflowY: shouldScroll ? 'scroll' : 'unset',
    });
    return html `
    <div
      class="block-hub-cards-container ${shouldDisplayCard ? 'visible' : ''}"
      style="${styles}"
      type=${type}
    >
      <div class="block-hub-cards-title-container">${title}</div>
      ${blockHubItems.map(({ flavour, type, name, description, icon, tooltip }, index) => {
        return html `
            <div class="card-container-wrapper">
              <div class="card-container-inner">
                <div
                  class="card-container ${isGrabbing ? 'grabbing' : ''}"
                  draggable="true"
                  affine-flavour=${flavour}
                  affine-type=${type ?? ''}
                >
                  <div class="card-description-container">
                    <div>${name}</div>
                    <div class="description">${description}</div>
                  </div>
                  <div class="card-icon-container">${icon}</div>
                  ${showTooltip
            ? html `<affine-tooltip
                        tip-position=${shouldScroll &&
                index === blockHubItems.length - 1
                ? 'top'
                : 'bottom'}
                        >${tooltip}</affine-tooltip
                      >`
            : null}
                </div>
              </div>
            </div>
          `;
    })}
    </div>
  `;
}
//# sourceMappingURL=block-hub-cards.js.map