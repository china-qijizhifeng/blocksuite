import { defineBlockSchema } from '@blocksuite/store';
import { DEFAULT_LINK_PREVIEW_ENDPOINT } from '../consts.js';
import { isAbortError } from '../utils/helper.js';
export function createEmbedBlockSchema({ name, version, toModel, props, transformer, }) {
    return defineBlockSchema({
        flavour: `affine:embed-${name}`,
        props: internalPrimitives => {
            const userProps = props?.(internalPrimitives);
            return {
                index: 'a0',
                xywh: '[0,0,0,0]',
                rotate: 0,
                ...userProps,
            };
        },
        metadata: {
            version,
            role: 'content',
        },
        toModel,
        transformer,
    });
}
// ========== Link Preview ==========
export class LinkPreviewer {
    constructor() {
        this._endpoint = DEFAULT_LINK_PREVIEW_ENDPOINT;
        this.setEndpoint = (endpoint) => {
            this._endpoint = endpoint;
        };
        this.query = async (url, signal) => {
            if ((url.startsWith('https://x.com/') ||
                url.startsWith('https://www.x.com/') ||
                url.startsWith('https://www.twitter.com/') ||
                url.startsWith('https://twitter.com/')) &&
                url.includes('/status/')) {
                // use api.fxtwitter.com
                url =
                    'https://api.fxtwitter.com/status/' + /\/status\/(.*)/.exec(url)?.[1];
                try {
                    const { tweet } = await fetch(url, { signal }).then(res => res.json());
                    return {
                        title: tweet.author.name,
                        icon: tweet.author.avatar_url,
                        description: tweet.text,
                        image: tweet.media?.photos[0].url || tweet.author.banner_url,
                    };
                }
                catch (_) {
                    throw new Error('Failed to fetch tweet');
                }
            }
            else {
                const response = await fetch(this._endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        url,
                    }),
                    signal,
                })
                    .then(r => {
                    if (!r || !r.ok) {
                        throw new Error('Failed to fetch link preview');
                    }
                    return r;
                })
                    .catch(err => {
                    if (isAbortError(err))
                        return null;
                    throw new Error('Failed to fetch link preview');
                });
                if (!response)
                    return {};
                const data = await response.json();
                return {
                    title: data.title ? this._getStringFromHTML(data.title) : null,
                    description: data.description
                        ? this._getStringFromHTML(data.description)
                        : null,
                    icon: data.favicons?.[0],
                    image: data.images?.[0],
                };
            }
        };
    }
    _getStringFromHTML(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent;
    }
}
//# sourceMappingURL=helper.js.map