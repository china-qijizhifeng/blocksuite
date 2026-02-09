import { NoopLogger } from '@blocksuite/global/utils';
import { AwarenessEngine, BlobEngine, DocEngine, MemoryBlobSource, NoopDocSource, } from '@blocksuite/sync';
import { merge } from 'merge';
import { Awareness } from 'y-protocols/awareness.js';
import { createAutoIncrementIdGenerator, createAutoIncrementIdGeneratorByClientId, nanoid, uuidv4, } from '../utils/id-generator.js';
import { AwarenessStore } from '../yjs/awareness.js';
import { BlockSuiteDoc } from '../yjs/index.js';
export var Generator;
(function (Generator) {
    /**
     * Default mode, generator for the unpredictable id
     */
    Generator["NanoID"] = "nanoID";
    Generator["UUIDv4"] = "uuidV4";
    /**
     * This generator is trying to fix the real-time collaboration on debug mode.
     * This will make generator predictable and won't make conflict
     * @link https://docs.yjs.dev/api/faq#i-get-a-new-clientid-for-every-session-is-there-a-way-to-make-it-static-for-a-peer-accessing-the-doc
     */
    Generator["AutoIncrementByClientId"] = "autoIncrementByClientId";
    /**
     * **Warning**: This generator mode will crash the collaborative feature
     *  if multiple clients are adding new blocks.
     * Use this mode only if you know what you're doing.
     */
    Generator["AutoIncrement"] = "autoIncrement";
})(Generator || (Generator = {}));
const FLAGS_PRESET = {
    enable_synced_doc_block: false,
    enable_pie_menu: false,
    enable_database_statistics: false,
    enable_database_attachment_note: false,
    enable_legacy_validation: true,
    enable_expand_database_block: false,
    enable_block_query: false,
    enable_lasso_tool: false,
    enable_edgeless_text: true,
    enable_ai_onboarding: false,
    readonly: {},
};
export class Store {
    constructor({ id, idGenerator, defaultFlags, awarenessSources = [], docSources = {
        main: new NoopDocSource(),
    }, blobSources = {
        main: new MemoryBlobSource(),
    }, logger = new NoopLogger(), } = {
        id: nanoid(),
    }) {
        this.spaces = new Map();
        this.id = id || '';
        this.doc = new BlockSuiteDoc({ guid: id });
        this.awarenessStore = new AwarenessStore(this, new Awareness(this.doc), merge(true, FLAGS_PRESET, defaultFlags));
        this.awarenessSync = new AwarenessEngine(this.awarenessStore.awareness, awarenessSources);
        this.docSync = new DocEngine(this.doc, docSources.main, docSources.shadows ?? [], logger);
        this.blobSync = new BlobEngine(blobSources.main, blobSources.shadows ?? [], logger);
        if (typeof idGenerator === 'function') {
            this.idGenerator = idGenerator;
        }
        else {
            switch (idGenerator) {
                case Generator.AutoIncrement: {
                    this.idGenerator = createAutoIncrementIdGenerator();
                    break;
                }
                case Generator.AutoIncrementByClientId: {
                    this.idGenerator = createAutoIncrementIdGeneratorByClientId(this.doc.clientID);
                    break;
                }
                case Generator.UUIDv4: {
                    this.idGenerator = uuidv4;
                    break;
                }
                case Generator.NanoID:
                default: {
                    this.idGenerator = nanoid;
                    break;
                }
            }
        }
    }
    addSpace(space) {
        this.spaces.set(space.id, space);
    }
    removeSpace(space) {
        this.spaces.delete(space.id);
    }
}
//# sourceMappingURL=store.js.map